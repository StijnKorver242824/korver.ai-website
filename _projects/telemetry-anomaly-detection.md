---
layout: project
title: Telemetry Anomaly Detection
summary: Multi-channel anomaly scoring across 250+ sensor channels — surfacing statistically significant deviations that flag mechanical events, driving inconsistencies, or setup issues in real time.
order: 1
status: building
icon: 📡
tags: [FastF1, PyOD, scikit-learn, Streamlit, pandas]
date: 2026-05-01
---

## Overview

F1 cars generate data across 250+ sensor channels — speed, throttle, brake pressure, tyre temperatures, g-forces, sector times, DRS state — at sampling rates up to 100Hz. During a race weekend, a performance engineer cannot manually watch all of it. The job of a data analytics engineer is to surface what matters.

This project builds a system that ingests multi-channel telemetry and scores each lap for statistical anomalies, flagging which channels drove the score and by how much.

## What It Does

**Multivariate anomaly scoring** using Isolation Forest across all telemetry channels simultaneously. A lap is scored against the driver's session baseline and the field average. Anomalous laps are classified as informational, warning, or critical based on deviation magnitude.

**Channel-level breakdown** — when a lap is flagged, the dashboard shows exactly which channels contributed to the score. An engineer can immediately see whether the deviation was in brake pressure, tyre temperature, or speed trace.

**Streamlit monitoring interface** — live-updating dashboard designed to simulate race engineer usage during a session. Every lap appears as it would in real-time data replay.

## Technical Stack

- **FastF1** — session data ingestion and telemetry channel extraction
- **PyOD / scikit-learn** — Isolation Forest for multivariate anomaly scoring
- **pandas / numpy** — feature engineering and time-series alignment
- **Streamlit** — monitoring dashboard

## Status

Currently in active development. Anomaly scoring pipeline is functional on historical session data; Streamlit interface in progress.
