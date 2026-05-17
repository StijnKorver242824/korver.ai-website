---
layout: project
lang: nl
lang_en: /en/projects/sustainable-travel/
title: Duurzamer Reizen
summary: Onderzoek naar hoe de Formule 1 de uitstoot aanzienlijk kan verminderen door de kalender te herschikken.
category: Research
tags: [Onderzoek, Duurzaamheid]
banner: /assets/images/projects/sustainable-travel/banner.png
icon: 🌍
order: 1
date: November 2024
featured: true
---

## Overview

Formula One's global race calendar is a logistical operation of extraordinary scale. Cars, equipment, and hundreds of personnel are transported across continents throughout the season. That movement comes at a significant environmental cost. Logistics and business travel account for **78% of F1's 223,031 tCO₂e** reported in 2022, making it one of the more carbon-intensive sports in the world.

This research project investigates the relationship between the *order* of races in the F1 calendar and total CO₂ emissions, asking: could a smarter schedule meaningfully reduce F1's carbon footprint?

## The Challenge

F1 has taken steps to reduce its environmental impact, including investing in carbon-neutral biofuels, but the effect of race scheduling on total emissions remains largely unexplored. This project set out to quantify that effect using historical race calendars, travel distances, and emissions data going back to 2010.

The research aligns with **UN Sustainable Development Goal 13**: taking urgent action to combat climate change. The UN's own data shows global emissions need to fall 45% by 2030 compared to 2010 levels, a target the world is currently far from meeting.

## Approach

The research followed the **CRISP-DM** methodology across five phases:

**Data Understanding**

Multiple data sources were combined: F1 sustainability reports (2018 and 2022), the Global Carbon Project's fossil CO₂ dataset, F1 race calendars from 2018–2025, and per-flight emissions calculated using the CarbonCare tool (which calculates CO₂e according to ISO standards).

An initial comparison revealed that a competing tool (Pledge) produced values nearly six times higher than F1's reported figures. CarbonCare provided estimates within an acceptable margin of the official reports.

**Data Preparation**

Several quality issues were identified and resolved:

- CarbonCare produced anomalously low emissions for flights exceeding 16,000 km, likely because it lacked layover data for ultra-long routes. Twelve such values were replaced using the average emissions-per-kilometre (0.91 tCO₂e/km) derived from all long-haul flights (4,000–16,000 km) in the dataset.
- Unit inconsistencies across sources were normalised to tCO₂e (from BtCO₂e, MtCO₂e, and kgCO₂e).
- Unique identifiers (UIDs) were created to link calendar rounds to their corresponding emission calculations.
- The Haversine formula was applied to calculate distances between all venues, enabling a minimum/optimal emissions estimate for each leg of the calendar.

**Modelling & Validation**

Self-calculated emissions were validated against F1's reported figures for 2018 and 2022, landing within ~8% of the official values. The trend of the CarbonCare-derived data was further validated by comparing it against global aviation emissions from the Global Carbon Project. The two trends aligned closely across the full time range, providing sufficient confidence to proceed.

## Dashboard

The Power BI dashboard below visualises carbon emissions across F1 seasons, per venue travel efficiency, and how emissions correlate with the number of race events in a given year. Use the year slicer to explore specific seasons.

<div class="dashboard-embed">
  <iframe
    title="F1 Sustainability Dashboard"
    src="https://app.powerbi.com/view?r=eyJrIjoiNTEwN2RhYzktNTZlNS00MjEwLThkMmMtNjk3MjQ2OTI4ZTI5IiwidCI6IjBhMzM1ODliLTAwMzYtNGZlOC1hODI5LTNlZDA5MjZhZjg4NiIsImMiOjl9"
    frameborder="0"
    allowFullScreen="true"
    style="width: 100%; height: 600px; border-radius: 8px;">
  </iframe>
</div>

## Findings

The data confirms the expected baseline: more races mean more emissions. However, the 2020 season stands out as a compelling natural experiment. A reduced calendar of 17 races (down from the usual 21+) produced disproportionately *lower* emissions than the race count alone would predict, suggesting that geographic clustering and route efficiency also play a significant role.

An efficiency score was calculated for each venue by comparing the actual emissions required to reach it against the theoretical minimum (the nearest neighbouring venue). This metric provides a practical lens through which calendar designers could identify the highest-impact scheduling changes.

## Limitations & Honest Reflection

The central ambition of the project, using the Travelling Salesman Algorithm to compute the most carbon-efficient possible calendar order and compare it to real schedules, was not achieved. A Python visual in Power BI was developed for this purpose, but hit the platform's ~5-minute execution limit for Python scripts. This meant the core causal question was left partially unanswered.

This is a real limitation. The efficiency score offers a useful proxy, but it doesn't directly answer whether reordering the calendar could achieve F1's sustainability targets.

## What's Next

The most important next step is implementing the TSP analysis outside of Power BI and incorporating real-world constraints that the algorithm must respect: weather windows, religious observances (such as Ramadan affecting Bahrain and Saudi Arabia), and contractual obligations (such as Abu Dhabi's permanent season-closing slot).

Automating the data pipeline would also make the dashboard sustainable long-term, replacing the current manual data preparation with API-driven sources.