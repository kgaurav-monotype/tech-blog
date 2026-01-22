---
title: "Getting Started with Astro.js"
description: "Learn how to build modern static sites with Astro.js, a powerful static site generator that delivers zero JavaScript."
pubDate: 2024-01-15
author: "Tech Blog Team"
tags: ["astro", "web development"]
draft: false
image: "/images/blog/blog1.avif"
imageAlt: "Astro.js logo and code editor showing Astro components"
---

# Getting Started with Astro.js

Astro.js is a modern static site generator that's designed to deliver **zero JavaScript by default**. This means faster websites, better SEO, and improved user experience.

## What is Astro?

Astro is a web framework for building content-focused websites. It combines the best parts of static site generators with modern component frameworks like React, Vue, and Svelte.

### Key Features

- **Zero JS by default** - Ship only the JavaScript you need
- **Component Islands** - Use React, Vue, Svelte, or plain HTML
- **Content Collections** - Type-safe content management
- **Built-in Optimizations** - Image optimization, CSS minification, and more

## Installation

Getting started with Astro is straightforward:

```bash
npm create astro@latest
```

This command will guide you through setting up a new Astro project with all the necessary configuration.

## Project Structure

A typical Astro project looks like this:

```
my-astro-site/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── content/
├── public/
└── astro.config.mjs
```

## Creating Your First Page

Pages in Astro are created using file-based routing. Simply create a file in the `src/pages/` directory:

```astro
---
// src/pages/index.astro
---

<html>
  <head>
    <title>My Astro Site</title>
  </head>
  <body>
    <h1>Hello, Astro!</h1>
  </body>
</html>
```

## Components

Astro components use a special `.astro` file format that combines HTML, CSS, and JavaScript:

```astro
---
// Component script (runs at build time)
const name = "Astro";
---

<div>
  <h1>Hello, {name}!</h1>
</div>

<style>
  h1 {
    color: blue;
  }
</style>
```

## Next Steps

- Explore the [Astro documentation](https://docs.astro.build)
- Check out the [Astro examples](https://github.com/withastro/astro/tree/main/examples)
- Join the [Astro Discord community](https://astro.build/chat)

Happy building! 🚀
