---
layout: project
lang: nl
lang_en: /en/projects/end-to-end-inoculation/
title: End-to-End Inoculatie
summary: Een volledig autonoom systeem voor het enten van planten, dat beeldsegmentatie en robotbesturing combineert voor nauwkeurige enting.
category: Automation
tags: [Computer Visie, Robotica]
banner: /assets/images/projects/end-to-end-inoculation/banner.png
icon: 🌱
order: 6
date: January 2026
featured: true
---

<style>
  .project-body p { text-align: justify; }

  /* ── STAT ROW ── */
  .stat-row { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0 2.5rem; }
  .stat-box { flex: 1; min-width: 120px; background: var(--gray-light); border-radius: 0.75rem; padding: 1rem 1.25rem; text-align: center; }
  .stat-num { font-family: var(--font-head); font-size: 1.6rem; font-weight: 700; color: var(--black); line-height: 1; }
  .stat-num span { color: var(--accent); }
  .stat-lbl { font-size: 0.72rem; color: var(--gray); margin-top: 0.25rem; }

  /* ── CSR CARDS ── */
  .csr-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin: 2rem 0 2.5rem; }
  .csr-card { background: var(--gray-light); border-radius: 0.75rem; padding: 1.4rem 1.25rem; }
  .csr-card.dark { background: var(--black); }
  .csr-tag { font-family: var(--font-head); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
  .csr-card h3 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--black); margin: 0 0 0.5rem; line-height: 1.3; }
  .csr-card.dark h3 { color: var(--white); }
  .csr-card p { font-size: 0.85rem; color: var(--gray); line-height: 1.7; margin: 0; text-align: left; }
  .csr-card.dark p { color: rgba(255,255,255,0.55); }

  /* ── PIPELINE CAROUSEL ── */
  .pipeline-carousel-wrap { position: relative; margin: 1.5rem 0 2.5rem; }
  .pipeline-carousel { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .pipeline-step { background: var(--gray-light); border-radius: 0.75rem; padding: 1.25rem 0.75rem; text-align: center; position: relative; transition: transform 0.2s, box-shadow 0.2s; }
  .pipeline-step:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(45,55,120,0.12); }
  .pipeline-step.highlight { background: var(--black); }
  .step-num { position: absolute; top: 0.5rem; left: 0.75rem; font-family: var(--font-head); font-size: 0.65rem; font-weight: 700; color: var(--gray-mid); letter-spacing: 0.05em; }
  .pipeline-step.highlight .step-num { color: rgba(255,255,255,0.2); }
  .step-icon { margin-bottom: 0.4rem; }
  .step-icon img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 0.4rem; display: block; }
  .step-title { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--black); margin-bottom: 0.2rem; }
  .pipeline-step.highlight .step-title { color: var(--accent); }
  .step-label { font-size: 0.7rem; color: var(--gray); font-weight: 300; line-height: 1.4; }
  .pipeline-step.highlight .step-label { color: rgba(255,255,255,0.5); }
  .carousel-dots { display: none; justify-content: center; gap: 0.4rem; margin-top: 1rem; }
  .carousel-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gray-mid); cursor: pointer; transition: background 0.2s, transform 0.2s; }
  .carousel-dot.active { background: var(--black); transform: scale(1.4); }

  /* ── CHALLENGE CARDS ── */
  .challenge-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin: 1.5rem 0; }
  .challenge-card { background: rgba(231,76,60,0.07); border-left: 3px solid #e74c3c; border-radius: 0.6rem; padding: 0.85rem 1rem; }
  .challenge-card strong { display: block; font-size: 0.82rem; color: #c0392b; margin-bottom: 0.3rem; }
  .challenge-card p { font-size: 0.82rem; color: var(--gray); line-height: 1.6; margin: 0; text-align: left; }

  /* ── BEFORE / AFTER ── */
  .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0; }
  .ba-panel { border-radius: 0.75rem; overflow: hidden; border: 1.5px solid var(--gray-mid); }
  .ba-label { background: var(--black); color: var(--white); font-family: var(--font-head); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.6rem 1rem; }
  .ba-label.after { background: var(--accent); color: var(--black); }
  .ba-image { background: var(--gray-light); }
  .ba-image img { width: 100%; display: block; }
  .ba-stats { padding: 0.75rem 1rem; border-top: 1px solid var(--gray-mid); display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .ba-stat { font-size: 0.78rem; color: var(--gray); }
  .ba-stat strong { color: var(--black); font-weight: 600; display: block; font-size: 0.9rem; }

  /* ── CALLOUT ── */
  .callout { background: var(--black); color: var(--white); border-radius: 0.75rem; padding: 1.5rem 2rem; margin: 1.5rem 0; display: flex; align-items: center; gap: 1.5rem; }
  .callout-icon { font-size: 2rem; flex-shrink: 0; }
  .callout-text { font-size: 0.95rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.8); }
  .callout-text strong { color: var(--accent); font-weight: 600; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .challenge-cards { grid-template-columns: 1fr; }
    .csr-grid { grid-template-columns: 1fr; }
    .pipeline-carousel { grid-template-columns: repeat(4, calc(100% - 2rem)); overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; gap: 0.75rem; scrollbar-width: none; }
    .pipeline-carousel::-webkit-scrollbar { display: none; }
    .pipeline-step { scroll-snap-align: center; }
    .carousel-dots { display: flex; }
    .before-after { grid-template-columns: 1fr; }
    .stat-row { gap: 0.75rem; }
  }
</style>

## The Challenge

Plant phenotyping research depends on inoculating large numbers of seedlings under identical conditions, but the traditional process is entirely manual. Researchers place a pipette by hand at the tip of each root, one by one, across hundreds of Petri dishes per experiment. This is not only time-consuming, but introduces human error: positioning varies between operators and sessions, which contaminates the experimental data and limits how confidently conclusions can be drawn.

<div class="challenge-cards">
  <div class="challenge-card">
    <strong>Time-Consuming</strong>
    <p>Inoculating thousands of seedlings by hand takes days of researcher time per experiment. Hours that could be spent on analysis and interpretation.</p>
  </div>
  <div class="challenge-card">
    <strong>Inconsistent Results</strong>
    <p>Positioning varies between operators and sessions. Even small differences in where inoculant is applied introduce variability that contaminates experimental data.</p>
  </div>
  <div class="challenge-card">
    <strong>Doesn't Scale</strong>
    <p>The facility handles over 10,000 seedlings. Manual inoculation simply cannot keep pace with that throughput without significant staffing overhead.</p>
  </div>
</div>

The scale of the problem compounds the difficulty. The client's facility processes up to 10,000 seedlings across more than 2,000 Petri dishes. At that volume, manual inoculation is simply not viable as a long-term approach, It consumes researcher hours that could be spent on analysis, and the inconsistency it introduces undermines the scientific value of the experiments.

---

## What We Built

The system we developed removes the researcher from the inoculation loop entirely. Each day, the facility's existing cameras photograph every Petri dish. A computer vision model then analyses those images, identifying the roots of each individual plant and pinpointing the precise tip of each root — the target for inoculation.

<div class="pipeline-carousel-wrap">
  <div class="pipeline-carousel" id="pipelineCarousel">
    <div class="pipeline-step">
      <div class="step-icon"><img src="/assets/images/projects/end-to-end-inoculation/pipeline-capture.png" alt="Image Capture" /></div>
      <div class="step-title">01. Image Capture</div>
      <div class="step-label">Daily Photographs of Petri Dishes</div>
    </div>
    <div class="pipeline-step highlight">
      <div class="step-icon"><img src="/assets/images/projects/end-to-end-inoculation/pipeline-segmentation.png" alt="Segmentation" /></div>
      <div class="step-title">02. Segmentation</div>
      <div class="step-label">AI Model Detects Roots</div>
    </div>
    <div class="pipeline-step">
      <div class="step-icon"><img src="/assets/images/projects/end-to-end-inoculation/pipeline-roottip.png" alt="Root Tip Detection" /></div>
      <div class="step-title">03. Root Tip Detection</div>
      <div class="step-label">Locate Inoculation Targets</div>
    </div>
    <div class="pipeline-step highlight">
      <div class="step-icon"><img src="/assets/images/projects/end-to-end-inoculation/pipeline-inoculation.gif" alt="Inoculation" /></div>
      <div class="step-title">04. Inoculation</div>
      <div class="step-label">Autonomous Delivery to Root Tips</div>
    </div>
  </div>
  <div class="carousel-dots" id="pipelineDots">
    <div class="carousel-dot active" onclick="carouselScrollTo(0)"></div>
    <div class="carousel-dot" onclick="carouselScrollTo(1)"></div>
    <div class="carousel-dot" onclick="carouselScrollTo(2)"></div>
    <div class="carousel-dot" onclick="carouselScrollTo(3)"></div>
  </div>
</div>

Getting this right was harder than it sounds. In early versions, the model incorrectly detected noise in the image as additional plants, leading to phantom root measurements. After iterative refinement, the model learned to distinguish real roots from artefacts reliably.

<div class="before-after">
  <div class="ba-panel">
    <div class="ba-label">Before</div>
    <div class="ba-image"><img src="/assets/images/projects/end-to-end-inoculation/segmentation-before.png" alt="Spurious detections" /></div>
    <div class="ba-stats">
      <div class="ba-stat"><strong>5 plants detected</strong>3 were noise artefacts</div>
      <div class="ba-stat"><strong>Corrupted Measurements</strong>Root lengths of 8 and 1 px</div>
    </div>
  </div>
  <div class="ba-panel">
    <div class="ba-label after">After</div>
    <div class="ba-image"><img src="/assets/images/projects/end-to-end-inoculation/segmentation-after.png" alt="Clean segmentation" /></div>
    <div class="ba-stats">
      <div class="ba-stat"><strong>2 plants detected</strong>Exactly as present in the dish</div>
      <div class="ba-stat"><strong>Accurate Measurements</strong>Root lengths of 569 and 236 px</div>
    </div>
  </div>
</div>

Once root tips are located, their coordinates are passed to a robot that moves a pipette to each position and dispenses the inoculant. We designed and tested two approaches to robot control: one based on a classical feedback loop, another using reinforcement learning. The classical approach delivered 100% success with sub-millimetre accuracy and became the basis for the delivered system, while the reinforcement learning approach showed promise for future development.

---

## The Results

The delivered system fully automates a process that previously required constant manual effort. The robot positions itself within a millimetre of each root tip and dispenses inoculant without any human involvement, across every plant in every dish, in every experiment.

<div class="stat-row">
  <div class="stat-box"><div class="stat-num">10k</div><div class="stat-lbl">Seedlings</div></div>
  <div class="stat-box"><div class="stat-num">2k+</div><div class="stat-lbl">Petri Dishes</div></div>
  <div class="stat-box"><div class="stat-num">93.6%</div><div class="stat-lbl">Accuracy</div></div>
  <div class="stat-box"><div class="stat-num">100%</div><div class="stat-lbl">Inoculation Success</div></div>
</div>
<div class="callout">
  <div class="callout-icon">🌱</div>
  <div class="callout-text">The system achieves a <strong>100% inoculation success rate</strong> with sub-millimetre positioning accuracy, handling over <strong>10,000 seedlings</strong> across <strong>2,000+ Petri dishes</strong> without manual intervention.</div>
</div>

Beyond the numbers, the more significant outcome is consistency. Every seedling is inoculated at the same position, with the same timing, under the same conditions. That reproducibility is what makes the experimental results scientifically meaningful, and it was simply not achievable at this scale before.

<script>
  function carouselScrollTo(idx) {
    const c = document.getElementById('pipelineCarousel');
    if (!c) return;
    const cards = c.querySelectorAll('.pipeline-step');
    if (cards[idx]) c.scrollTo({ left: cards[idx].offsetLeft - c.offsetLeft, behavior: 'smooth' });
  }
  (function() {
    const c = document.getElementById('pipelineCarousel');
    const dots = document.querySelectorAll('#pipelineDots .carousel-dot');
    if (!c || !dots.length) return;
    c.addEventListener('scroll', function() {
      const idx = Math.round(c.scrollLeft / c.offsetWidth);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });
  })();
</script>
