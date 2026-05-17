---
order: 2
turn: T2
corner_name: "CORNER 2"
slug: anomaly-detection
short_title: "Anomaly Detection"
title: "Telemetry Anomaly Detection"
year: 2025
role: "Solo build"
duration: "4 weeks"
status: "Live"
stack: "PYTORCH · SKLEARN"
thumb: "ANOMALY · DETECTION"
description: "Streaming anomaly detector for telemetry channels."
lede: "Isolation Forest + autoencoder pipeline that flags suspicious sensor signatures across a race weekend in near real-time."
hero_caption: "hero screenshot — anomaly detection"
app_url: "https://anomaly.korver.ai"
source_url: "https://github.com/stijnkorver/anomaly-detection"
cta_heading: "Open the anomaly detection lab."
stats:
  - { label: "Role", value: "Solo build" }
  - { label: "Stack", value: "PyTorch · sklearn · Polars" }
  - { label: "Latency", value: "<span class='accent'>< 80 ms</span>" }
  - { label: "Status", value: "<span class='accent'>●</span> Live" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>Sensor channels lie — at the worst possible time.</h2>
    <p>Telemetry channels drift, drop, and spike. Spotting that in real-time is the difference between a podium and a DNF — and you can't stare at 200 lines of timeseries during a race.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>Two-stage detector: cheap upfront, deep when it matters.</h2>
    <p>An Isolation Forest sits on each channel doing per-tick scoring. When a candidate anomaly fires, a small autoencoder validates against a learned baseline for that car/session. False-positive rate dropped from 12% to under 2%.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>Replays a full race weekend in 90 seconds.</h2>
    <p>Used by me, then handed to two course-mates for their own race-data projects. Currently iterating toward a per-channel attribution layer.</p>
  </div>
</div>
