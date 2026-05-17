/* =========================================================
   Stijn Korver — site JS
   - Racetrack hover/click interactions
   - Light/dark + palette persistence
   ========================================================= */

(function () {
  'use strict';

  // ---------- Project data (kept in sync with _projects/) ----------
  const PROJECTS = {
    '01': {
      slug: 'telemetry-dashboard',
      title: 'Interactive Telemetry Dashboard',
      tag: 'T1 · CORNER 1',
      stack: 'PYTHON · STREAMLIT · FASTF1',
      thumb: 'TELEMETRY · DASHBOARD'
    },
    '02': {
      slug: 'anomaly-detection',
      title: 'Telemetry Anomaly Detection',
      tag: 'T2 · CORNER 2',
      stack: 'PYTORCH · ISOLATION FOREST',
      thumb: 'ANOMALY · DETECTION'
    },
    '03': {
      slug: 'race-report-generator',
      title: 'Post-Race Performance Report Generator',
      tag: 'T3 · CORNER 3',
      stack: 'LLM · JINJA · PLOTLY',
      thumb: 'REPORT · GENERATOR'
    },
    '04': {
      slug: 'lap-time-prediction',
      title: 'Lap Time Delta Prediction',
      tag: 'T4 · CORNER 4',
      stack: 'XGBOOST · SHAP',
      thumb: 'LAP TIME · DELTA'
    },
    '05': {
      slug: 'incident-recognition',
      title: 'Incident Recognition',
      tag: 'T5 · CORNER 5',
      stack: 'CV · YOLO · TIMESERIES',
      thumb: 'INCIDENT · RECOGNITION'
    },
    '06': {
      slug: 'race-strategy-simulator',
      title: 'Race Strategy Simulator',
      tag: 'FIN · FINISH LINE',
      stack: 'MONTE CARLO · OPT.',
      thumb: 'STRATEGY · SIMULATOR'
    }
  };

  // Make accessible for other scripts
  window.SK_PROJECTS = PROJECTS;

  // ---------- Track interactions ----------
  function initTrack() {
    const svg = document.getElementById('track-svg');
    const tip = document.getElementById('track-tip');
    const host = document.getElementById('track-host');
    if (!svg || !tip || !host) return;

    const corners = svg.querySelectorAll('.corner');
    const tipTag = document.getElementById('tip-tag');
    const tipTitle = document.getElementById('tip-title');
    const tipStack = document.getElementById('tip-stack');
    const tipLabel = document.getElementById('tip-label');

    function showTip(corner, evt) {
      const id = corner.getAttribute('data-project');
      // Try padded id ('01') then unpadded ('1') as fallback
      const data = PROJECTS[id] || PROJECTS[String(parseInt(id, 10))];
      if (!data) return;
      tipTag.textContent = data.tag;
      tipTitle.textContent = data.title;
      tipStack.textContent = data.stack;
      tipLabel.textContent = '[ ' + data.thumb + ' ]';

      // Position tooltips
      const rect = host.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();

      const tipPositions = {
        '01': { x:  400, y:    0 },
        '02': { x: 1600, y:  300 },
        '03': { x: 2000, y:  600 },
        '04': { x: 1524, y: 1750 },
        '05': { x:  910, y: 1650 },
        '06': { x:   91, y:  800 }
      };

      const pos = tipPositions[id] || { x: parseFloat(corner.getAttribute('data-cx')), y: parseFloat(corner.getAttribute('data-cy')) };
      const scaleX = svgRect.width / 2127;
      const scaleY = svgRect.height / 2127;
      const px = pos.x * scaleX + (svgRect.left - rect.left);
      const py = pos.y * scaleY + (svgRect.top - rect.top);

      // Keep within bounds
      const w = 240;
      let left = px;
      const minLeft = w / 2 + 8;
      const maxLeft = rect.width - w / 2 - 8;
      if (left < minLeft) left = minLeft;
      if (left > maxLeft) left = maxLeft;

      let top = py;
      if (top < 200) {
        // flip below
        tip.style.transform = 'translate(-50%, 0) translateY(20px)';
      } else {
        tip.style.transform = 'translate(-50%, -100%) translateY(-20px)';
      }

      tip.style.left = left + 'px';
      tip.style.top = top + 'px';
      tip.classList.add('is-visible');
    }

    function hideTip() {
      tip.classList.remove('is-visible');
    }

    corners.forEach(function (c) {
      c.addEventListener('mouseenter', function (e) { showTip(c, e); });
      c.addEventListener('focus', function (e) { showTip(c, e); });
      c.addEventListener('mouseleave', hideTip);
      c.addEventListener('blur', hideTip);
      c.addEventListener('click', function () {
        const id = c.getAttribute('data-project');
        const data = PROJECTS[id] || PROJECTS[String(parseInt(id, 10))];
        if (!data) return;
        window.location.href = c.getAttribute('data-href');
      });
      c.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          c.dispatchEvent(new Event('click'));
        }
      });
    });
  }

  // ---------- Palette persistence ----------
  function initPalette() {
    try {
      const saved = localStorage.getItem('sk-palette');
      if (saved) document.documentElement.setAttribute('data-palette', saved);
    } catch (e) {}
  }

  function setPalette(name) {
    document.documentElement.setAttribute('data-palette', name);
    try { localStorage.setItem('sk-palette', name); } catch (e) {}
  }

  window.SK_setPalette = setPalette;

  // ---------- Hero variant (data attribute on body) ----------
  function initHero() {
    try {
      const saved = localStorage.getItem('sk-hero');
      if (saved) applyHero(saved);
    } catch (e) {}
  }
  function applyHero(variant) {
    const title = document.getElementById('hero-title');
    if (!title) return;
    if (variant === 'telemetry') {
      title.innerHTML = 'Stijn Korver<br/><span class="accent">— Driver of data.</span>';
    } else if (variant === 'countdown') {
      title.innerHTML = '<span class="stroke">5 · 4 · 3 · 2 · 1</span><br/><span class="accent">GO.</span>';
    } else {
      // default
      title.innerHTML = 'Building toward<br/>the <span class="accent">pit wall.</span>';
    }
    try { localStorage.setItem('sk-hero', variant); } catch (e) {}
  }
  window.SK_setHero = applyHero;

  // ---------- Track variant (deprecated — Zandvoort is now the only layout) ----------
  // Kept as a no-op so localStorage state from older sessions doesn't break anything.
  window.SK_setTrack = function () {};

  // ---------- Init ----------
  initPalette();
  document.addEventListener('DOMContentLoaded', function () {
    initTrack();
    initHero();
  });
})();