'use client';
import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import type { Feature } from '@/lib/types';

function LabEquipment({ kind, color }: { kind: string; color: string }) {
  const W = 130, H = 96;
  const common = { width: W, height: H, style: { display:'block' as const } };

  if (kind === 'cortex') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <path d="M 40 30 L 40 82 Q 40 86 44 86 L 86 86 Q 90 86 90 82 L 90 30 Z" fill="#cfe4ff" opacity="0.55" stroke="#4a5068" strokeWidth="1.5"/>
        <rect x="38" y="24" width="54" height="6" fill="#4a5068" rx="2"/>
        <rect x="44" y="20" width="42" height="4" fill="#6a7280" rx="1"/>
        <g transform="translate(65 55)">
          <ellipse cx="0" cy="0" rx="18" ry="14" fill={color} opacity="0.75"/>
          <path d="M-14 -4 Q -8 -10 0 -8 Q 8 -12 14 -4 M-12 2 Q -4 6 4 2 Q 10 6 12 0" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.75"/>
        </g>
        <circle cx="55" cy="72" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="78" cy="68" r="1" fill="#fff" opacity="0.7"/>
        <circle cx="64" cy="80" r="1.3" fill="#fff" opacity="0.7"/>
      </svg>
    );
  }
  if (kind === 'scope') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <rect x="24" y="76" width="82" height="10" fill="#4a5068" rx="2"/>
        <rect x="44" y="66" width="42" height="10" fill="#6a7280"/>
        <rect x="56" y="68" width="18" height="6" fill={color}/>
        <rect x="60" y="30" width="10" height="40" fill="#4a5068"/>
        <rect x="50" y="18" width="30" height="16" fill="#2a3248" rx="3"/>
        <circle cx="65" cy="12" r="5" fill={color}/>
        <rect x="62" y="4" width="6" height="8" fill="#4a5068"/>
      </svg>
    );
  }
  if (kind === 'oscilloscope') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="8" y="84" width="114" height="8" fill="#9aa3ba" rx="2"/>
        <rect x="16" y="22" width="98" height="62" fill="#2a3248" rx="6"/>
        <rect x="22" y="28" width="86" height="42" fill="#0a1020" rx="2"/>
        <g stroke="#1f3a5c" strokeWidth="0.5" opacity="0.8">
          {[1,2,3,4,5].map(i => <line key={'wh'+i} x1="22" y1={28 + i*7} x2="108" y2={28 + i*7}/>)}
          {[1,2,3,4,5,6,7,8,9,10,11].map(i => <line key={'wv'+i} x1={22 + i*7} y1="28" x2={22 + i*7} y2="70"/>)}
        </g>
        <path d="M 22 49 Q 30 40, 36 49 T 50 49 Q 58 34, 64 49 T 78 49 Q 84 56, 90 49 T 108 49"
              stroke={color} strokeWidth="1.8" fill="none"/>
        <circle cx="28" cy="78" r="3" fill="#6a7280"/>
        <circle cx="40" cy="78" r="3" fill="#6a7280"/>
        <circle cx="100" cy="78" r="3" fill={color}/>
      </svg>
    );
  }
  if (kind === 'plotter') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <rect x="24" y="48" width="82" height="38" fill="#fffdf6" stroke="#b4bdd1" strokeWidth="1"/>
        <line x1="30" y1="56" x2="88" y2="56" stroke="#c8d0de" strokeWidth="1"/>
        <line x1="30" y1="62" x2="96" y2="62" stroke="#c8d0de" strokeWidth="1"/>
        <line x1="30" y1="68" x2="82" y2="68" stroke="#c8d0de" strokeWidth="1"/>
        <line x1="30" y1="74" x2="94" y2="74" stroke="#c8d0de" strokeWidth="1"/>
        <line x1="30" y1="80" x2="70" y2="80" stroke={color} strokeWidth="1.6"/>
        <rect x="18" y="34" width="94" height="6" fill="#4a5068" rx="2"/>
        <rect x="56" y="32" width="18" height="10" fill={color} rx="2"/>
        <line x1="65" y1="42" x2="65" y2="58" stroke="#2a3248" strokeWidth="1.5"/>
        <circle cx="65" cy="60" r="1.8" fill="#2a3248"/>
      </svg>
    );
  }
  if (kind === 'centrifuge') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <ellipse cx="65" cy="82" rx="42" ry="6" fill="#4a5068"/>
        <rect x="30" y="52" width="70" height="30" fill="#cbd5e1" stroke="#4a5068" strokeWidth="1.5" rx="4"/>
        <ellipse cx="65" cy="52" rx="36" ry="10" fill="#8ba5d1" opacity="0.55"/>
        <ellipse cx="65" cy="48" rx="34" ry="8" fill="#fff" opacity="0.25"/>
        <g transform="translate(65 52)">
          <rect x="-30" y="-2" width="60" height="4" fill={color} rx="1"/>
          <rect x="-2" y="-14" width="4" height="28" fill={color} opacity="0.6" rx="1"/>
        </g>
        <rect x="58" y="38" width="14" height="4" fill="#4a5068" rx="1"/>
        <rect x="36" y="72" width="58" height="6" fill="#2a3248" rx="1"/>
        <circle cx="44" cy="75" r="1.5" fill={color}/>
        <circle cx="52" cy="75" r="1.5" fill="#fbbf24"/>
        <circle cx="60" cy="75" r="1.5" fill="#22c55e"/>
      </svg>
    );
  }
  if (kind === 'terminal') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <rect x="28" y="76" width="74" height="8" fill="#4a5068" rx="2"/>
        <rect x="60" y="66" width="10" height="10" fill="#6a7280"/>
        <rect x="20" y="14" width="90" height="54" fill="#2a3248" rx="4"/>
        <rect x="24" y="18" width="82" height="42" fill="#0a1020" rx="2"/>
        <g fontFamily="ui-monospace, monospace" fontSize="6" fill={color}>
          <text x="28" y="27">&gt; review --week</text>
          <text x="28" y="36" fill="#9aa3ba">12 sessions</text>
          <text x="28" y="45" fill="#fbbf24">2 flagged</text>
          <text x="28" y="54" fill={color}>fix: tone_v3</text>
        </g>
        <rect x="86" y="50" width="4" height="6" fill={color}/>
      </svg>
    );
  }
  if (kind === 'archive') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
        <rect x="22" y="30" width="44" height="54" fill="#b4bdd1" stroke="#4a5068" strokeWidth="1.5" rx="2"/>
        <rect x="24" y="34" width="40" height="14" fill="#e5e9f3"/>
        <rect x="24" y="50" width="40" height="14" fill="#e5e9f3"/>
        <rect x="24" y="66" width="40" height="14" fill="#e5e9f3"/>
        <circle cx="58" cy="41" r="1.5" fill="#4a5068"/>
        <circle cx="58" cy="57" r="1.5" fill="#4a5068"/>
        <circle cx="58" cy="73" r="1.5" fill="#4a5068"/>
        <rect x="74" y="50" width="38" height="34" fill="#dde2ed"/>
        <rect x="76" y="54" width="6" height="28" fill={color}/>
        <rect x="84" y="52" width="5" height="30" fill="#2a9d8f"/>
        <rect x="91" y="56" width="7" height="26" fill="#e25c78"/>
        <rect x="100" y="54" width="5" height="28" fill="#fbbf24"/>
        <rect x="107" y="58" width="5" height="24" fill="#7c6df2"/>
        <rect x="72" y="82" width="42" height="3" fill="#4a5068"/>
        <rect x="72" y="48" width="42" height="3" fill="#4a5068"/>
      </svg>
    );
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} {...common}>
      <rect x="10" y="84" width="110" height="8" fill="#9aa3ba" rx="2"/>
      <circle cx="65" cy="50" r="20" fill={color}/>
    </svg>
  );
}

function LabStation({ feature, left, top, equip, done, onClick }: {
  feature: Feature; left: number; top: number; equip: string; done: boolean; onClick: () => void;
}) {
  const color = feature.lab.color;
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'absolute',
        left: `${(left / 1000) * 100}%`,
        top: `${(top / 820) * 100}%`,
        transform: `translate(-50%, -50%) ${hover ? 'translateY(-2px)' : ''}`,
        border: '1.5px solid #c9d0df',
        background: '#ffffff',
        borderRadius: 8,
        cursor: 'pointer',
        padding: 0, transition: 'transform 180ms, box-shadow 180ms',
        fontFamily: 'inherit', width: 180, height: 180,
        boxShadow: hover ? '0 8px 20px rgba(26,34,56,0.12)' : '0 2px 6px rgba(26,34,56,0.06)',
        display:'flex', flexDirection:'column', alignItems:'stretch',
        overflow: 'hidden'
      }}
      aria-label={feature.name}
    >
      <div style={{
        height: 10, background: '#4a5068',
        borderBottom: '1px solid #2a3248', flexShrink: 0
      }}/>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: '6px 12px 0', fontFamily:'ui-monospace, monospace', fontSize: 10,
        color:'#6a7280', fontWeight: 700
      }}>
        <span>{feature.lab.atomicHint} · {feature.lab.symbol}</span>
        <span style={{display:'inline-flex', alignItems:'center', gap: 4, letterSpacing:'0.08em'}}>
          <span style={{
            display:'inline-block', width: 7, height: 7, borderRadius: 4,
            background: done ? '#22c55e' : (hover ? '#fbbf24' : '#cbd5e1'),
            boxShadow: done ? '0 0 6px #22c55e88' : 'none'
          }}/>
          {done ? 'LOGGED' : 'IDLE'}
        </span>
      </div>
      <div style={{
        flex: 1,
        display:'flex', alignItems:'center', justifyContent:'center',
        padding: '2px 0'
      }}>
        <LabEquipment kind={equip} color={color} />
      </div>
      <div style={{
        display:'flex', justifyContent:'center',
        paddingBottom: 10
      }}>
        <span style={{
          display:'inline-flex', alignItems:'center', gap: 6,
          background: done ? color : '#fff',
          color: done ? '#fff' : '#1a2238',
          border: `1.5px solid ${color}`,
          padding: '4px 10px', borderRadius: 6,
          fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
          transition: 'all 180ms'
        }}>
          <span style={{
            display:'inline-block', width: 6, height: 6, borderRadius: 3,
            background: done ? '#fff' : color
          }}/>
          {feature.name}
          {done && <span style={{fontSize: 11}}>✓</span>}
        </span>
      </div>
    </button>
  );
}

export default function LabView({ features, level, onPick }: {
  features: Feature[]; level: number; onPick: (f: Feature) => void;
}) {
  const progress = useProgress();

  const stations = [
    { x: 200, y: 220, equip: 'cortex'       },
    { x: 500, y: 220, equip: 'scope'        },
    { x: 800, y: 220, equip: 'oscilloscope' },
    { x: 200, y: 460, equip: 'plotter'      },
    { x: 500, y: 460, equip: 'centrifuge'   },
    { x: 800, y: 460, equip: 'terminal'     },
    { x: 500, y: 680, equip: 'archive'      }
  ];

  return (
    <div style={{
      background: '#eef1f7',
      borderRadius: 18, padding: 24, minHeight: 860, position:'relative', overflow:'hidden',
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }}>
      <svg
        viewBox="0 0 1000 820"
        preserveAspectRatio="none"
        style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}
      >
        <rect width="1000" height="820" fill="#e9edf5"/>
        <g stroke="#d3d9e6" strokeWidth="1" opacity="0.85">
          {Array.from({length: 22}).map((_, i) => <line key={'h'+i} x1="0" y1={i*40} x2="1000" y2={i*40}/>)}
          {Array.from({length: 26}).map((_, i) => <line key={'v'+i} x1={i*40} y1="0" x2={i*40} y2="820"/>)}
        </g>
        <g stroke="#dde2ed" strokeWidth="0.5" opacity="0.5">
          {Array.from({length: 103}).map((_, i) => <line key={'mh'+i} x1="0" y1={i*8} x2="1000" y2={i*8}/>)}
          {Array.from({length: 125}).map((_, i) => <line key={'mv'+i} x1={i*8} y1="0" x2={i*8} y2="820"/>)}
        </g>
        <g stroke="#c9d0df" strokeWidth="1" strokeDasharray="2 6" opacity="0.55">
          <line x1="350" y1="40" x2="350" y2="780"/>
          <line x1="650" y1="40" x2="650" y2="780"/>
          <line x1="40" y1="340" x2="960" y2="340"/>
          <line x1="40" y1="570" x2="960" y2="570"/>
        </g>
        <g>
          <rect x="470" y="14" width="60" height="16" fill="#dde2ed" stroke="#9aa3ba" strokeWidth="1"/>
          <text x="500" y="25" textAnchor="middle" fontSize="8" fill="#6a7280"
                fontFamily="ui-monospace, monospace" fontWeight="700" letterSpacing="1.5">ENTRY</text>
        </g>
      </svg>

      <div style={{position:'relative', zIndex:2, marginBottom: 14, maxWidth: 720}}>
        <div style={{fontSize: 11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#6a7280', fontWeight:800, fontFamily:'ui-monospace, monospace'}}>
          Playlab Research Division · LVL-UP Wing B
        </div>
        <h1 style={{margin:'4px 0 6px', fontFamily:"'Livvic', 'DM Sans', sans-serif", fontSize: 36, color:'#1a2238', letterSpacing:'-0.01em', fontWeight: 800}}>
          The Feature Laboratory.
        </h1>
        <p style={{margin: 0, color:'#4a5068', fontSize: 15, maxWidth: 620}}>
          Pick a bench — each one&apos;s set up for one Playlab feature. You&apos;re running <strong>Level {level} protocols</strong>; log a result at every bench to clear the lab.
        </p>
      </div>

      <div style={{position:'relative', height: 820, zIndex: 2}}>
        {features.map((f, i) => {
          const s = stations[i];
          const done = progress.isComplete('lab', f.id);
          return (
            <LabStation
              key={f.id}
              feature={f}
              left={s.x}
              top={s.y}
              equip={s.equip}
              done={done}
              onClick={() => onPick(f)}
            />
          );
        })}
      </div>
    </div>
  );
}
