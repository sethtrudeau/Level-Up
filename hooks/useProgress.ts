'use client';
import { useState, useEffect } from 'react';
import type { Feature } from '@/lib/types';

// Progression model:
// - User picks themes in an order. Whichever theme they enter FIRST hosts Level 1
//   of every feature; second theme hosts Level 2; third hosts Level 3.
// - `visitOrder` is an array of theme keys in the order the user first entered them.
// - `completed[theme]` is a set (plain object used as set) of featureIds completed
//   while that theme was in play.
// - `screen` is 'hub' or 'theme'; `currentTheme` is which theme the user is in.
// - `user` is { name, email } or null.

const KEY = 'levelup-progress-v2';
const listeners = new Set<(s: ProgressState) => void>();

interface ProgressState {
  visitOrder: string[];
  completed: { garden: Record<string, boolean>; lab: Record<string, boolean>; playground: Record<string, boolean> };
  screen: 'hub' | 'theme';
  currentTheme: 'garden' | 'lab' | 'playground' | null;
  user: { name: string; email: string } | null;
}

const DEFAULT_STATE: ProgressState = {
  visitOrder: [],
  completed: { garden: {}, lab: {}, playground: {} },
  screen: 'hub',
  currentTheme: null,
  user: null
};

function loadFromStorage(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign({ ...DEFAULT_STATE }, JSON.parse(raw));
  } catch (e) {}
  return { ...DEFAULT_STATE };
}

// Always start with default so server and client render identically.
// localStorage is loaded after mount in useEffect.
let state: ProgressState = { ...DEFAULT_STATE };

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  listeners.forEach(fn => fn(state));
}

// Which level (1/2/3) this theme hosts, based on visit order. Returns null if unvisited.
function levelForTheme(theme: string): number | null {
  const idx = state.visitOrder.indexOf(theme);
  if (idx < 0) return null;
  return idx + 1; // 1, 2, or 3
}

// Which level a theme WOULD host if the user entered it next.
function pendingLevelForTheme(theme: string): number {
  const already = levelForTheme(theme);
  if (already) return already;
  return state.visitOrder.length + 1; // next slot
}

function visitTheme(theme: string) {
  let order = state.visitOrder;
  if (!order.includes(theme)) {
    order = [...order, theme];
  }
  state = { ...state, visitOrder: order, screen: 'theme', currentTheme: theme as ProgressState['currentTheme'] };
  save();
}

function goToHub() {
  state = { ...state, screen: 'hub' };
  save();
}

function completeFeature(theme: string, featureId: string) {
  const t = { ...((state.completed as Record<string, Record<string, boolean>>)[theme] || {}) };
  t[featureId] = true;
  state = { ...state, completed: { ...state.completed, [theme]: t } };
  save();
}

function uncompleteFeature(theme: string, featureId: string) {
  const t = { ...((state.completed as Record<string, Record<string, boolean>>)[theme] || {}) };
  delete t[featureId];
  state = { ...state, completed: { ...state.completed, [theme]: t } };
  save();
}

function isComplete(theme: string, featureId: string): boolean {
  return !!((state.completed as Record<string, Record<string, boolean>>)[theme]?.[featureId]);
}

function themeCompletedCount(theme: string): number {
  const t = (state.completed as Record<string, Record<string, boolean>>)[theme] || {};
  return Object.keys(t).length;
}

// A theme is "finished" when all 7 features are complete in it.
function themeFinished(theme: string, features: Feature[]): boolean {
  return features.every(f => isComplete(theme, f.id));
}

function login(name: string, email: string) {
  state = { ...state, user: { name: name || 'Educator', email: email || '' } };
  save();
}

function logout() {
  state = { ...state, user: null };
  save();
}

function reset() {
  state = { ...DEFAULT_STATE, user: state.user };
  save();
}

export function useProgress() {
  const [, force] = useState(0);
  useEffect(() => {
    // Load from localStorage after mount so initial render matches SSR
    const stored = loadFromStorage();
    state = stored;
    force(n => n + 1);
    const fn = () => force(n => n + 1);
    listeners.add(fn);
    return () => { listeners.delete(fn); };
  }, []);
  return {
    state,
    levelForTheme,
    pendingLevelForTheme,
    visitTheme,
    goToHub,
    completeFeature,
    uncompleteFeature,
    isComplete,
    themeCompletedCount,
    themeFinished,
    login,
    logout,
    reset
  };
}
