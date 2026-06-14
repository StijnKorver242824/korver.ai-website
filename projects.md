---
layout: default
title: "Projects"
permalink: /projects/
---

<div class="projects-page">
  <div class="container">
    <div class="projects-page page-intro">
      <h1>Projects</h1>
      <p>Eight projects from my BSc, spanning computer vision, NLP, classical machine learning, data visualisation, and MLOps. Click any project to read the full write-up.</p>
    </div>

    <div class="project-grid">
      {% assign sorted_projects = site.projects | sort: 'date' | reverse %}
      {% for project in sorted_projects %}
      <article class="project-card">
        {% if project.thumbnail %}
        <div class="card-thumbnail">
          <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }} thumbnail" loading="lazy">
        </div>
        {% else %}
        <div class="card-thumbnail card-thumbnail--placeholder" aria-hidden="true"></div>
        {% endif %}

        <div class="card-body">
          <h2 class="card-title">
            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          </h2>

          <p class="card-excerpt">{{ project.excerpt | default: project.content | strip_html | truncatewords: 28 }}</p>

          {% if project.tags %}
          <div class="card-tags" aria-label="Tags">
            {% for tag in project.tags limit: 5 %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}

          <div class="card-links">
            <a href="{{ project.url | relative_url }}" class="btn btn-secondary btn-sm">Read more</a>
            {% if project.app_url %}
            <a href="{{ project.app_url }}"
               class="btn btn-primary btn-sm"
               {% unless project.app_url contains '/' %}target="_blank" rel="noopener noreferrer"{% endunless %}>
              Live demo →
            </a>
            {% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</div>
