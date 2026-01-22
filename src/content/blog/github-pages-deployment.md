---
title: "Deploying Your Site to GitHub Pages"
description: "A comprehensive guide to deploying your Astro site to GitHub Pages using GitHub Actions."
pubDate: 2024-01-25
author: "Tech Blog Team"
tags: ["github", "deployment", "ci/cd"]
draft: false
image: "/images/blog/blog3.avif"
imageAlt: "GitHub Pages deployment workflow and GitHub Actions"
---

# Deploying Your Site to GitHub Pages

GitHub Pages is a free hosting service that makes it easy to deploy static websites directly from your GitHub repository.

## Prerequisites

- A GitHub account
- A repository with your Astro site
- GitHub Actions enabled (enabled by default)

## Configuration

### 1. Update Astro Config

First, update your `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  output: 'static',
});
```

### 2. Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Under "Source", select "GitHub Actions"

## Deployment

Once configured, every push to the `main` branch will automatically:

1. Build your Astro site
2. Deploy it to GitHub Pages
3. Make it available at `https://yourusername.github.io/your-repo-name`

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to your `public/` directory
2. Configure DNS settings with your domain provider
3. Update your Astro config `site` URL

## Troubleshooting

### Build Failures

Check the Actions tab in your repository for detailed error messages. Common issues:

- Missing dependencies in `package.json`
- Build errors in your Astro code
- Configuration issues in `astro.config.mjs`

### 404 Errors

Ensure your `base` path in `astro.config.mjs` matches your repository name.

## Conclusion

GitHub Pages provides a simple, free way to host your Astro site. With GitHub Actions, deployment is fully automated!
