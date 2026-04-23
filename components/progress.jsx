// Progression model:
// - User picks themes in an order. Whichever theme they enter FIRST hosts Level 1
//   of every feature; second theme hosts Level 2; third hosts Level 3.
// - `visitOrder` is an array of theme keys in the order the user first entered them.
// - `completed[theme]` is a set (plain object used as set) of featureIds completed
//   while that theme was in play.
// - `screen` is 'hub' or 'theme'; `currentTheme` is which theme the user is in.
// - `user` is { name, email } or null.
window.useProgress = (function(){
  const KEY = 'levelup-progress-v2';
  const listeners = new Set();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // sanity defaults
        return Object.assign({
          visitOrder: [],
          completed: { garden: {}, lab: {}, playground: {} },
          screen: 'hub',
          currentTheme: null,
          user: null
        }, parsed);
      }
    } catch(e){}
    return {
      visitOrder: [],
      completed: { garden: {}, lab: {}, playground: {} },
      screen: 'hub',
      currentTheme: null,
      user: null
    };
  }

  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){}
    listeners.forEach(fn => fn(state));
  }

  // Which level (1/2/3) this theme hosts, based on visit order. Returns null if unvisited.
  function levelForTheme(theme) {
    const idx = state.visitOrder.indexOf(theme);
    if (idx < 0) return null;
    return idx + 1; // 1, 2, or 3
  }

  // Which level a theme WOULD host if the user entered it next.
  function pendingLevelForTheme(theme) {
    const already = levelForTheme(theme);
    if (already) return already;
    return state.visitOrder.length + 1; // next slot
  }

  function visitTheme(theme) {
    let order = state.visitOrder;
    if (!order.includes(theme)) {
      order = [...order, theme];
    }
    state = { ...state, visitOrder: order, screen: 'theme', currentTheme: theme };
    save();
  }

  function goToHub() {
    state = { ...state, screen: 'hub' };
    save();
  }

  function completeFeature(theme, featureId) {
    const t = { ...(state.completed[theme] || {}) };
    t[featureId] = true;
    state = { ...state, completed: { ...state.completed, [theme]: t } };
    save();
  }

  function uncompleteFeature(theme, featureId) {
    const t = { ...(state.completed[theme] || {}) };
    delete t[featureId];
    state = { ...state, completed: { ...state.completed, [theme]: t } };
    save();
  }

  function isComplete(theme, featureId) {
    return !!(state.completed[theme] && state.completed[theme][featureId]);
  }

  function themeCompletedCount(theme) {
    const t = state.completed[theme] || {};
    return Object.keys(t).length;
  }

  // A theme is "finished" when all 7 features are complete in it.
  function themeFinished(theme, features) {
    return features.every(f => isComplete(theme, f.id));
  }

  function login(name, email) {
    state = { ...state, user: { name: name || 'Educator', email: email || '' } };
    save();
  }

  function logout() {
    state = { ...state, user: null };
    save();
  }

  function reset() {
    state = {
      visitOrder: [],
      completed: { garden: {}, lab: {}, playground: {} },
      screen: 'hub',
      currentTheme: null,
      user: state.user // keep user
    };
    save();
  }

  return function useProgress() {
    const [, force] = React.useState(0);
    React.useEffect(() => {
      const fn = () => force(n => n + 1);
      listeners.add(fn);
      return () => listeners.delete(fn);
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
  };
})();
