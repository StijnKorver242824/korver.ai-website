---
order: 1
turn: T1
corner_name: "CORNER 1"
slug: telemetry-dashboard
short_title: "Telemetry Dashboard"
title: "Interactive Telemetry Dashboard"
year: 2025
role: "Solo build"
duration: "3 weeks"
status: "Live"
stack: "PYTHON · STREAMLIT · FASTF1"
thumb: "TELEMETRY · DASHBOARD"
description: "Live FastF1 telemetry visualised through an interactive Streamlit dashboard."
lede: "A live FastF1-powered cockpit that lets analysts pull a driver, a session, and a lap — then dissect throttle, brake, gear, and sector deltas side by side."
hero_caption: "hero screenshot — dashboard overview"
app_url: "https://telemetry.korver.ai"
source_url: "https://github.com/stijnkorver/telemetry-dashboard"
cta_heading: "Open the live app — pull a driver, a session, a lap."
stats:
  - { label: "Role", value: "Solo build · <span class='accent'>end-to-end</span>" }
  - { label: "Stack", value: "Python · Streamlit · FastF1 · Plotly" }
  - { label: "Sessions covered", value: "<span class='accent'>2018</span> → present" }
  - { label: "Status", value: "<span class='accent'>●</span> Live" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>F1 telemetry is everywhere — and yet nearly unusable.</h2>
    <p>Anyone can pull FastF1 data, but the raw output is a mess of timestamps, channels, and units. Engineers, fans, and aspiring analysts need a way to <strong>compare two drivers on the same corner</strong> in seconds — not after a weekend of notebook wrangling.</p>
    <p>The brief I gave myself: build the dashboard I wish existed when I started. No installs, no notebooks. Pick session, pick driver(s), pick lap. See the telemetry. Argue about it.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>One URL. Three clicks. Race-engineer-grade overlays.</h2>
    <p>A Streamlit app fronts a thin FastF1 wrapper with aggressive caching. Pick a session and the app pre-loads laps; pick a driver and gear, brake, throttle, speed and DRS traces appear side by side. A second driver overlays as a delta.</p>
    <div class="case-image">
      <div class="ph-stripes"></div>
      <div class="ph-label" style="bottom: 16px; left: 18px;">[ figure 1 — driver comparison view ]</div>
    </div>
    <p>Architecture highlights:</p>
    <ul>
      <li><strong>Cached FastF1 layer.</strong> Sessions land in DuckDB on first hit; subsequent loads are instant.</li>
      <li><strong>Plotly + cross-filtering.</strong> Hover the speed trace, brake/throttle traces snap to the same lap distance.</li>
      <li><strong>Sector-delta panel.</strong> Lap-time delta resolved per sector, colour-coded purple / green / yellow.</li>
      <li><strong>Shareable URLs.</strong> Every selection is encoded in query params, so a comparison is a link.</li>
    </ul>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>Used in race threads, on stream, and in a thesis chapter.</h2>
    <p>The dashboard is the second-most-trafficked piece of work in this portfolio. It gets shared into race-week discussion threads, screenshotted for analysis posts, and was cited as the data source for a fellow student's bachelor thesis on tyre management strategy.</p>
    <div class="case-image">
      <div class="ph-stripes"></div>
      <div class="ph-label" style="bottom: 16px; left: 18px;">[ figure 2 — sector delta panel ]</div>
    </div>
    <p>What I learned: <strong>UI is not optional</strong>. A correct model behind a clunky front-end gets used once. A correct model behind a fluid front-end gets used every weekend.</p>
  </div>
</div>
