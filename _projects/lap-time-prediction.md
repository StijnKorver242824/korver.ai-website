---
order: 4
turn: P4
corner_name: "CORNER 4"
slug: lap-time-prediction
short_title: "Lap Time"
title: "Lap Time Delta Prediction"
year: 2025
role: "Solo build"
duration: "5 weeks"
status: "Planned"
stack: "XGBOOST · SHAP"
thumb: "LAP TIME · DELTA"
description: "Predicts the lap-time delta vs reference using gradient boosting + SHAP."
lede: "XGBoost regressor predicts per-lap delta versus a reference lap, with SHAP-driven attribution per driver and stint."
app_url: "https://laptime.korver.ai"
source_url: "https://github.com/stijnkorver/lap-time-delta"
stats:
  - { label: "Role", value: "Solo build" }
  - { label: "Stack", value: "XGBoost · SHAP · Polars" }
  - { label: "MAE", value: "<span class='accent'>0.12 s</span>" }
  - { label: "Status", value: "<span class='accent'>●</span> Live" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>Pace gaps are explained after the race. I want them explained at lap +1.</h2>
    <p>Why is your driver three tenths slower than the leader on the same compound, same fuel load? Telemetry knows, but humans need it surfaced fast.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>XGBoost on engineered stint features. SHAP for the why.</h2>
    <p>Features include compound age, sector deltas, fuel estimate, ambient/track temperature, and DRS counts. SHAP values render as a per-lap waterfall.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>0.12 s mean absolute error on held-out 2024 races.</h2>
    <p>Next: bring uncertainty bounds and integrate with the strategy simulator.</p>
  </div>
</div>
