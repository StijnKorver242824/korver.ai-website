# korver.ai — Jekyll Portfolio

Personal data science portfolio built with Jekyll for GitHub Pages.

## Quick start

```bash
# Install dependencies (requires Ruby)
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Adding a project

1. Copy `_projects/_template.md` to a new file named after your project slug (e.g. `_projects/hospital-readmission.md`)
2. Fill in the front matter fields
3. Write the article in Markdown below the `---`
4. The page will be available at `/project/hospital-readmission/`

### Front matter reference

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Displayed as the page heading and card title |
| `excerpt` | Yes | Shown on cards and in `<meta>` description |
| `date` | Yes | Used for sorting — format: `YYYY-MM-DD` |
| `tags` | No | List of short topic labels |
| `tech` | No | Technologies used — shown as badges |
| `type` | No | e.g. "Computer Vision", "NLP", "MLOps" |
| `app_url` | No | Internal `/app/slug` or external URL — shows "Live demo" button |
| `github_url` | No | Shows "View on GitHub" button |
| `thumbnail` | No | Path to image in `/assets/images/` |

## Adding an app demo page

1. Copy `_apps/_template.md` to `_apps/your-slug.md`
2. Set `embed_url` to your HuggingFace Space embed URL (or leave blank for "coming soon")
3. The page will be available at `/app/your-slug/`

## Site config

Edit `_config.yml` to update:
- `title` — your site name
- `url` — your domain
- `github_username` — for footer link
- `linkedin_url` — for footer link
- `author.name` — for footer copyright

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to your main branch, root folder
4. GitHub builds and deploys automatically

If you're using a custom domain, add a `CNAME` file to the repo root:
```
korver.ai
```

## Color scheme

| Role | Hex | Usage |
|---|---|---|
| Dominant (60%) | `#effbef` | Page backgrounds, card surfaces |
| Secondary (30%) | `#145214` | Navigation, headings, structural chrome, footer |
| Accent (10%) | `#08a508` | CTA buttons, tags, active nav states, card top borders |
