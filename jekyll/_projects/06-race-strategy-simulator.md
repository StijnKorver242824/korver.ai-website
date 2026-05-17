---
order: 6
turn: FIN
corner_name: "FINISH LINE"
slug: race-strategy-simulator
short_title: "Strategy Sim"
title: "Race Strategy Simulator"
year: 2025
role: "Solo build"
duration: "8 weeks"
status: "Live"
stack: "MONTE CARLO · OPT."
thumb: "STRATEGY · SIMULATOR"
description: "Monte Carlo race strategy engine with tyre deg, undercut/overcut, safety car probability."
lede: "Monte Carlo strategy engine: tyre degradation, undercut/overcut, safety-car probability. Optimises stint plans live throughout a race."
app_url: "https://strategy.korver.ai"
source_url: "https://github.com/stijnkorver/strategy-sim"
cta_heading: "Run a race · pick a strategy · take the chequered flag."
stats:
  - { label: "Role", value: "Solo build · <span class='accent'>flagship</span>" }
  - { label: "Stack", value: "Python · NumPy · scipy.optimize" }
  - { label: "Runs / s", value: "<span class='accent'>~ 10,000</span>" }
  - { label: "Status", value: "<span class='accent'>●</span> Live" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>One safety car decides a race. Strategy teams need to plan for it.</h2>
    <p>Optimal stint plans are an optimisation problem under uncertainty — tyre deg curves, weather, virtual safety cars, competitor undercuts. Closed-form doesn't cut it.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>Monte Carlo simulation. 10,000 race rollouts per query.</h2>
    <p>Each rollout samples tyre wear curves, SC/VSC probabilities, and competitor strategies. A scipy optimiser walks the strategy space; the dashboard shows the top 5 with expected-position outcomes.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>The flagship.</h2>
    <p>Most cited piece in the portfolio. Has nudged me toward a thesis topic for next year: real-time strategy updates using live race data.</p>
  </div>
</div>
