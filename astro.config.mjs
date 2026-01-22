import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kgaurav-monotype.github.io',
  // Base path for GitHub Pages deployment
  // In development, access the site at http://localhost:4321/tech-blog
  base: '/tech-blog',
  integrations: [mdx()],
  output: 'static',
});
