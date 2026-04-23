// Lightweight SVG previews so example-app cards feel embedded,
// not like bare links. Each renders in a fixed 280x170 area.
window.AppPreview = function AppPreview({ app, accent }) {
  const t = app.preview;
  if (t === 'chat') return <ChatPreview msgs={app.msgs} accent={accent} />;
  if (t === 'image') return <ImagePreview caption={app.caption} accent={accent} />;
  if (t === 'voice') return <VoicePreview caption={app.caption} accent={accent} />;
  if (t === 'doc') return <DocPreview caption={app.caption} accent={accent} />;
  if (t === 'python') return <PythonPreview caption={app.caption} accent={accent} />;
  if (t === 'review') return <ReviewPreview caption={app.caption} accent={accent} />;
  if (t === 'refs') return <RefsPreview caption={app.caption} accent={accent} />;
  return null;
};

function Frame({ children, accent }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '16 / 10', background: '#fff',
      border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, overflow: 'hidden',
      position: 'relative', boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
    }}>
      <div style={{
        display:'flex', gap: 4, padding: '6px 8px', borderBottom: '1px solid rgba(0,0,0,0.06)',
        background: '#fafaf7'
      }}>
        <span style={{width:8,height:8,borderRadius:8,background:'#e0ded7'}}/>
        <span style={{width:8,height:8,borderRadius:8,background:'#e0ded7'}}/>
        <span style={{width:8,height:8,borderRadius:8,background:'#e0ded7'}}/>
      </div>
      <div style={{ padding: 10, fontSize: 11, lineHeight: 1.4 }}>
        {children}
      </div>
    </div>
  );
}

function ChatPreview({ msgs, accent }) {
  return (
    <Frame accent={accent}>
      {msgs.map((m, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: m.role === 'u' ? 'flex-end' : 'flex-start',
          margin: '4px 0'
        }}>
          <div style={{
            maxWidth: '80%',
            background: m.role === 'u' ? accent : '#f2efe8',
            color: m.role === 'u' ? '#fff' : '#333',
            padding: '5px 8px', borderRadius: 8, fontSize: 10.5
          }}>{m.text}</div>
        </div>
      ))}
    </Frame>
  );
}

function ImagePreview({ caption, accent }) {
  return (
    <Frame accent={accent}>
      <div style={{
        background: `linear-gradient(135deg, ${accent}22, ${accent}55)`,
        height: 70, borderRadius: 6, position:'relative', marginBottom: 6
      }}>
        <svg viewBox="0 0 200 70" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
          <circle cx="60" cy="35" r="16" fill="none" stroke={accent} strokeWidth="1.5"/>
          <circle cx="60" cy="35" r="6" fill={accent}/>
          <path d="M80 35 Q110 15 140 40" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2"/>
          <text x="145" y="43" fontSize="8" fill={accent}>nucleus</text>
        </svg>
      </div>
      <div style={{color:'#555'}}>{caption}</div>
    </Frame>
  );
}

function VoicePreview({ caption, accent }) {
  const bars = [8,14,22,30,22,14,8,14,24,18,10,16,22];
  return (
    <Frame accent={accent}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:6}}>
        <div style={{width:24,height:24,borderRadius:24, background:accent, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:12}}>🎙</div>
        <div style={{display:'flex', alignItems:'center', gap:2, height:30}}>
          {bars.map((h,i) => (
            <span key={i} style={{width:3, height:h, background:accent, opacity:0.75, borderRadius:2}}/>
          ))}
        </div>
      </div>
      <div style={{background:'#f2efe8', padding:6, borderRadius:6, fontStyle:'italic', color:'#444'}}>
        {caption}
      </div>
    </Frame>
  );
}

function DocPreview({ caption, accent }) {
  return (
    <Frame accent={accent}>
      <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:6}}>
        <div style={{background:'#fff', border:'1px solid rgba(0,0,0,0.08)', padding:6, borderRadius:4}}>
          <div style={{height:4, background:'#eee', borderRadius:2, marginBottom:3}}/>
          <div style={{height:4, background:'#eee', borderRadius:2, marginBottom:3, width:'80%'}}/>
          <div style={{height:4, background: accent, borderRadius:2, marginBottom:3, width:'60%', opacity:0.4}}/>
          <div style={{height:4, background:'#eee', borderRadius:2, marginBottom:3}}/>
          <div style={{height:4, background:'#eee', borderRadius:2, width:'70%'}}/>
        </div>
        <div style={{background:'#fafaf7', padding:6, borderRadius:4, fontSize:9.5}}>
          <div style={{color:accent, fontWeight:600, marginBottom:3}}>Try this</div>
          <div style={{color:'#555'}}>Your thesis hedges. What's the specific claim you want to defend?</div>
        </div>
      </div>
      <div style={{marginTop:6, color:'#555'}}>{caption}</div>
    </Frame>
  );
}

function PythonPreview({ caption, accent }) {
  return (
    <Frame accent={accent}>
      <svg viewBox="0 0 200 60" style={{width:'100%', height:60, background:'#fafaf7', borderRadius:4}}>
        <line x1="10" y1="50" x2="190" y2="50" stroke="#ccc"/>
        <line x1="10" y1="10" x2="10" y2="50" stroke="#ccc"/>
        <path d="M10 30 Q 40 10 70 30 T 130 30 T 190 30" fill="none" stroke={accent} strokeWidth="1.5"/>
        <circle cx="70" cy="14" r="2" fill={accent}/>
        <circle cx="130" cy="46" r="2" fill={accent}/>
      </svg>
      <div style={{marginTop:6, fontFamily:'ui-monospace,monospace', fontSize:10, color:'#555'}}>
        &gt; plt.plot(x, np.sin(x))
      </div>
      <div style={{marginTop:2, color:'#555'}}>{caption}</div>
    </Frame>
  );
}

function ReviewPreview({ caption, accent }) {
  return (
    <Frame accent={accent}>
      {[
        { when: 'Mon', dot: '#4a7c5a' },
        { when: 'Tue', dot: '#e9a23b' },
        { when: 'Thu', dot: '#4a7c5a' }
      ].map((row, i) => (
        <div key={i} style={{display:'flex', alignItems:'center', gap:6, padding:'3px 0', borderBottom: i<2 ? '1px solid #f2efe8' : 'none'}}>
          <span style={{width:6,height:6,borderRadius:6, background: row.dot}}/>
          <span style={{width:28, color:'#888'}}>{row.when}</span>
          <span style={{flex:1, height:4, background:'#eee', borderRadius:2, position:'relative'}}>
            <span style={{position:'absolute', inset:0, width: (30 + i*20)+'%', background: accent, borderRadius:2, opacity:0.6}}/>
          </span>
        </div>
      ))}
      <div style={{marginTop:6, color:'#555'}}>{caption}</div>
    </Frame>
  );
}

function RefsPreview({ caption, accent }) {
  return (
    <Frame accent={accent}>
      <div style={{display:'flex', gap:4, flexWrap:'wrap', marginBottom:6}}>
        {['Unit 3','Std 7.RP','Pacing','Rubric'].map(t => (
          <span key={t} style={{fontSize:9.5, padding:'2px 6px', background:'#f2efe8', color:'#555', borderRadius:10}}>{t}</span>
        ))}
      </div>
      <div style={{background:'#fafaf7', padding:6, borderRadius:4}}>
        <div style={{height:3, background:'#ddd', borderRadius:2, marginBottom:3}}/>
        <div style={{height:3, background:'#ddd', borderRadius:2, marginBottom:3, width:'85%'}}/>
        <div style={{height:3, background: accent, borderRadius:2, marginBottom:3, width:'55%', opacity:0.5}}/>
        <div style={{height:3, background:'#ddd', borderRadius:2, width:'70%'}}/>
      </div>
      <div style={{marginTop:6, color:'#555'}}>{caption}</div>
    </Frame>
  );
}
