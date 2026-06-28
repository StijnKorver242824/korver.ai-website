---
title: "RaceCTRL"
excerpt: "An AI steward assistant that classifies Formula 1 collisions from onboard camera footage using deep learning, with Grad-CAM explainability for transparent decision support."
date: 2025-04-11
tags: [Computer Vision, Deep Learning, XAI, Human-AI Interaction]
tech: [Python, PyTorch, Grad-CAM, Figma]
type: "Computer Vision"
app_url: "/app/racectrl"
github_repo: "racectrl"
thumbnail: "/assets/images/racectrl.png"
---

## Overview

Formula 1 stewarding decisions are frequently criticised for inconsistency and bias. A survey conducted in February 2025 found that 50% of respondents believe the FIA is not consistent across incidents, with a further 40% stating that consistency depends on which driver is involved. Of those surveyed, 70% identified consistency as the main area where AI could help, and 90% indicated they would trust an AI system to help evaluate penalties more fairly.

RaceCTRL is an AI-powered steward assistant designed to address this gap. The system classifies frames from onboard camera footage as either a collision or non-collision event, and presents a Grad-CAM heatmap alongside the classification to explain the model's reasoning. The goal is not to replace human stewards, but to provide a fast, transparent, and objective first assessment that supports their decision-making in real time.

## My Contribution

This was an individual project. I was responsible for the full pipeline: problem definition, market research, stakeholder analysis, data collection and labelling, model training, explainability integration, and user interface design and testing. I also conducted a think-aloud study and A/B test to evaluate the human-centred aspects of the prototype.

## Technical Approach

The model is a binary image classifier trained on still frames extracted from F1 onboard camera footage, predicting either `collision` or `no_collision`. Before training, I established three baselines to contextualise model performance:

| Baseline | Accuracy |
|---|---|
| Random | 50% |
| MLP | 65% |
| Human Level Performance (HLP) | 91% |

I trained a deep learning model on the labelled dataset, monitoring training and validation accuracy and loss over 13 epochs. The final results were:

<div class="results-grid">
  <div class="result-card">
    <span class="result-value">100%</span>
    <span class="result-label">Training accuracy</span>
  </div>
  <div class="result-card">
    <span class="result-value">74%</span>
    <span class="result-label">Validation accuracy</span>
  </div>
  <div class="result-card">
    <span class="result-value">82%</span>
    <span class="result-label">Test accuracy</span>
  </div>
</div>

The test set confusion matrix showed 15 true positives, 16 true negatives, 3 false positives, and 4 false negatives — a precision and recall profile suitable for a decision-support tool where stewards retain final authority.

**Explainable AI (XAI):**
I integrated Grad-CAM to generate activation heatmaps overlaid on the original camera footage, visualising which image regions drove the model's classification. This was a core design requirement: stewards need to understand *why* a collision was flagged, not just that it was. However, the heatmaps revealed a significant flaw in the model. On collision frames, the highest activation regions consistently corresponded to car sponsor logos rather than to physically meaningful areas such as car proximity or wheel contact. This suggests the model learned a spurious correlation: certain liveries or sponsors appear disproportionately in collision footage, likely because specific teams or driver pairings were over-represented in the training data. XAI made this failure mode visible in a way that accuracy metrics alone would not have.

## User Interface Design

The prototype, built in Figma and evaluated through user testing, features a 5×4 grid of live onboard camera feeds covering all 20 drivers. Feeds classified as potential collisions are automatically highlighted in red, minimising cognitive overload in a high-pressure stewarding environment. Clicking a flagged feed opens a detailed incident review panel showing the raw camera feed, the Grad-CAM heatmap, and the heatmap overlaid on the original footage. The classification result appears in the top-right corner.

**Think-Aloud Study:**
Three participants completed structured tasks with the prototype. Inductive thematic analysis of the sessions produced the following code counts:

| Code | Count |
|---|---|
| Did the right action | 19 |
| Knew what to do | 17 |
| Confused | 2 |
| Distracted (external overlay) | 2 |
| Knew what to do but suggested improvement | 2 |

Both confusion instances were unrelated to the interface itself. One stemmed from image legibility at a small grid size, the other from ambiguous task wording in the session script. Improvement suggestions led to two design changes: the application logo in the top-left corner now acts as a home button, and a notification sidebar was added alongside the grid to surface collision alerts without requiring the steward to visually scan all 20 feeds.

**A/B Testing:**
I compared two interface layouts: Version A (the red-highlighted camera grid from the Think-Aloud Study) and Version B (a notification-centre carousel where collision alerts appear on the right and feeds are browsed horizontally). A t-test across three survey questions found no statistically significant differences between the two versions:

| Question | p-value |
|---|---|
| The collision indication was clear | 0.37 |
| The classification was clear | 0.84 |
| The reasoning for the classification was clear | 0.63 |

The non-significant results validate both design approaches. Version A was selected for the final demo video based on personal preference and its closer alignment with a professional race control environment.

## Difficulties

The most significant challenge was the training–validation accuracy gap. The model achieved 100% training accuracy but only 74% on the validation set, a clear sign of overfitting. This was primarily caused by the limited number of labelled collision frames. Genuine collisions are rare events in race footage, which made the dataset small and imbalanced despite best efforts at data collection.

The most revealing finding came from Grad-CAM. Rather than confirming the model had learned to detect collisions correctly, the heatmaps exposed that on collision frames the model was attending to sponsor logos on the cars. This is a classic shortcut learning problem: because the training set was drawn from a limited pool of incidents, certain team liveries were over-represented in the collision class, and the model exploited that pattern instead of learning the underlying physics. The test accuracy of 82% is therefore somewhat misleading: the model is partially right for the wrong reasons. Fixing this properly would require a more balanced dataset drawn from a wider range of teams, incidents, and race conditions.

## Dataset

The dataset consists of still images extracted from Formula 1 onboard camera footage, sourced from F1 TV broadcasts, and manually labelled as `collision` or `no_collision`.

<div class="callout">
  <strong>Note:</strong> The dataset was assembled for this academic project and is not publicly redistributed due to broadcast rights. The demo uses a curated set of example images.
</div>

## Next steps

The project roadmap outlines five development phases leading to deployment:

| Milestone | Description |
|---|---|
| Proof of Concept | Image recognition model on still frames (completed) |
| Video Recognition | Time series model for more accurate feature extraction across consecutive frames |
| Telemetry Data | Anomaly detection integrated with live telemetry for additional collision identifiers |
| Historical Data | Incorporation of historical steward decisions to generate penalty recommendations |