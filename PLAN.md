# Technology Blog Development Plan

## Project Overview
A technology blog website built with Astro.js and Markdown, deployed via GitHub Pages, with restricted publishing access for invited users only.

## Technology Stack

### Core Technologies
- **Astro.js** - Static site generator with excellent Markdown support
- **Markdown** - Content authoring format
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD for automated deployment

### Additional Tools
- **GitHub OAuth/Personal Access Tokens** - Authentication for publishing
- **GitHub API** - For access control verification
- **TypeScript** (optional) - Type safety
- **Tailwind CSS** (optional) - Styling framework

## Architecture

### Project Structure
```
tech-blog/
├── src/
│   ├── components/          # Reusable UI components
│   ├── layouts/             # Page layouts
│   ├── pages/               # Astro pages (routing)
│   ├── content/             # Blog posts (Markdown files)
│   │   └── blog/
│   ├── config.ts            # Site configuration
│   └── styles/              # Global styles
├── public/                  # Static assets
│   ├── images/
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── astro.config.mjs         # Astro configuration
├── package.json
└── README.md
```

## Features

### 1. Blog Functionality
- **Blog Post Listing** - Index page with all posts
- **Individual Post Pages** - Full post view with metadata
- **Categories/Tags** - Organize posts by topic
- **Search** (optional) - Client-side search functionality
- **RSS Feed** - Automatic RSS generation
- **SEO Optimization** - Meta tags, Open Graph, structured data

### 2. Content Management
- **Markdown-based** - Posts stored as `.md` files
- **Frontmatter** - YAML metadata (title, date, author, tags, etc.)
- **Image Support** - Optimized image handling
- **Code Syntax Highlighting** - For code snippets
- **Draft Posts** - Support for unpublished drafts

### 3. Access Control & Publishing

#### Option A: GitHub-Based Workflow (Recommended)
- **GitHub Collaborators** - Only repository collaborators can push
- **Pull Request Workflow** - Content changes via PRs (optional review)
- **GitHub Actions** - Automated deployment on merge to main
- **Branch Protection** - Protect main branch (optional)

#### Option B: Custom Authentication (Advanced)
- **GitHub OAuth App** - Authenticate users via GitHub
- **Access Control List** - Maintain list of allowed GitHub usernames
- **Publishing API** - Custom endpoint to create/update posts
- **File System API** - Write Markdown files programmatically

**Recommendation**: Start with Option A (simpler, more secure, leverages GitHub's built-in access control)

## Implementation Phases

### Phase 1: Basic Setup
1. Initialize Astro.js project
2. Configure project structure
3. Set up basic layouts and components
4. Create sample blog posts
5. Implement blog listing and individual post pages

### Phase 2: Styling & UX
1. Design and implement UI/UX
2. Add responsive design
3. Implement navigation
4. Add code syntax highlighting
5. Optimize images and assets

### Phase 3: GitHub Pages Deployment
1. Configure Astro for static export
2. Set up GitHub Actions workflow
3. Configure GitHub Pages settings
4. Test deployment pipeline
5. Set up custom domain (optional)

### Phase 4: Access Control
1. Set repository to private
2. Add collaborators (invited users)
3. Configure branch protection rules (optional)
4. Document publishing workflow
5. Create contributor guidelines

### Phase 5: Advanced Features
1. Add RSS feed generation
2. Implement search functionality
3. Add categories/tags filtering
4. SEO optimization
5. Analytics integration (optional)

## GitHub Pages Deployment Strategy

### Configuration
1. **Astro Config**
   - Set `output: 'static'` for static site generation
   - Configure `site` URL for GitHub Pages
   - Set `base` path if using project pages

2. **GitHub Actions Workflow**
   - Trigger on push to `main` branch
   - Install dependencies
   - Build Astro site
   - Deploy to `gh-pages` branch or use GitHub Actions deploy

3. **Repository Settings**
   - Enable GitHub Pages
   - Select source: GitHub Actions or `gh-pages` branch
   - Set repository visibility: Private (for access control)

## Access Control Implementation

### Repository-Level Access
- **Private Repository** - Only invited users can access
- **Collaborator Invitations** - Invite specific GitHub users
- **Role-Based Permissions** - Assign appropriate roles (Write access for publishing)

### Publishing Workflow
1. Collaborator clones repository
2. Creates new Markdown file in `src/content/blog/`
3. Commits and pushes changes
4. GitHub Actions automatically builds and deploys
5. Changes go live on GitHub Pages

### Alternative: Pull Request Workflow
1. Collaborator creates feature branch
2. Adds/edits blog post
3. Opens Pull Request
4. Review (optional)
5. Merge triggers deployment

## Content Structure

### Markdown Post Format
```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-01
author: "Author Name"
tags: ["tag1", "tag2"]
draft: false
---

# Post Content

Your markdown content here...
```

## Security Considerations

1. **Repository Access** - Keep repository private
2. **GitHub Token** - Use `GITHUB_TOKEN` in Actions (automatically provided)
3. **No Sensitive Data** - Don't commit API keys or secrets
4. **Content Validation** - Consider pre-commit hooks for Markdown validation
5. **Rate Limiting** - GitHub Pages has rate limits (be aware)

## Development Workflow

### Local Development
```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Publishing a Post
1. Create new `.md` file in `src/content/blog/`
2. Add frontmatter with metadata
3. Write content in Markdown
4. Commit and push to repository
5. Wait for GitHub Actions to deploy

## Dependencies

### Core
- `astro` - Framework
- `@astrojs/mdx` (optional) - MDX support
- `@astrojs/rss` - RSS feed generation

### Content Collections (Recommended)
- Astro's built-in Content Collections API

### Styling (Optional)
- `tailwindcss` + `@astrojs/tailwind`
- Or vanilla CSS/SCSS

### Code Highlighting
- `shiki` or `prismjs`

## Timeline Estimate

- **Phase 1**: 2-3 days
- **Phase 2**: 2-3 days
- **Phase 3**: 1 day
- **Phase 4**: 1 day
- **Phase 5**: 2-3 days

**Total**: ~8-11 days for full implementation

## Next Steps

1. Review and approve this plan
2. Initialize Astro.js project
3. Set up basic structure
4. Configure GitHub Pages deployment
5. Invite collaborators
6. Start publishing content

## Questions to Consider

1. **Styling Preference**: Tailwind CSS, vanilla CSS, or another framework?
2. **Content Collections**: Use Astro's Content Collections API or simple file-based routing?
3. **Image Handling**: Local storage or CDN (e.g., Cloudinary)?
4. **Comments**: Add commenting system (e.g., Giscus, Utterances)?
5. **Analytics**: Google Analytics, Plausible, or other?
6. **Domain**: Use custom domain or github.io subdomain?
