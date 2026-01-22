import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Tech Blog Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(), // Main image URL (relative to public folder)
    imageAlt: z.string().optional(), // Alt text for the image
  }),
});

export const collections = { blog };
