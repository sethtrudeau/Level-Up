'use client';
import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const progress = useProgress();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    progress.login(name.trim(), email.trim());
    onClose();
  }

  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset: 0, zIndex: 100,
        background:'rgba(20, 16, 10, 0.45)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding: 20, animation: 'fadeIn 180ms ease-out'
      }}
    >
      <form
        onClick={e => e.stopPropagation()}
        onSubmit={submit}
        style={{
          background:'#fffdf6', borderRadius: 18, padding: 28,
          width: '100%', maxWidth: 420,
          boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
          animation: 'popIn 240ms cubic-bezier(.2,.8,.2,1)',
          fontFamily: "'DM Sans', system-ui, sans-serif"
        }}
      >
        <div style={{
          fontSize: 11, letterSpacing:'0.15em', textTransform:'uppercase',
          color:'#a54811', fontWeight: 800, marginBottom: 6
        }}>
          Save your progress
        </div>
        <h2 style={{
          margin:'0 0 8px', fontFamily:"'Livvic', 'DM Sans', sans-serif",
          fontWeight: 800, fontSize: 24, color:'#2a2a2a', letterSpacing:'-0.01em'
        }}>
          Sign in to Level Up
        </h2>
        <p style={{fontSize: 13.5, color:'#666', lineHeight: 1.5, margin: '0 0 18px'}}>
          We&apos;ll remember which place you visited first, second, and third — plus every challenge you&apos;ve cleared along the way.
        </p>

        <label style={{display:'block', fontSize: 12, fontWeight: 700, color:'#555', marginBottom: 4, letterSpacing:'0.05em', textTransform:'uppercase'}}>Name</label>
        <input
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Ms. Navarro"
          style={{
            width:'100%', padding:'10px 12px', fontSize: 14,
            border:'1px solid rgba(0,0,0,0.15)', borderRadius: 10,
            fontFamily:'inherit', marginBottom: 12, background:'#fff'
          }}
        />

        <label style={{display:'block', fontSize: 12, fontWeight: 700, color:'#555', marginBottom: 4, letterSpacing:'0.05em', textTransform:'uppercase'}}>Email <span style={{fontWeight:500, color:'#999', textTransform:'none'}}>(optional)</span></label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@school.org"
          style={{
            width:'100%', padding:'10px 12px', fontSize: 14,
            border:'1px solid rgba(0,0,0,0.15)', borderRadius: 10,
            fontFamily:'inherit', marginBottom: 20, background:'#fff'
          }}
        />

        <div style={{display:'flex', gap: 10, justifyContent:'flex-end'}}>
          <button
            type="button"
            onClick={onClose}
            style={{
              border:'none', background:'transparent', cursor:'pointer',
              padding:'10px 14px', fontSize: 13, fontWeight: 600,
              color:'#666', fontFamily:'inherit', borderRadius: 8
            }}
          >
            Not now
          </button>
          <button
            type="submit"
            disabled={!name.trim()}
            style={{
              border:'none',
              background: name.trim() ? '#2a2a2a' : '#c9c5b8',
              color:'#fffdf6', cursor: name.trim() ? 'pointer' : 'not-allowed',
              padding:'10px 18px', fontSize: 13, fontWeight: 700,
              fontFamily:'inherit', borderRadius: 10
            }}
          >
            Sign in
          </button>
        </div>

        <div style={{fontSize: 11, color:'#999', marginTop: 14, textAlign:'center'}}>
          This is a demo — your info stays in this browser only.
        </div>
      </form>
    </div>
  );
}
