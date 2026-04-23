// Shared challenge modal. Shows ONE level (determined by `level` prop)
// for the current theme. Completing here completes the feature for this theme.
window.ChallengeModal = function ChallengeModal({ feature, theme, level, onClose }) {
  const progress = window.useProgress();
  const accent = feature[theme]?.color || '#6b8e4e';

  const themeCopy = {
    garden: {
      levelLabels: ['Seed', 'Sprout', 'Bloom'],
      chrome: 'plant',
      steps: 'Growing steps',
      examples: 'Seen in the garden',
      learn: 'Almanac entries',
      markDone: 'Mark this plot tended',
      markDoneShort: 'Planted ✓',
      mastery: 'Plant tended'
    },
    lab: {
      levelLabels: ['Hypothesis', 'Experiment', 'Publication'],
      chrome: 'element',
      steps: 'Protocol',
      examples: 'Prior art',
      learn: 'Lab notes',
      markDone: 'Log the result',
      markDoneShort: 'Logged ✓',
      mastery: 'Result logged'
    },
    playground: {
      levelLabels: ['Warm-up', 'Game on', 'Victory lap'],
      chrome: 'structure',
      steps: 'How to play',
      examples: 'Other players',
      learn: 'Rulebook',
      markDone: 'Mark it cleared',
      markDoneShort: 'Cleared ✓',
      mastery: 'Structure cleared'
    }
  }[theme];

  // Close on ESC
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const levelIdx = Math.max(0, Math.min(2, (level || 1) - 1));
  const lv = feature.levels[levelIdx];
  const levelLabel = themeCopy.levelLabels[levelIdx];
  const done = progress.isComplete(theme, feature.id);

  const themeChrome =
    feature[theme]?.plant || feature[theme]?.symbol || feature[theme]?.structure || '';

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(20,18,14,0.55)',
        backdropFilter: 'blur(6px)', zIndex: 100, display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: 24,
        animation: 'fadeIn 200ms ease'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 860, maxHeight: 'calc(100vh - 48px)',
          background: '#fffdf6', borderRadius: 18,
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          border: `2px solid ${accent}22`,
          animation: 'popIn 260ms cubic-bezier(.2,.8,.2,1)'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '22px 28px', background: `linear-gradient(135deg, ${accent}12, ${accent}25)`,
          borderBottom: `1px solid ${accent}33`
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap: 16}}>
            <div style={{flex: 1, minWidth: 0}}>
              <div style={{
                display:'inline-flex', alignItems:'center', gap: 8,
                fontSize: 11, letterSpacing: '0.12em', textTransform:'uppercase',
                color: accent, fontWeight: 800, marginBottom: 6
              }}>
                <span style={{
                  background: accent, color: '#fff', padding: '2px 8px',
                  borderRadius: 6, fontSize: 10, letterSpacing: '0.08em'
                }}>
                  Level {levelIdx + 1} · {levelLabel}
                </span>
                <span>·</span>
                <span>{themeCopy.chrome} · {themeChrome}</span>
              </div>
              <h2 style={{margin: 0, fontFamily:"'Livvic', 'DM Sans', sans-serif", fontWeight: 800, fontSize: 28, letterSpacing:'-0.01em', color:'#2a2a2a'}}>
                {feature.name}
              </h2>
              <p style={{margin: '6px 0 0', color:'#555', fontSize: 14.5}}>{feature.tagline}</p>
            </div>
            <button onClick={onClose} aria-label="Close" style={{
              border: 'none', background: 'rgba(0,0,0,0.06)', width: 36, height: 36,
              borderRadius: 18, cursor: 'pointer', fontSize: 18, color: '#555'
            }}>×</button>
          </div>
          <p style={{margin: '14px 0 0', color:'#444', fontSize: 13.5, lineHeight: 1.55, maxWidth: 700}}>
            {feature.blurb}
          </p>
        </div>

        {/* Body */}
        <div style={{padding: '24px 28px', overflowY: 'auto', flex: 1}}>
          {/* The single assigned level */}
          <div style={{
            border: `1.5px solid ${done ? accent : '#e7e2d4'}`,
            background: done ? `${accent}0c` : '#fff',
            borderRadius: 14, padding: '18px 20px', marginBottom: 22,
            transition:'all 180ms'
          }}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 14, marginBottom: 10}}>
              <div style={{fontWeight: 700, fontSize: 18, color:'#222', lineHeight: 1.25}}>
                {lv.title}
              </div>
              <span style={{fontSize: 11.5, color:'#888', whiteSpace:'nowrap'}}>~{lv.estMinutes} min</span>
            </div>
            <div style={{fontSize: 14, color:'#555', lineHeight: 1.55, marginBottom: 14}}>
              {lv.brief}
            </div>
            <div style={{fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'#888', fontWeight: 700, marginBottom: 8}}>
              {themeCopy.steps}
            </div>
            <ol style={{margin: '0 0 16px', paddingLeft: 18, fontSize: 13.5, color:'#333', lineHeight: 1.6}}>
              {lv.steps.map((s, j) => <li key={j} style={{marginBottom: 4}}>{s}</li>)}
            </ol>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
              <button
                onClick={() => done
                  ? progress.uncompleteFeature(theme, feature.id)
                  : progress.completeFeature(theme, feature.id)
                }
                style={{
                  border: 'none', padding: '10px 16px', borderRadius: 10,
                  fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
                  background: done ? 'transparent' : accent,
                  color: done ? accent : '#fff',
                  boxShadow: done ? `inset 0 0 0 1.5px ${accent}` : 'none',
                  fontFamily:'inherit'
                }}
              >
                {done ? themeCopy.markDoneShort : themeCopy.markDone}
              </button>
            </div>
          </div>

          {/* Example apps */}
          <div style={{marginBottom: 22}}>
            <h3 style={{margin: '0 0 12px', fontSize: 12, letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', fontWeight: 700}}>
              {themeCopy.examples}
            </h3>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 14}}>
              {feature.exampleApps.map((app, i) => (
                <a key={i} href={app.url} target="_blank" rel="noopener" style={{
                  textDecoration: 'none', color: 'inherit',
                  border: '1px solid #e7e2d4', borderRadius: 12, padding: 12,
                  background: '#fff', transition: 'all 180ms',
                  display: 'block'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e7e2d4'; e.currentTarget.style.transform = 'none'; }}
                >
                  <window.AppPreview app={app} accent={accent} />
                  <div style={{marginTop: 10, fontWeight: 600, fontSize: 14, color:'#222'}}>{app.name}</div>
                  <div style={{fontSize: 12, color:'#888'}}>{app.author}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Learn links */}
          <div>
            <h3 style={{margin: '0 0 12px', fontSize: 12, letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', fontWeight: 700}}>
              {themeCopy.learn}
            </h3>
            <div style={{display:'flex', flexDirection:'column', gap: 6}}>
              {feature.learn.map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener" style={{
                  display:'flex', alignItems:'center', gap: 10,
                  padding: '10px 14px', border:'1px solid #e7e2d4', borderRadius: 8,
                  textDecoration:'none', color:'#333', fontSize: 14, background:'#fff',
                  transition: 'all 180ms'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = `${accent}0c`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e7e2d4'; e.currentTarget.style.background = '#fff'; }}
                >
                  <span style={{color: accent, fontSize: 14}}>↗</span>
                  <span style={{flex: 1}}>{r.title}</span>
                  <span style={{fontSize: 11, color:'#aaa'}}>learn.playlab.ai</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
