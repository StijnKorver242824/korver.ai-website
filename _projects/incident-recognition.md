---
order: 5
turn: P5
corner_name: "CORNER 5"
slug: incident-recognition
short_title: "Incident Scope"
title: "Incident Recognition"
year: 2025
role: "Solo build"
duration: "6 weeks"
status: "Planned"
stack: "CV · YOLO · LSTM"
thumb: "INCIDENT · RECOGNITION"
description: "Classifies on-track incidents from broadcast video + timing data."
lede: "Computer vision + timeseries fusion that classifies on-track incidents from race broadcasts and lap data."
app_url: "https://incidents.korver.ai"
source_url: "https://github.com/stijnkorver/incident-recognition"
stats:
  - { label: "Role", value: "Solo build" }
  - { label: "Stack", value: "YOLOv8 · LSTM · OpenCV" }
  - { label: "Classes", value: "<span class='accent'>9</span> incident types" }
  - { label: "Status", value: "Prototype" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>Race control reacts to events. Engineers want to anticipate them.</h2>
    <p>Locking a tyre, going off, debris on track — each one has a video signature and a telemetry signature. Fuse them, you can classify in seconds.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>YOLO on broadcast + LSTM on telemetry → ensemble vote.</h2>
    <p>YOLOv8 spots cars, flags, and smoke; an LSTM consumes the same window of telemetry. A late-fusion classifier returns the most likely incident type.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>Working prototype across 9 incident classes.</h2>
    <p>Currently expanding the dataset — biggest constraint is labelled broadcast footage.</p>
  </div>
</div>
