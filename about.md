---
layout: default
title: "About"
permalink: /about/
---

<div class="content-page">
  <div class="container--narrow container">
    <div class="page-header">
      <h1>About me</h1>
      <p class="page-subtitle">BSc Data Science — [Your university], [Year]</p>
    </div>

    <!-- Replace everything below with your own content -->

    I'm Korver, a data scientist with a background in [brief personal context — e.g. "mathematics and software development"]. My BSc gave me hands-on experience across the full ML lifecycle, from exploratory analysis and model training through to containerised cloud deployment.

    ## What I work on

    My projects span three main areas:

    **Computer vision** — I've built image classification models for detecting F1 race incidents and segmentation models for measuring root growth in plant biology research. The latter led to a research study on how label quality affects model performance.

    **NLP and classical ML** — I've worked with text classification and emotion detection from transcribed speech, and with tabular predictive modelling for healthcare outcomes using a range of algorithms from logistic regression through to random forests.

    **MLOps and deployment** — I have hands-on experience deploying models both on-cloud (Azure) and on-premise (Portainer/Docker), including CI/CD pipeline setup and monitoring.

    ## Background

    [Add 2–3 sentences about yourself — where you're from, what drew you to data science, anything that makes you distinct.]

    ## Contact

    The best way to reach me is via [LinkedIn]({{ site.linkedin_url | default: '#' }}) or by email at [your@email.com](mailto:your@email.com).

    {% if site.github_username %}
    You can find my code on [GitHub](https://github.com/{{ site.github_username }}).
    {% endif %}
  </div>
</div>
