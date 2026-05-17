---
order: 3
turn: T3
corner_name: "CORNER 3"
slug: race-report-generator
short_title: "Race Report"
title: "Post-Race Performance Report Generator"
year: 2025
role: "Solo build"
duration: "2 weeks"
status: "In progress"
stack: "LLM · JINJA · PLOTLY"
thumb: "REPORT · GENERATOR"
description: "Auto-generates a post-race performance brief as a multi-page PDF."
lede: "LLM-assisted briefing engine that turns raw lap data and stints into a clean multi-page PDF for engineers and stakeholders — generated in under a minute."
app_url: "https://reports.korver.ai"
source_url: "https://github.com/stijnkorver/race-report"
stats:
  - { label: "Role", value: "Solo build" }
  - { label: "Stack", value: "Claude · Jinja · WeasyPrint" }
  - { label: "Generation time", value: "<span class='accent'>~ 45 s</span>" }
  - { label: "Status", value: "In progress" }
---

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 01</span>Problem</div>
  <div class="body">
    <h2>Race debriefs eat the Monday after every grand prix.</h2>
    <p>Engineering reports are valuable but slow. A template + a model + a stack of charts beats a copy-pasted Word doc every time.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 02</span>Solution</div>
  <div class="body">
    <h2>Structured prompt + Plotly charts + Jinja template.</h2>
    <p>LLM operates only on summarised numerical inputs (lap times, pit windows, deltas). Outputs a structured brief; Jinja renders it; WeasyPrint produces a print-quality PDF.</p>
  </div>
</div>

<div class="case-study-grid">
  <div class="tag"><span class="num">/ 03</span>Outcome</div>
  <div class="body">
    <h2>One race · one PDF · ~45 seconds.</h2>
    <p>Currently expanding the chart library and adding driver-specific narrative sections.</p>
  </div>
</div>
