'use client';
import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import type { Feature } from '@/lib/types';

function StructureSVG({ kind, color }: { kind: string; color: string }) {
  const W = 150, H = 130;
  const common = { width: '100%' as const, height: '100%' as const };
  if (kind === 'swing') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <line x1="22" y1="28" x2="128" y2="28" stroke="#6b4f3a" strokeWidth="7" strokeLinecap="round"/>
        <line x1="32" y1="28" x2="18" y2="122" stroke="#6b4f3a" strokeWidth="6"/>
        <line x1="118" y1="28" x2="132" y2="122" stroke="#6b4f3a" strokeWidth="6"/>
        <line x1="58" y1="28" x2="58" y2="90" stroke="#4a5068" strokeWidth="2"/>
        <line x1="92" y1="28" x2="92" y2="90" stroke="#4a5068" strokeWidth="2"/>
        <rect x="52" y="88" width="46" height="10" rx="3" fill={color}/>
      </svg>
    );
  }
  if (kind === 'slide') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <line x1="26" y1="28" x2="26" y2="126" stroke="#6b4f3a" strokeWidth="5"/>
        <line x1="42" y1="28" x2="42" y2="126" stroke="#6b4f3a" strokeWidth="5"/>
        <line x1="24" y1="48" x2="44" y2="48" stroke="#6b4f3a" strokeWidth="3"/>
        <line x1="24" y1="68" x2="44" y2="68" stroke="#6b4f3a" strokeWidth="3"/>
        <line x1="24" y1="88" x2="44" y2="88" stroke="#6b4f3a" strokeWidth="3"/>
        <line x1="24" y1="108" x2="44" y2="108" stroke="#6b4f3a" strokeWidth="3"/>
        <rect x="24" y="22" width="44" height="10" rx="2" fill="#6b4f3a"/>
        <rect x="26" y="16" width="4" height="10" fill="#6b4f3a"/>
        <rect x="64" y="16" width="4" height="10" fill="#6b4f3a"/>
        <path d="M 48 30 Q 70 52, 96 86 L 130 120 L 128 126 L 96 126 Q 62 100, 44 40 Z" fill={color} stroke="#c8a600" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M 48 30 Q 70 52, 96 86 L 130 120" stroke="#fffdf6" strokeWidth="2" fill="none" opacity="0.6"/>
        <ellipse cx="128" cy="122" rx="10" ry="4" fill="#c8a600"/>
      </svg>
    );
  }
  if (kind === 'sandbox') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="16" y="70" width="118" height="54" rx="6" fill="#d7b382"/>
        <rect x="16" y="70" width="118" height="12" fill={color}/>
        <circle cx="44" cy="100" r="5" fill="#a87a4a"/>
        <circle cx="72" cy="108" r="5" fill="#a87a4a"/>
        <circle cx="104" cy="96" r="5" fill="#a87a4a"/>
        <rect x="86" y="86" width="24" height="18" fill={color} opacity="0.8"/>
        <path d="M98 86 l 0 -12 l 10 5 z" fill={color}/>
      </svg>
    );
  }
  if (kind === 'climber') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <path d="M28 124 L 50 26 L 100 26 L 122 124" stroke={color} strokeWidth="7" fill="none" strokeLinejoin="round"/>
        <line x1="38" y1="72" x2="112" y2="72" stroke={color} strokeWidth="5"/>
        <line x1="32" y1="98" x2="118" y2="98" stroke={color} strokeWidth="5"/>
        <circle cx="62" cy="72" r="5" fill="#4a2109"/>
        <circle cx="90" cy="98" r="5" fill="#4a2109"/>
      </svg>
    );
  }
  if (kind === 'seesaw') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <polygon points="75,84 58,122 92,122" fill="#6b4f3a"/>
        <g transform="rotate(-7 75 84)">
          <rect x="12" y="79" width="126" height="12" rx="6" fill={color}/>
        </g>
        <circle cx="22" cy="66" r="7" fill="#4a2109"/>
        <circle cx="128" cy="92" r="7" fill="#4a2109"/>
      </svg>
    );
  }
  if (kind === 'merrygoround') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <ellipse cx="75" cy="118" rx="56" ry="8" fill="#6b4f3a" opacity="0.4"/>
        <ellipse cx="75" cy="100" rx="58" ry="14" fill={color}/>
        <ellipse cx="75" cy="96" rx="58" ry="10" fill="#fffdf6" opacity="0.3"/>
        <line x1="75" y1="28" x2="75" y2="96" stroke="#6b4f3a" strokeWidth="5"/>
        <circle cx="75" cy="26" r="8" fill="#4a2109"/>
        <line x1="75" y1="32" x2="22" y2="92" stroke={color} strokeWidth="3"/>
        <line x1="75" y1="32" x2="128" y2="92" stroke={color} strokeWidth="3"/>
        <line x1="75" y1="32" x2="50" y2="104" stroke={color} strokeWidth="3" opacity="0.7"/>
        <line x1="75" y1="32" x2="100" y2="104" stroke={color} strokeWidth="3" opacity="0.7"/>
        <circle cx="22" cy="92" r="5" fill="#4a2109"/>
        <circle cx="128" cy="92" r="5" fill="#4a2109"/>
      </svg>
    );
  }
  if (kind === 'climbnet') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <line x1="20" y1="30" x2="20" y2="126" stroke="#6b4f3a" strokeWidth="6"/>
        <line x1="130" y1="30" x2="130" y2="126" stroke="#6b4f3a" strokeWidth="6"/>
        <line x1="16" y1="30" x2="134" y2="30" stroke="#6b4f3a" strokeWidth="6"/>
        {[0,1,2,3,4].map(i => (
          <line key={'v'+i} x1={30 + i*22} y1="32" x2={30 + i*22} y2="124" stroke={color} strokeWidth="2.5"/>
        ))}
        {[0,1,2,3].map(i => (
          <line key={'h'+i} x1="22" y1={50 + i*22} x2="128" y2={50 + i*22} stroke={color} strokeWidth="2.5"/>
        ))}
        <circle cx="74" cy="68" r="6" fill="#4a2109"/>
        <rect x="70" y="74" width="8" height="14" fill="#4a2109"/>
      </svg>
    );
  }
  if (kind === 'megaphone') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="18" y="108" width="30" height="14" fill="#6b4f3a" rx="3"/>
        <rect x="30" y="84" width="6" height="24" fill="#6b4f3a"/>
        <path d="M28 54 L 76 34 L 120 22 L 120 94 L 76 82 L 28 62 Z" fill={color}/>
        <rect x="118" y="48" width="16" height="22" rx="3" fill="#4a2109"/>
        <path d="M138 40 Q 148 40, 148 54" stroke={color} strokeWidth="3" fill="none"/>
        <path d="M138 58 Q 150 58, 150 72" stroke={color} strokeWidth="3" fill="none"/>
      </svg>
    );
  }
  if (kind === 'treehouse') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} {...common}>
        <rect x="70" y="60" width="14" height="66" fill="#6b4f3a"/>
        <circle cx="76" cy="44" r="30" fill="#6ba85c"/>
        <circle cx="50" cy="56" r="18" fill="#6ba85c"/>
        <circle cx="104" cy="52" r="22" fill="#6ba85c"/>
        <rect x="54" y="62" width="44" height="26" fill={color}/>
        <polygon points="50,62 102,62 76,42" fill="#a54811"/>
        <rect x="70" y="70" width="12" height="14" fill="#4a2109"/>
        <line x1="68" y1="88" x2="60" y2="124" stroke="#6b4f3a" strokeWidth="3"/>
        <line x1="80" y1="88" x2="72" y2="124" stroke="#6b4f3a" strokeWidth="3"/>
        <line x1="66" y1="100" x2="78" y2="100" stroke="#6b4f3a" strokeWidth="2"/>
        <line x1="64" y1="112" x2="76" y2="112" stroke="#6b4f3a" strokeWidth="2"/>
      </svg>
    );
  }
  return null;
}

function PlayStop({ feature, left, top, done, onPick }: {
  feature: Feature; left: number; top: number; done: boolean; onPick: () => void;
}) {
  const color = feature.playground.color;
  const [hover, setHover] = useState(false);
  const structure = feature.playground.structure;

  return (
    <button
      onClick={onPick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'absolute',
        left: `${(left / 1000) * 100}%`,
        top: `${(top / 700) * 100}%`,
        transform: 'translate(-50%, -100%)',
        border: 'none', background: 'transparent', cursor: 'pointer',
        padding: 0, transition: 'transform 200ms cubic-bezier(.2,.8,.2,1)',
        fontFamily: 'inherit'
      }}
      aria-label={feature.name}
    >
      <div style={{
        position: 'relative',
        width: 150, height: 130
      }}>
        <StructureSVG kind={structure} color={color} />
      </div>
      <div style={{
        marginTop: 4,
        display:'inline-flex', alignItems:'center', gap: 6,
        background: done ? color : '#fffdf6',
        border: `2px solid ${color}`,
        color: done ? '#fff' : '#4a2109',
        padding: '4px 10px', borderRadius: 99,
        fontSize: 12.5, fontWeight: 800, whiteSpace: 'nowrap',
        transition: 'all 180ms',
        fontFamily: '"DM Sans", system-ui, sans-serif'
      }}>
        <span style={{
          display:'inline-block', width: 8, height: 8, borderRadius: 8,
          background: done ? '#fff' : color
        }}/>
        {feature.name}
        {done && <span style={{fontSize: 11}}>✓</span>}
      </div>
    </button>
  );
}

export default function PlaygroundView({ features, level, onPick }: {
  features: Feature[]; level: number; onPick: (f: Feature) => void;
}) {
  const progress = useProgress();

  const stops = [
    { x: 160, y: 200 },
    { x: 490, y: 150 },
    { x: 830, y: 220 },
    { x: 220, y: 500 },
    { x: 520, y: 430 },
    { x: 820, y: 500 },
    { x: 360, y: 640 }
  ];

  return (
    <div style={{
      background: 'linear-gradient(180deg, #ffe8c2 0%, #ffd4a0 40%, #ffc27a 100%)',
      borderRadius: 18, padding: 28, minHeight: 800, position:'relative', overflow:'hidden',
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }}>
      <svg viewBox="0 0 1000 800" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}>
        <circle cx="910" cy="90" r="56" fill="#ffd23f" opacity="0.55"/>
        <circle cx="910" cy="90" r="38" fill="#ffcf33" opacity="0.85"/>
        <path d="M0 200 Q 260 160 540 210 T 1000 190 L 1000 320 L 0 320 Z" fill="#8ac47a" opacity="0.45"/>
        <path d="M0 260 Q 260 220 540 270 T 1000 250 L 1000 380 L 0 380 Z" fill="#8ac47a" opacity="0.55"/>
        <path d="M0 260 Q 300 220 600 260 T 1000 250 L 1000 800 L 0 800 Z" fill="#8fc576" opacity="0.9"/>
        <path d="M0 320 Q 250 290 560 330 T 1000 310 L 1000 800 L 0 800 Z" fill="#6ba85c" opacity="0.7"/>
        <path
          d="M 80 720 Q 280 560 480 640 T 940 600"
          stroke="#e6d5a5" strokeWidth="34" fill="none" strokeLinecap="round"
          strokeDasharray="3 24" opacity="0.85"
        />
        {Array.from({length: 32}).map((_, i) => {
          const cx = (i * 157 + 50) % 1000;
          const cy = 280 + ((i * 71) % 480);
          const c = ['#ef476f','#ffd23f','#ff6b6b','#b96cc4'][i % 4];
          return (
            <g key={i} opacity="0.85">
              <circle cx={cx} cy={cy} r="3.2" fill={c}/>
              <circle cx={cx} cy={cy+1} r="1" fill="#fffdf6"/>
            </g>
          );
        })}
        <g transform="translate(70 380)">
          <rect x="14" y="36" width="8" height="28" fill="#6b4f3a"/>
          <circle cx="18" cy="28" r="24" fill="#6ba85c"/>
        </g>
        <g transform="translate(930 390)">
          <rect x="12" y="34" width="8" height="28" fill="#6b4f3a"/>
          <circle cx="16" cy="24" r="22" fill="#6ba85c"/>
        </g>
      </svg>

      <div style={{position:'relative', zIndex:2, marginBottom: 14}}>
        <div style={{fontSize: 12, letterSpacing:'0.15em', textTransform:'uppercase', color:'#a54811', fontWeight:800}}>
          The Level Up Playground
        </div>
        <h1 style={{margin:'4px 0 6px', fontFamily:"'Livvic', 'DM Sans', sans-serif", fontSize: 40, color:'#4a2109', letterSpacing:'-0.01em', fontWeight:700}}>
          Pick a thing. Go play.
        </h1>
        <p style={{margin: 0, color:'#6e3715', fontSize: 15, maxWidth: 620}}>
          Run around, climb on whatever looks fun. You&apos;re here for <strong>Level {level} challenges</strong> — clear all seven structures to collect the set.
        </p>
      </div>

      <div style={{position:'relative', height: 720, zIndex: 2}}>
        {features.map((f, i) => {
          const stop = stops[i];
          const done = progress.isComplete('playground', f.id);
          return (
            <PlayStop
              key={f.id}
              feature={f}
              left={stop.x}
              top={stop.y}
              done={done}
              onPick={() => onPick(f)}
            />
          );
        })}
      </div>
    </div>
  );
}
