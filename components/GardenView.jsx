// Garden theme: a central clearing with branching paths radiating outward.
// Each feature is a plant at the end of its own path from the hub.
window.GardenView = function GardenView({ features, level, onPick, onBackToHub }) {
  const progress = window.useProgress();

  // Hub in the center; 7 plant stops radiating around it,
  // using the full canvas (top, sides, corners — not just bottom).
  // viewBox 1000x700.
  const hub = { x: 500, y: 360 };
  const stops = [
    { x: 170, y: 130 },   // NW
    { x: 520, y:  90 },   // N
    { x: 860, y: 140 },   // NE
    { x: 110, y: 430 },   // W
    { x: 890, y: 420 },   // E
    { x: 290, y: 620 },   // SW
    { x: 720, y: 620 }    // SE
  ];

  return (
    <div style={{
      background: 'linear-gradient(180deg, #e8f0d8 0%, #d4e3b8 55%, #c2d49c 100%)',
      borderRadius: 18, padding: '24px', position:'relative', overflow:'hidden',
      minHeight: 780, boxShadow: 'inset 0 -40px 60px -30px rgba(60,80,40,0.2)'
    }}>
      {/* Sky / sun decor */}
      <svg viewBox="0 0 1000 120" style={{position:'absolute', top:0, left:0, width:'100%', height:120, pointerEvents:'none'}}>
        <ellipse cx="180" cy="60" rx="70" ry="16" fill="#fffdf6" opacity="0.5"/>
        <ellipse cx="700" cy="40" rx="80" ry="14" fill="#fffdf6" opacity="0.45"/>
        <circle cx="950" cy="50" r="26" fill="#fff3c4" opacity="0.7"/>
      </svg>

      <div style={{position:'relative', zIndex: 3, marginBottom: 12}}>
        <div style={{fontSize: 12, letterSpacing:'0.15em', textTransform:'uppercase', color:'#4a6236', fontWeight:700}}>
          The Level Up Garden
        </div>
        <h1 style={{margin:'4px 0 6px', fontFamily:"'Livvic', 'DM Sans', sans-serif", fontSize: 38, color:'#2e3f20', letterSpacing:'-0.01em'}}>
          Tend what you want to grow.
        </h1>
        <p style={{margin: 0, color:'#4a6236', fontSize: 15, maxWidth: 620}}>
          Each plant is a Playlab feature. You're here for <strong>Level {level} challenges</strong> — tend all seven to clear the garden.
        </p>
      </div>

      {/* Paths + plants */}
      <div style={{position:'relative', height: 680}}>
        <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
          <defs>
            <pattern id="grass" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="5" r="0.7" fill="#6b8e4e" opacity="0.45"/>
              <circle cx="7" cy="2" r="0.5" fill="#7a9e6f" opacity="0.38"/>
            </pattern>
          </defs>
          <rect width="1000" height="700" fill="url(#grass)" opacity="0.55"/>

          {/* branching stone paths from hub to each stop, gently curved */}
          {stops.map((s, i) => {
            // control point offset perpendicular-ish for a soft curve
            const mx = (hub.x + s.x) / 2;
            const my = (hub.y + s.y) / 2;
            const dx = s.x - hub.x, dy = s.y - hub.y;
            // perpendicular
            const len = Math.sqrt(dx*dx + dy*dy) || 1;
            const px = -dy / len, py = dx / len;
            const bend = (i % 2 === 0 ? 1 : -1) * 42;
            const cx = mx + px * bend;
            const cy = my + py * bend;
            return (
              <path
                key={i}
                d={`M ${hub.x} ${hub.y} Q ${cx} ${cy}, ${s.x} ${s.y + 18}`}
                fill="none"
                stroke="#c9b88a"
                strokeWidth="26"
                strokeLinecap="round"
                strokeDasharray="2 22"
                opacity="0.85"
              />
            );
          })}

          {/* central clearing: packed stones */}
          <circle cx={hub.x} cy={hub.y} r="78" fill="#e6d5a5" opacity="0.9"/>
          <circle cx={hub.x} cy={hub.y} r="78" fill="none" stroke="#b39b68" strokeWidth="2" strokeDasharray="3 4" opacity="0.6"/>
          <circle cx={hub.x - 20} cy={hub.y - 14} r="10" fill="#c9b88a"/>
          <circle cx={hub.x + 22} cy={hub.y - 8} r="12" fill="#d4c492"/>
          <circle cx={hub.x - 8} cy={hub.y + 20} r="11" fill="#c9b88a"/>
          <circle cx={hub.x + 24} cy={hub.y + 22} r="9" fill="#bda877"/>
          <circle cx={hub.x - 30} cy={hub.y + 10} r="8" fill="#d4c492"/>

          {/* scattered wildflowers for richness */}
          {Array.from({length: 40}).map((_, i) => {
            const cx = (i * 137 + 40) % 1000;
            const cy = 30 + ((i * 71) % 640);
            // skip near hub and stops
            const nearHub = Math.hypot(cx - hub.x, cy - hub.y) < 110;
            const nearStop = stops.some(s => Math.hypot(cx - s.x, cy - s.y) < 70);
            if (nearHub || nearStop) return null;
            const c = ['#b96cc4', '#e9a23b', '#e25c78', '#f4c542'][i % 4];
            return (
              <g key={i} opacity="0.85">
                <circle cx={cx} cy={cy} r="2.6" fill={c}/>
                <circle cx={cx} cy={cy+1} r="0.9" fill="#fffdf6"/>
              </g>
            );
          })}
        </svg>

        {/* Center hub label */}
        <div style={{
          position: 'absolute',
          left: `${(hub.x / 1000) * 100}%`,
          top: `${(hub.y / 700) * 100}%`,
          transform: 'translate(-50%, -50%)',
          textAlign: 'center', pointerEvents: 'none', zIndex: 2
        }}>
          <div style={{
            fontFamily: "'Livvic', 'DM Sans', sans-serif",
            fontSize: 14, fontWeight: 600, color: '#4a2109',
            letterSpacing: '0.12em', textTransform: 'uppercase'
          }}>
            The Clearing
          </div>
          <div style={{fontSize: 11, color: '#6b4f3a', marginTop: 2, maxWidth: 150, lineHeight: 1.35}}>
            Pick any path to begin
          </div>
        </div>

        {/* Plants */}
        {features.map((f, i) => {
          const stop = stops[i];
          const done = progress.isComplete('garden', f.id);
          // stage: if not done, show level-based growth (1/2/3 → 1/2/3). If done, full bloom.
          const stage = done ? 3 : Math.max(1, Math.min(2, level));
          return (
            <GardenPlant
              key={f.id}
              feature={f}
              left={stop.x}
              top={stop.y}
              stage={stage}
              done={done}
              onClick={() => onPick(f)}
            />
          );
        })}
      </div>
    </div>
  );
};

function GardenPlant({ feature, left, top, stage, done, onClick }) {
  const color = feature.garden.color;
  const [hover, setHover] = React.useState(false);
  const size = 56 + stage * 14;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'absolute',
        left: `${(left / 1000) * 100}%`,
        top: `${(top / 700) * 100}%`,
        transform: `translate(-50%, -100%) ${hover ? 'translateY(-4px)' : ''}`,
        border: 'none', background: 'transparent', cursor: 'pointer',
        padding: 0, transition: 'transform 220ms ease', zIndex: 3
      }}
      aria-label={feature.name}
    >
      <div style={{
        width: 48, height: 12, borderRadius: 24, background: 'rgba(0,0,0,0.15)',
        position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)',
        filter: 'blur(3px)'
      }}/>
      <svg viewBox="0 0 80 100" width={size} height={size * 1.25} style={{display:'block'}}>
        <PlantSprite color={color} stage={stage} />
      </svg>
      <div style={{
        position: 'absolute', bottom: -42, left: '50%', transform: 'translateX(-50%)',
        background: '#fffdf6cc', border: '1px solid rgba(74,98,54,0.2)',
        padding: '3px 9px', borderRadius: 14, fontSize: 11.5, fontWeight: 600,
        color: '#2e3f20', whiteSpace: 'nowrap',
        boxShadow: hover ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
        transition: 'box-shadow 180ms'
      }}>
        <span style={{color}}>●</span> {feature.name}
      </div>
      {stage === 3 && done && (
        <div style={{
          position: 'absolute', top: -4, right: -4, width: 22, height: 22,
          background: '#f4c542', borderRadius: 11, display:'flex', alignItems:'center', justifyContent:'center',
          fontSize: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.2)', border:'2px solid #fff'
        }}>★</div>
      )}
    </button>
  );
}

function PlantSprite({ color, stage }) {
  const pot = (
    <>
      <rect x="26" y="84" width="28" height="14" rx="2" fill="#a8774e"/>
      <rect x="24" y="80" width="32" height="6" rx="2" fill="#b98862"/>
    </>
  );
  if (stage === 0) {
    return (
      <g>
        {pot}
        <ellipse cx="40" cy="80" rx="10" ry="3" fill="#5a4a36"/>
        <circle cx="40" cy="78" r="3" fill={color} opacity="0.5"/>
      </g>
    );
  }
  if (stage === 1) {
    return (
      <g>
        {pot}
        <path d="M40 80 Q 40 65, 38 58" stroke="#4a7c3a" strokeWidth="2" fill="none"/>
        <ellipse cx="35" cy="62" rx="5" ry="3" fill={color} transform="rotate(-20 35 62)"/>
        <ellipse cx="42" cy="58" rx="4" ry="2.5" fill={color} transform="rotate(30 42 58)"/>
      </g>
    );
  }
  if (stage === 2) {
    return (
      <g>
        {pot}
        <path d="M40 80 L40 50" stroke="#4a7c3a" strokeWidth="2.5" fill="none"/>
        <ellipse cx="33" cy="62" rx="8" ry="4" fill="#4a7c3a" transform="rotate(-30 33 62)"/>
        <ellipse cx="47" cy="58" rx="8" ry="4" fill="#4a7c3a" transform="rotate(30 47 58)"/>
        <circle cx="40" cy="48" r="8" fill={color} opacity="0.5"/>
        <circle cx="40" cy="48" r="5" fill={color}/>
      </g>
    );
  }
  return (
    <g>
      {pot}
      <path d="M40 80 L40 40" stroke="#4a7c3a" strokeWidth="3" fill="none"/>
      <ellipse cx="30" cy="65" rx="10" ry="5" fill="#4a7c3a" transform="rotate(-30 30 65)"/>
      <ellipse cx="50" cy="60" rx="10" ry="5" fill="#4a7c3a" transform="rotate(30 50 60)"/>
      {[0, 60, 120, 180, 240, 300].map(a => (
        <ellipse
          key={a}
          cx="40" cy="28" rx="6" ry="11" fill={color}
          transform={`rotate(${a} 40 38)`}
          opacity="0.9"
        />
      ))}
      <circle cx="40" cy="38" r="5" fill="#f4c542"/>
    </g>
  );
}
