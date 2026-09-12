import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ar', 'en']),
    thread: z.enum(['building', 'faith', 'body', 'mind', 'perspective']),
    minutes: z.number().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    // id of this essay's version in the other language, when one exists
    translationOf: z.string().optional(),
  }),
});

export const collections = { essays };
