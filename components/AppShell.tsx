'use client';
import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import Hub from '@/components/Hub';
import GardenView from '@/components/GardenView';
import LabView from '@/components/LabView';
import PlaygroundView from '@/components/PlaygroundView';
import ChallengeModal from '@/components/ChallengeModal';
import LoginModal from '@/components/LoginModal';
import type { Feature } from '@/lib/types';

// App shell: routes between Hub (landing) and a Theme view (Garden/Lab/Playground).
// The theme the user enters FIRST gets Level 1 challenges, second gets Level 2, third gets Level 3.
export default function AppShell({ features }: { features: Feature[] }) {
  const progress = useProgress();
  const { state } = progress;

  const [active, setActive] = useState<Feature | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);

  // If we're on the hub, render it.
  if (state.screen === 'hub' || !state.currentTheme) {
    return (
      <>
        <Hub features={features} onLogin={() => setLoginOpen(true)} />
        {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
      </>
    );
  }

  // Otherwise we're inside a theme.
  const theme = state.currentTheme;
  const level = progress.levelForTheme(theme) || 1;
  const themeMeta = {
    garden:     { label: 'Garden',     emoji: '🌱', bg: '#f4f7e8' },
    lab:        { label: 'Laboratory', emoji: '⚗️', bg: '#eef0f5' },
    playground: { label: 'Playground', emoji: '🛝', bg: '#fff4e0' }
  };

  const View =
    theme === 'garden' ? GardenView :
    theme === 'lab'    ? LabView :
                         PlaygroundView;

  const cleared = progress.themeFinished(theme, features);
  const doneCount = progress.themeCompletedCount(theme);

  return (
    <div style={{
      minHeight: '100vh', background: themeMeta[theme].bg,
      padding: '16px 24px 60px',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      transition: 'background 400ms'
    }}>
      {/* Topbar */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        maxWidth: 1200, margin: '0 auto 14px', gap: 16, flexWrap:'wrap'
      }}>
        <div style={{display:'flex', alignItems:'center', gap: 14}}>
          <button
            onClick={() => progress.goToHub()}
            style={{
              display:'inline-flex', alignItems:'center', gap: 6,
              padding: '8px 12px', borderRadius: 99,
              background: '#fffdf6', border:'1px solid rgba(0,0,0,0.1)',
              cursor:'pointer', fontSize: 13, fontWeight: 600,
              color:'#2a2a2a', fontFamily:'inherit',
              boxShadow:'0 1px 2px rgba(0,0,0,0.04)'
            }}
          >
            ← Home
          </button>
          <div style={{display:'flex', alignItems:'center', gap: 10}}>
            <div style={{fontSize: 22}}>{themeMeta[theme].emoji}</div>
            <div>
              <div style={{fontSize: 10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#888', fontWeight: 800}}>
                You&apos;re in
              </div>
              <div style={{fontWeight: 800, fontSize: 15, color:'#2a2a2a', letterSpacing:'-0.01em'}}>
                The {themeMeta[theme].label}
                <span style={{
                  display:'inline-block', marginLeft: 8,
                  background:'#2a2a2a', color:'#fffdf6',
                  padding: '2px 7px', borderRadius: 6,
                  fontSize: 10, fontWeight: 800, letterSpacing:'0.1em',
                  verticalAlign: 'middle'
                }}>
                  LEVEL {level}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'center', gap: 10}}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 10,
            background:'#fffdf6', border:'1px solid rgba(0,0,0,0.08)', borderRadius: 99,
            padding: '6px 14px 6px 8px', boxShadow:'0 1px 2px rgba(0,0,0,0.04)'
          }}>
            <div style={{display:'flex', gap: 3}}>
              {features.map((f) => (
                <span key={f.id} style={{
                  display:'inline-block', width: 8, height: 8, borderRadius: 4,
                  background: progress.isComplete(theme, f.id) ? '#d97757' : '#e0dccf'
                }}/>
              ))}
            </div>
            <span style={{fontSize: 12, color:'#555', fontWeight: 700}}>
              {doneCount}/{features.length}
            </span>
          </div>

          {state.user ? (
            <div style={{display:'inline-flex', alignItems:'center', gap: 8, background:'#fffdf6', border:'1px solid rgba(0,0,0,0.08)', borderRadius: 99, padding:'4px 10px 4px 4px'}}>
              <div style={{
                width: 24, height: 24, borderRadius: 12, background:'#d97757',
                color:'#fff', fontWeight: 800, fontSize: 11,
                display:'flex', alignItems:'center', justifyContent:'center'
              }}>{state.user.name.slice(0,1).toUpperCase()}</div>
              <span style={{fontSize: 12, fontWeight: 600, color:'#2a2a2a'}}>{state.user.name}</span>
            </div>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              style={{
                border:'1px solid rgba(0,0,0,0.1)', background:'#fffdf6',
                borderRadius: 99, padding:'7px 12px', fontSize: 12, fontWeight: 700,
                cursor:'pointer', color:'#2a2a2a', fontFamily:'inherit',
                boxShadow:'0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </div>

      {/* The theme view */}
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <View features={features} level={level} onPick={setActive}/>
      </div>

      {/* "Theme cleared" banner */}
      {cleared && (
        <div style={{
          maxWidth: 1200, margin: '14px auto 0',
          background:'#fff', border:'1.5px solid #d97757',
          borderRadius: 14, padding: '14px 18px',
          display:'flex', alignItems:'center', justifyContent:'space-between', gap: 14, flexWrap:'wrap',
          boxShadow:'0 6px 20px rgba(217,119,87,0.18)'
        }}>
          <div style={{display:'flex', alignItems:'center', gap: 12}}>
            <div style={{fontSize: 26}}>🏆</div>
            <div>
              <div style={{fontWeight: 800, fontSize: 15, color:'#2a2a2a'}}>
                Level {level} cleared — {themeMeta[theme].label} complete.
              </div>
              <div style={{fontSize: 12.5, color:'#666'}}>
                Head back to the hub to enter another place. Your next stop will host Level {level + 1} challenges.
              </div>
            </div>
          </div>
          <button
            onClick={() => progress.goToHub()}
            style={{
              border:'none', background:'#d97757', color:'#fff',
              padding:'10px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700,
              cursor:'pointer', fontFamily:'inherit'
            }}
          >
            Back to the hub →
          </button>
        </div>
      )}

      {/* Modal */}
      {active && (
        <ChallengeModal
          feature={active}
          theme={theme}
          level={level}
          onClose={() => setActive(null)}
        />
      )}

      {/* Login modal */}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </div>
  );
}
