# Stijn Korver — Motorsport Portfolio

A Jekyll-powered portfolio site for **Stijn Korver**, BSc Applied Data Science & AI student, on a deliberate trajectory toward Formula 1 Data Analytics Engineer.

## What's in this project

This project ships **two parallel views** of the same design:

1. **Static HTML prototype** (project root) — `index.html`, `projects/*.html`, `apps/index.html`. Click through the whole site offline. This is what the design-review preview shows.
2. **Jekyll source** (`jekyll/`) — drop-in ready for GitHub Pages, with proper `_layouts`, `_includes`, `_projects` collection, and `_data/apps.yml`.

Both render identically — same CSS, same JS, same SVG track.

## The track is the navigation

The home page replaces the conventional "Selected projects" grid with a **top-down racetrack** — Circuit Zandvoort, Stijn's home Dutch GP venue. Six corners → six projects.

- **Turn 1** (Tarzan) opens Project 1
- **Turns 2–5** open Projects 2–5
- **Finish line marker** (FIN) opens Project 6 — the flagship Race Strategy Simulator

Hover a corner → a tooltip pops with the project name + thumbnail. Click → project page. Keyboard-accessible (focus the corner, Enter to open).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero, about, racetrack, trajectory |
| `/projects/` | All-projects grid (6 cards) |
| `/projects/<slug>/` | Individual project page (case study + "Open App" CTA to external URL) |
| `/apps/` | App-icon grid linking out to each project's live app domain |

## Tweaks panel

Bottom-right "Tweaks" toggle exposes:

- **Theme** — Carbon (dark), Paper (light), Asphalt Blue, Pit Lane
- **Hero variant** — Pit Wall / Driver / Countdown

Both are persisted to `localStorage` so visitors keep their pick across pages.

## Deploy as Jekyll on GitHub Pages

1. Copy the contents of `jekyll/` into the **root** of a new GitHub repo.
2. Commit and push.
3. In repo Settings → Pages, set **Source: GitHub Actions** (or **Branch: main /root**).
4. Done — your site will be at `https://<user>.github.io/<repo>/`.

To preview locally:
```bash
cd jekyll
bundle install
bundle exec jekyll serve
```

## Editing a project

Each project lives in `jekyll/_projects/<order>-<slug>.md`. The front matter drives the project page hero + CTA + stats; the markdown body is the case study. Add `app_url` to enable the "Open App" CTA button.

## Editing apps

`jekyll/_data/apps.yml` — a single YAML list, one entry per app. Add a row and the apps grid picks it up.

## Editing the track

The track is the Zandvoort PNG (`assets/img/zandvoort.png`) layered with a transparent SVG holding the corner markers in `jekyll/_includes/track.html`. Marker coords are in 0–2127 image-pixel space — to move a corner, just edit its `cx`/`cy` (apex) and the connector line's `lx`/`ly` (label position).

To swap circuits, replace the PNG with another track outline of the same dimensions and re-trace the six markers using the same coordinate scheme.

## Stack

- **Jekyll** — content + templating (GitHub Pages compatible)
- **Vanilla HTML/CSS/JS** — no build step for the site itself
- **React + Babel (in-browser)** — used only for the Tweaks panel; the page works fine without it
- **Google Fonts** — Space Grotesk (display) + JetBrains Mono (data)

## Contact

stijn@korver.ai · Breda, NL
