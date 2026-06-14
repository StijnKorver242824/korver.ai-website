---
title: "Root Segmentation & Tip Detection"
excerpt: "A computer vision pipeline that segments root structures in petri dish images and locates root tips using skeleton analysis."
date: 2024-11-01
tags: [Computer Vision, Segmentation, PyTorch, Biology]
tech: [Python, PyTorch, OpenCV, scikit-image, NumPy]
type: "Computer Vision"
app_url: "/app/root-segmentation"
github_url: "https://github.com/yourname/root-segmentation"
thumbnail: "/assets/images/root-segmentation.png"
---

## Overview

Measuring root growth is an important but labour-intensive task in plant biology research. Researchers photograph root samples growing in petri dishes and then manually trace root structures to measure length and locate the growing tip. This project automates that process using a semantic segmentation model trained on annotated petri dish images.

The pipeline takes a raw petri dish photograph as input and returns:
- a pixel-level segmentation mask distinguishing root from background
- the coordinates of each detected root tip, found via skeleton analysis on the binary mask
- a summary of root length estimated from the skeletonised structure

## My contribution

This was an individual project. I was responsible for the full pipeline: dataset preparation, model architecture selection, training, post-processing, and evaluation. I also designed the skeleton analysis step for root tip localisation, which was not part of the original brief and emerged from testing on difficult images where root crossings caused false positives.

## Technical approach

I used a U-Net architecture with a pretrained ResNet-34 encoder, fine-tuned on the labelled petri dish dataset. The loss function combined binary cross-entropy with Dice loss to handle the class imbalance between root pixels and background.

Post-processing steps:
1. Threshold the probability map to produce a binary mask
2. Apply morphological closing to fill small gaps
3. Compute the medial axis (skeleton) of the mask
4. Detect branch endpoints in the skeleton graph as candidate root tips
5. Filter tips by local intensity to remove artefacts

<div class="results-grid">
  <div class="result-card">
    <span class="result-value">0.87</span>
    <span class="result-label">Dice score</span>
  </div>
  <div class="result-card">
    <span class="result-value">0.91</span>
    <span class="result-label">IoU</span>
  </div>
  <div class="result-card">
    <span class="result-value">94%</span>
    <span class="result-label">Tip detection accuracy</span>
  </div>
</div>

## What I found difficult

The biggest challenge was root crossings — where two roots overlap in the image, the skeleton branches incorrectly and generates spurious tip candidates. I iterated through several pruning strategies before settling on a combination of minimum branch length and local contrast thresholds that reduced false positives to an acceptable rate.

Getting the training data right also took longer than expected. The initial annotations had inconsistent treatment of thin root tips — some annotators included them, others stopped a few pixels short. Standardising the annotation protocol mid-project required re-labelling roughly a third of the training set.

## Dataset

The dataset consisted of [N] petri dish images collected by [research group/university lab], manually annotated using LabelMe. Images were split 70/15/15 for training, validation, and test.

<div class="callout">
  <strong>Note:</strong> The raw dataset is not publicly available as it was collected by the university lab. The demo uses a small set of example images cleared for release.
</div>

## Related project

See also the [label quality research study](/project/root-label-study/) which used this model as a base to investigate whether expert or student annotations produce better training data.
