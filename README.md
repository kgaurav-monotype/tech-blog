# tech-blog

A technology blog website built with Astro.js and Markdown, deployed via GitHub Pages.

## Overview

This blog uses:
- **Astro.js** - Modern static site generator
- **Markdown** - Content authoring format
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - Automated deployment
- **Monotype Antiqua UX** - Design system and CSS variables

## Features

- ✅ Blog post listing and individual post pages
- ✅ Markdown-based content management with Content Collections
- ✅ Responsive design using Monotype Antiqua UX design tokens
- ✅ Tag support for organizing posts
- ✅ Automated GitHub Pages deployment
- ✅ Type-safe content with TypeScript

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tech-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321/tech-blog](http://localhost:4321/tech-blog) in your browser
   - **Note**: Since the base path is set to `/tech-blog` for GitHub Pages deployment, 
     you need to access the site at `/tech-blog` during development as well.

### Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
tech-blog/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages (routing)
│   ├── content/         # Blog posts (Markdown files)
│   │   └── blog/
│   ├── styles/          # Global styles and design tokens
│   └── config.ts        # Site configuration
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── astro.config.mjs     # Astro configuration
```

## Creating Blog Posts

1. Create a new Markdown file in `src/content/blog/`
2. Add frontmatter with post metadata:

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: 2024-01-01
author: "Author Name"
tags: ["tag1", "tag2"]
draft: false
image: "/images/blog/your-image.jpg"  # Optional: Main image for the post
imageAlt: "Description of the image"  # Optional: Alt text for accessibility
---

# Your Post Content

Write your content here...
```

### Adding Images

- Place images in the `public/images/blog/` directory
- Reference them in frontmatter using `/images/blog/filename.jpg`
- Images will automatically appear:
  - At the top of individual blog post pages
  - In blog post cards on the home page
  - In the blog listing page

3. Commit and push to the repository
4. GitHub Actions will automatically build and deploy

## GitHub Pages Deployment

### Setup

1. Configuration is already set up:
   - Site URL: `https://kgaurav-monotype.github.io`
   - Base path: `/tech-blog`
   - GitHub Actions workflow is configured

2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push to the `main` branch to trigger deployment

Your site will be available at: **https://kgaurav-monotype.github.io/tech-blog**

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your Astro site
- Deploy it to GitHub Pages
- Make it available at your GitHub Pages URL

## Access Control

**Note**: Currently the repository is public. For restricted publishing access:
- Set repository to private
- Only invited collaborators can publish blog posts
- Publishing is restricted to users with write access

### Adding Collaborators

1. Go to repository Settings → Collaborators
2. Click "Add people"
3. Invite users by GitHub username or email
4. Assign "Write" permission for publishing access

## Design System

This blog uses the [Monotype Antiqua UX](https://antiqua-ux-cdn.monotype.com/dist/web-components/web-components.css) design system, which provides:

- Color palette with dark mode support
- Typography scale
- Spacing system
- Border radius tokens
- Transition timing

All design tokens are available as CSS variables throughout the project.

## Development Plan

See [PLAN.md](./PLAN.md) for the complete development plan, including:
- Architecture and project structure
- Implementation phases
- GitHub Pages deployment strategy
- Access control implementation
- Content management workflow

## Status

✅ **Phase 1 Complete** - Basic setup, layouts, components, and sample posts are ready!

Next steps:
- Phase 2: Styling & UX enhancements
- Phase 3: GitHub Pages deployment (workflow ready)
- Phase 4: Access control setup
- Phase 5: Advanced features (RSS, search, SEO)

## License

MIT
