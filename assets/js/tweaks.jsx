// Stijn Korver — Tweaks panel
// Dark/light + palette swap + track shape variant + hero variant

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "carbon",
  "hero": "default"
}/*EDITMODE-END*/;

const PALETTES = {
  carbon:  { label: 'Carbon (dark)',  swatch: ['#0A0B0D', '#F5DF00', '#ECEEF1'] },
  paper:   { label: 'Paper (light)',  swatch: ['#F2F2EE', '#F0C300', '#0A0B0D'] },
  asphalt: { label: 'Asphalt Blue',   swatch: ['#0A1426', '#F5DF00', '#9FB1D4'] },
  pitlane: { label: 'Pit Lane',       swatch: ['#14150F', '#F5DF00', '#F1EFE3'] },
};

const HERO_VARIANTS = [
  { value: 'default',   label: 'Pit Wall'   },
  { value: 'telemetry', label: 'Driver'     },
  { value: 'countdown', label: 'Countdown'  },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Hydrate from localStorage on first render so visitors keep their pref
  // between pages — Tweaks panel state is per-mount but our visual state is persistent.
  React.useEffect(() => {
    try {
      const savedP = localStorage.getItem('sk-palette');
      const savedH = localStorage.getItem('sk-hero');
      const next = {};
      if (savedP && PALETTES[savedP]) next.palette = savedP;
      if (savedH) next.hero = savedH;
      if (Object.keys(next).length) setTweak(next);
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply palette
  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', t.palette);
    try { localStorage.setItem('sk-palette', t.palette); } catch (e) {}
  }, [t.palette]);

  // Apply hero variant
  React.useEffect(() => {
    if (typeof window.SK_setHero === 'function') window.SK_setHero(t.hero);
  }, [t.hero]);

  // Color swatch options for palette picker
  const paletteOptions = Object.keys(PALETTES).map(k => PALETTES[k].swatch);

  return (
    <TweaksPanel>
      <TweakSection label="Theme" />
      <div className="sk-palette-grid">
        {Object.keys(PALETTES).map(k => (
          <button
            key={k}
            className={'sk-palette-chip' + (t.palette === k ? ' is-active' : '')}
            onClick={() => setTweak('palette', k)}
            title={PALETTES[k].label}
          >
            <span className="sk-swatch-row">
              {PALETTES[k].swatch.map((c, i) => (
                <span key={i} className="sk-swatch" style={{background: c}} />
              ))}
            </span>
            <span className="sk-palette-name">{PALETTES[k].label}</span>
          </button>
        ))}
      </div>

      <TweakSection label="Hero" />
      <TweakRadio
        label="Variant"
        value={t.hero}
        options={HERO_VARIANTS}
        onChange={(v) => setTweak('hero', v)}
      />

      <div style={{ marginTop: 10, paddingTop: 10, borderTop: '.5px solid rgba(0,0,0,.08)', fontSize: 10, color: 'rgba(41,38,27,.55)' }}>
        Saved locally · ports cleanly to Jekyll
      </div>
    </TweaksPanel>
  );
}

// Local styles for the palette chip grid (panel-internal)
const __SK_TW_STYLE = `
  .sk-palette-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  .sk-palette-chip{display:flex;flex-direction:column;align-items:flex-start;gap:6px;
    padding:8px;border:.5px solid rgba(0,0,0,.1);border-radius:8px;
    background:rgba(255,255,255,.55);cursor:default;text-align:left;color:inherit;font:inherit}
  .sk-palette-chip:hover{border-color:rgba(0,0,0,.25)}
  .sk-palette-chip.is-active{border-color:#000;background:rgba(255,255,255,.85);
    box-shadow:0 0 0 2px rgba(245,223,0,.5)}
  .sk-swatch-row{display:flex;gap:3px}
  .sk-swatch{width:14px;height:14px;border-radius:3px;
    border:.5px solid rgba(0,0,0,.12)}
  .sk-palette-name{font-size:10.5px;font-weight:500;letter-spacing:.01em}
`;
const __skTwTag = document.createElement('style');
__skTwTag.textContent = __SK_TW_STYLE;
document.head.appendChild(__skTwTag);

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
