'use client';
import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import type { Feature } from '@/lib/types';

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" style={{display:'block'}}>
      <rect x="2" y="2" width="32" height="32" rx="9" fill="#d97757"/>
      <path d="M11 24 L 11 12 L 17 12 Q 21 12, 21 16 Q 21 20, 17 20 L 14 20" stroke="#fffdf6" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="25" cy="22" r="2.5" fill="#fffdf6"/>
    </svg>
  );
}

function BadgeRing({ pct }: { pct: number }) {
  return (
    <div style={{
      width: 52, height: 52, borderRadius: 26,
      background: `conic-gradient(#d97757 ${pct}%, #f0ede5 ${pct}%)`,
      display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 21, background:'#fffdf6',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize: 13, fontWeight: 700, color:'#d97757'
      }}>{pct}%</div>
    </div>
  );
}

function Pip({ on, color, label }: { on: boolean; color: string; label: string }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap: 6,
      padding:'6px 11px', borderRadius: 99, fontSize: 12, fontWeight: 600,
      background: on ? color : '#f5f2ea',
      color: on ? '#fff' : '#999',
      border: on ? `1px solid ${color}` : '1px solid #ece8de'
    }}>
      <span style={{fontSize: 12}}>{on ? '✓' : '○'}</span>
      {label}
    </span>
  );
}

function PortalArt({ kind }: { kind: string }) {
  if (kind === 'garden') {
    return (
      <svg viewBox="0 0 400 340" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%'}}>
        <rect width="400" height="340" fill="#d8e6b5"/>
        <circle cx="330" cy="90" r="24" fill="#ffd23f" opacity="0.8"/>
        <path d="M0 170 Q 120 130 230 170 T 400 160 L 400 340 L 0 340 Z" fill="#8ac47a"/>
        <path d="M0 210 Q 140 180 260 215 T 400 205 L 400 340 L 0 340 Z" fill="#6b8e4e"/>
        <path d="M 30 250 Q 120 190 220 220 T 380 200" stroke="#cbb380" strokeWidth="14" fill="none" strokeDasharray="2 14" strokeLinecap="round" opacity="0.85"/>
        <g transform="translate(80 180)">
          <rect x="-2" y="10" width="4" height="26" fill="#4a6a3a"/>
          <circle cx="0" cy="6" r="14" fill="#e25c78"/>
          <circle cx="0" cy="6" r="5" fill="#ffd23f"/>
        </g>
        <g transform="translate(200 195)">
          <rect x="-2" y="10" width="4" height="24" fill="#4a6a3a"/>
          <path d="M-14 -4 Q 0 -22 14 -4 Q 20 12 0 18 Q -20 12 -14 -4 Z" fill="#6b8e4e"/>
        </g>
        <g transform="translate(310 175)">
          <rect x="-2" y="12" width="4" height="28" fill="#4a6a3a"/>
          <circle cx="0" cy="0" r="18" fill="#e9a23b"/>
          <circle cx="0" cy="0" r="7" fill="#6b4f3a"/>
        </g>
      </svg>
    );
  }
  if (kind === 'lab') {
    return (
      <svg viewBox="0 0 400 340" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%'}}>
        <rect width="400" height="340" fill="#e4e8f2"/>
        <g stroke="#c9cfde" strokeWidth="1" opacity="0.7">
          {Array.from({length: 18}).map((_, i) => <line key={'h'+i} x1="0" y1={i*20} x2="400" y2={i*20}/>)}
          {Array.from({length: 22}).map((_, i) => <line key={'v'+i} x1={i*20} y1="0" x2={i*20} y2="340"/>)}
        </g>
        <g transform="translate(60 150)">
          <path d="M-6 0 L-6 30 L-34 80 L36 80 L10 30 L10 0 Z" fill="#fffdf6" stroke="#1a2238" strokeWidth="2.5"/>
          <path d="M-30 70 Q 0 58 30 70 L 36 80 L-34 80 Z" fill="#7c6df2" opacity="0.65"/>
          <circle cx="-8" cy="60" r="3" fill="#fff"/>
          <rect x="-8" y="-8" width="14" height="6" fill="#1a2238"/>
        </g>
        <g transform="translate(230 120)">
          <rect x="-30" y="110" width="110" height="10" fill="#1a2238"/>
          <circle cx="20" cy="96" r="14" fill="#cbd5e1" stroke="#1a2238" strokeWidth="2"/>
          <rect x="14" y="50" width="12" height="46" fill="#1a2238"/>
          <rect x="6" y="30" width="28" height="22" fill="#4a5068" stroke="#1a2238" strokeWidth="2" rx="4"/>
          <circle cx="20" cy="24" r="6" fill="#3bb6d6"/>
        </g>
        <g transform="translate(320 220)">
          <circle cx="0" cy="0" r="9" fill="#e25c78"/>
          <circle cx="26" cy="-14" r="7" fill="#3bb6d6"/>
          <circle cx="24" cy="16" r="7" fill="#2a9d8f"/>
          <line x1="0" y1="0" x2="26" y2="-14" stroke="#1a2238" strokeWidth="2"/>
          <line x1="0" y1="0" x2="24" y2="16" stroke="#1a2238" strokeWidth="2"/>
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 340" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%'}}>
      <rect width="400" height="340" fill="#ffd7a6"/>
      <circle cx="340" cy="60" r="26" fill="#ffcf33"/>
      <path d="M0 220 Q 130 180 260 220 T 400 210 L 400 340 L 0 340 Z" fill="#8fc576"/>
      <path d="M0 260 Q 140 230 260 265 T 400 250 L 400 340 L 0 340 Z" fill="#6ba85c"/>
      <g transform="translate(60 160)">
        <line x1="6" y1="0" x2="6" y2="80" stroke="#6b4f3a" strokeWidth="5"/>
        <line x1="22" y1="0" x2="22" y2="80" stroke="#6b4f3a" strokeWidth="5"/>
        <rect x="4" y="-6" width="26" height="8" fill="#6b4f3a"/>
        <path d="M 24 0 Q 46 30 76 60 L 104 88 L 76 88 Q 36 60 18 4 Z" fill="#ffd23f" stroke="#c8a600" strokeWidth="2"/>
      </g>
      <g transform="translate(230 140)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#6b4f3a" strokeWidth="6"/>
        <line x1="6" y1="0" x2="-6" y2="70" stroke="#6b4f3a" strokeWidth="5"/>
        <line x1="74" y1="0" x2="86" y2="70" stroke="#6b4f3a" strokeWidth="5"/>
        <line x1="24" y1="0" x2="24" y2="46" stroke="#4a5068" strokeWidth="2"/>
        <line x1="56" y1="0" x2="56" y2="46" stroke="#4a5068" strokeWidth="2"/>
        <rect x="18" y="44" width="44" height="8" fill="#ef8d3c" rx="2"/>
      </g>
    </svg>
  );
}

function Portal({ portal, featureCount, assignedLevel, pendingLevel, completedCount, finished, onEnter }: {
  portal: { key: string; title: string; tag: string; desc: string; palette: { bg: string; ink: string; accent: string } };
  featureCount: number;
  assignedLevel: number | null;
  pendingLevel: number;
  completedCount: number;
  finished: boolean;
  onEnter: () => void;
}) {
  const [hover, setHover] = useState(false);
  const p = portal.palette;
  const level = assignedLevel || pendingLevel;
  const visited = assignedLevel != null;

  return (
    <button
      onClick={onEnter}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: 'none', background: p.bg, cursor: 'pointer',
        borderRadius: 20, padding: 0, textAlign:'left',
        position:'relative', overflow:'hidden',
        minHeight: 340,
        boxShadow: hover
          ? '0 20px 44px rgba(0,0,0,0.12), 0 2px 0 rgba(0,0,0,0.04) inset'
          : '0 4px 14px rgba(0,0,0,0.06), 0 2px 0 rgba(0,0,0,0.04) inset',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'all 240ms cubic-bezier(.2,.8,.2,1)',
        fontFamily: 'inherit'
      }}
    >
      <div style={{position:'absolute', inset: 0, opacity: 0.9}}>
        <PortalArt kind={portal.key} />
      </div>

      {finished && (
        <div style={{
          position:'absolute', top: 16, right: 16, zIndex: 3,
          background: p.accent, color: '#fff',
          border: `2px solid ${p.accent}`,
          borderRadius: 12, padding: '4px 10px',
          fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform:'uppercase'
        }}>
          ✓ cleared
        </div>
      )}

      <div style={{
        position:'absolute', top: 0, left: 0, right: 0, zIndex: 2,
        background: 'linear-gradient(180deg, rgba(255,253,246,0.95) 0%, rgba(255,253,246,0.75) 65%, rgba(255,253,246,0) 100%)',
        padding: '22px 22px 48px'
      }}>
        <div style={{
          fontSize: 11, letterSpacing:'0.15em', textTransform:'uppercase',
          color: p.accent, fontWeight: 800, marginBottom: 4
        }}>
          {portal.tag}
        </div>
        <div style={{
          fontFamily:"'Livvic', 'DM Sans', sans-serif", fontWeight: 800,
          fontSize: 26, color: p.ink, lineHeight: 1.1, letterSpacing:'-0.01em'
        }}>
          {portal.title}
        </div>
      </div>

      <div style={{
        position:'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
        background: 'linear-gradient(180deg, rgba(255,253,246,0) 0%, rgba(255,253,246,0.92) 40%, rgba(255,253,246,0.98) 100%)',
        padding: '48px 22px 22px'
      }}>
        <div style={{display:'flex', alignItems:'center', gap: 12, flexWrap:'wrap'}}>
          <div style={{display:'flex', gap: 4}}>
            {Array.from({length: featureCount}).map((_, i) => (
              <span key={i} style={{
                display:'inline-block', width: 10, height: 10, borderRadius: 5,
                background: i < completedCount ? p.accent : 'rgba(0,0,0,0.12)',
                transition: 'background 200ms'
              }}/>
            ))}
          </div>
          <div style={{fontSize: 12, color:'#666', fontWeight: 600}}>
            {completedCount}/{featureCount} cleared
          </div>
        </div>

        <div style={{
          marginTop: 16,
          display:'inline-flex', alignItems:'center', gap: 8,
          background: p.ink, color:'#fff',
          padding: '10px 14px', borderRadius: 99,
          fontSize: 13, fontWeight: 700,
          transition:'transform 200ms',
          transform: hover ? 'translateX(4px)' : 'none'
        }}>
          {visited ? (finished ? 'Revisit' : 'Continue') : 'Enter'} →
        </div>
      </div>
    </button>
  );
}

export default function Hub({ features }: { features: Feature[] }) {
  const progress = useProgress();

  const portals = [
    {
      key: 'garden',
      title: 'The Garden',
      tag: 'Tend it slowly',
      desc: 'A quiet plot where features grow from seeds you plant. For settling in and getting oriented.',
      palette: { bg: '#d8e6b5', ink: '#2e3f20', accent: '#6b8e4e' }
    },
    {
      key: 'lab',
      title: 'The Laboratory',
      tag: 'Run it rigorous',
      desc: 'A research floor where features are elements on benches. For prototyping and precision.',
      palette: { bg: '#e4e8f2', ink: '#1a2238', accent: '#7c6df2' }
    },
    {
      key: 'playground',
      title: 'The Playground',
      tag: 'Just try stuff',
      desc: 'An open park where features are structures you clamber on. For momentum and play.',
      palette: { bg: '#ffd7a6', ink: '#4a2109', accent: '#ef8d3c' }
    }
  ];

  const allFinished =
    progress.themeFinished('garden', features) &&
    progress.themeFinished('lab', features) &&
    progress.themeFinished('playground', features);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 30% 0%, #fff3e6 0%, #fffaf0 40%, #f7f0e2 100%)',
      padding: '28px 28px 60px',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{position:'absolute', top:-80, left:-60, width: 320, height: 320, borderRadius: 999, background:'#d8e6b5', opacity: 0.35, filter:'blur(40px)'}}/>
      <div style={{position:'absolute', top: 100, right: -100, width: 360, height: 360, borderRadius: 999, background:'#e4e8f2', opacity: 0.5, filter:'blur(50px)'}}/>
      <div style={{position:'absolute', bottom: -120, left: '40%', width: 400, height: 400, borderRadius: 999, background:'#ffd7a6', opacity: 0.35, filter:'blur(60px)'}}/>

      {/* Top bar */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth: 1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between',
        gap: 20, flexWrap:'wrap', marginBottom: 36
      }}>
        <div style={{display:'flex', alignItems:'center', gap: 12}}>
          <Logo/>
          <div>
            <div style={{fontWeight: 800, fontSize: 17, color:'#2a2a2a', letterSpacing:'-0.01em'}}>
              Playlab <span style={{opacity:0.5, fontWeight: 600}}>/</span> Level Up
            </div>
            <div style={{fontSize: 12, color:'#666'}}>Challenges for educators building with Playlab</div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth: 880, margin:'0 auto 40px', textAlign:'center'
      }}>
        <div style={{
          display:'inline-block', background:'rgba(217,119,87,0.12)', color:'#a54811',
          padding:'5px 12px', borderRadius: 99, fontSize: 11, fontWeight: 800,
          letterSpacing:'0.12em', textTransform:'uppercase', marginBottom: 14
        }}>
          Level Up · three places, three levels
        </div>
        <h1 style={{
          margin: '0 0 14px',
          fontFamily:"'Livvic', 'DM Sans', sans-serif", fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05,
          color:'#2a2a2a', letterSpacing:'-0.02em'
        }}>
          Pick where you want to start.
        </h1>
        <p style={{
          fontSize: 16.5, lineHeight: 1.55, color:'#555', margin:'0 auto',
          maxWidth: 640
        }}>
          Seven Playlab features to learn, three levels deep. <strong>Your first stop holds every Level 1 challenge</strong> — your second holds Level 2, your third holds Level 3. Where you begin is up to you.
        </p>
      </div>

      {/* Portals */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth: 1200, margin:'0 auto',
        display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20
      }}>
        {portals.map(p => (
          <Portal
            key={p.key}
            portal={p}
            featureCount={features.length}
            assignedLevel={progress.levelForTheme(p.key)}
            pendingLevel={progress.pendingLevelForTheme(p.key)}
            completedCount={progress.themeCompletedCount(p.key)}
            finished={progress.themeFinished(p.key, features)}
            onEnter={() => progress.visitTheme(p.key)}
          />
        ))}
      </div>

      {/* Overall progress ribbon */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth: 1200, margin: '32px auto 0',
        background:'#fffdf6', border:'1px solid rgba(0,0,0,0.08)', borderRadius: 16,
        padding: '16px 20px',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap: 16, flexWrap:'wrap'
      }}>
        <div style={{display:'flex', alignItems:'center', gap: 14}}>
          <BadgeRing
            pct={Math.round(
              ((progress.themeCompletedCount('garden') +
                progress.themeCompletedCount('lab') +
                progress.themeCompletedCount('playground')) /
                (features.length * 3)) * 100
            )}
          />
          <div>
            <div style={{fontSize: 13, fontWeight: 700, color:'#2a2a2a'}}>Your Level Up badges</div>
            <div style={{fontSize: 12, color:'#666'}}>
              {progress.state.visitOrder.length}/3 places visited · {allFinished ? 'Collection complete 🏆' : `${progress.themeCompletedCount('garden') + progress.themeCompletedCount('lab') + progress.themeCompletedCount('playground')} / ${features.length * 3} challenges cleared`}
            </div>
          </div>
        </div>
        <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
          <Pip on={progress.themeFinished('garden', features)} color="#6b8e4e" label="Garden tended"/>
          <Pip on={progress.themeFinished('lab', features)} color="#7c6df2" label="Lab explored"/>
          <Pip on={progress.themeFinished('playground', features)} color="#ef8d3c" label="Playground conquered"/>
          <Pip on={allFinished} color="#d97757" label="All 21 challenges"/>
        </div>
      </div>

    </div>
  );
}
