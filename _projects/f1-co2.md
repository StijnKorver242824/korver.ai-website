---
title: "Formula 1 CO2"
excerpt: "A Power BI dashboard investigating the correlation between the order of races in the Formula 1 calendar and total CO2 emissions, in the context of SDG 13: Climate Action."
date: 2024-10-28
tags: [Research, Dashboard, SDG]
tech: [Power BI, Power Query, Python, Excel]
type: "Dashboard"
github_repo: "formula-1-co2-dashboard"
thumbnail: "/assets/images/f1-co2.png"
---

## Overview

Formula 1 operates a global race calendar spanning multiple continents, with logistics and business travel accounting for 78% of the sport's 223,031 tCO2e emissions in 2022. While F1 has taken steps such as developing carbon-neutral biofuels, the potential solution of how the *order* of races in the calendar can reduce total emissions remains largely unexplored.

This project investigates that gap, framed under **SDG 13: Climate Action** (Target 13.2, Indicator 13.2.2 — total greenhouse gas emissions per year). The research question was:

> **What is the correlation between the order of races in the Formula 1 calendar and the total CO2 emissions?**

The deliverable was an interactive Power BI dashboard visualising per-race and per-season emissions, travel distances, and venue efficiency scores from 2010 through to the projected 2025 calendar.

<div class="dashboard-embed">
  <iframe
    title="F1 CO2 Dashboard"
    src="https://app.powerbi.com/view?r=eyJrIjoiNTEwN2RhYzktNTZlNS00MjEwLThkMmMtNjk3MjQ2OTI4ZTI5IiwidCI6IjBhMzM1ODliLTAwMzYtNGZlOC1hODI5LTNlZDA5MjZhZjg4NiIsImMiOjl9"
    frameborder="0"
    allowFullScreen="true">
  </iframe>
</div>

## My Contribution

This was an individual project. I was responsible for the full CRISP-DM pipeline: scoping the research question, sourcing and evaluating data, cleaning and transforming datasets, building the Power BI data model, and producing all dashboard visualisations. I also identified and resolved several data quality issues that arose during the process, including a systematic calculation error in one of the emissions tools I was using.

## Technical Approach

**Data Sources**

Because F1 only publishes aggregated emissions figures for a small number of years (2018 and 2022), I constructed a per-race emissions dataset from 2010 onwards using CarbonCare, a CO2 calculator that follows the ISO standard. I cross-referenced this against F1's official sustainability reports to assess accuracy, and validated the overall trend against the Global Carbon Project (GCP) global aviation emissions dataset. For the race calendar structure (venues, countries, airports, and coordinates) I sourced data directly from the F1 website for seasons 2018–2025.

I chose the GCP dataset over a similar UN dataset after discovering that the UN figures drop sharply after 2017 due to the number of contributing countries falling from 131 to 43, omitting high-emission nations such as China, India, Mexico and Brazil.

**Data Preparation**

Cleaning and preparation involved several layers:

- Discovered a systematic bug in CarbonCare where flights exceeding 16,000 km returned unrealistically low emissions (likely due to missing layover data). Corrected these 12 affected routes by calculating the average emissions per kilometre across all long-haul flights in the dataset (0.91 tCO2e/km) and multiplying by distance.
- Standardised units across all sources to tCO2e, converting from MtCO2e (GCP), kgCO2e (CarbonCare), and BtCO2e (Statista).
- Created a **Years table** in Power BI to link all data sources through a shared date key, resolving relationship issues between tables.
- Built a **unique identifier (UID)** per race using an Excel formula combining year and round number (`RIGHT([Year],2)&IF(LEN([Round])=1,"0"&[Round],[Round])`), enabling a clean one-to-one relationship between the calendar and the calculated emissions tables.
- Calculated the geographic distance between every pair of venues using the **Haversine formula** in Excel, then derived a minimum/optimal emission estimate per venue based on average emissions per km by transport mode.

**Modelling and Validation**

After the initial calculations, my self-calculated totals fell short of F1's reported values by 9.3% (2018) and 5.1% (2022). After correcting the ultra-long-haul bug, the figures slightly overshot by 4.1% and 8.3% respectively. With no remaining identifiable errors, I concluded that the dataset was within an acceptable margin. The CarbonCare trend also closely mirrored GCP's global aviation emissions trend over the same period, lending additional confidence to the data.

**Dashboard**

The dashboard visualises per-race emissions, total seasonal emissions, venue travel efficiency, and a comparison against global aviation. It is designed so that adding new data does not require changes to the visualisations. Only the source files need updating.

## Difficulties

The biggest challenge was the **lack of granular, reliable public data**. F1 only reports total aggregated emissions for two seasons, so constructing a per-race time series from scratch required evaluating multiple tools and datasets, encountering and fixing a systematic calculation error in CarbonCare, and carefully evaluating competing global emissions datasets before settling on GCP's.

The other major difficulty was a feature I had planned but ultimately could not deliver: a **Python visual inside Power BI** that would compute and display the most carbon-efficient race order for a selected year using the Travelling Salesman Problem (TSP) algorithm. After significant tinkering, I found that Power BI imposes a ~5-minute execution limit on Python visuals, which my brute-force TSP implementation likely exceeded. This was a significant limitation, as the TSP visualisation was central to answering the research question directly.

As a partial substitute, I used the venue efficiency scores calculated during the modelling phase to give users an indication of how efficiently F1 travels to each location.

## Key Finding

The data confirms an expected but important pattern: more race events correlates with higher total emissions. The 2020 COVID-shortened season is a notable outlier. Emissions were substantially lower than the trend line predicted for that number of events, suggesting that reducing the calendar size is an effective lever. Whether reordering the calendar alone can achieve the 45% emissions reduction required by SDG 13 by 2030 compared to 2010 levels remains an open question for future research.

## Dataset

| Source | Coverage | Notes |
|--------|----------|-------|
| F1 Sustainability / Impact Reports | 2018, 2022 | Aggregated totals used for validation |
| CarbonCare (self-calculated) | 2010–2025 | Per-race emissions, ISO-compliant |
| Global Carbon Project (GCP) | 1750–present | Global & aviation emissions; used for trend validation |
| F1 Official Website | 2018–2025 | Race calendars, venue locations |

All source files are stored as `.xlsx` and `.csv`.

## Future Directions

- Implement a TSP-based optimal route visualiser (Python or R) outside of Power BI's execution constraints
- Automate data ingestion via API to keep the dashboard maintainable at scale
- Account for real-world scheduling constraints — weather, religious observances, contractual obligations — when modelling an optimal calendar