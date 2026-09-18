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
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().default(false),
    // id of this essay's version in the other language, when one exists
    translationOf: z.string().optional(),
    // --- series ---
    // `series` names the collection this piece belongs to (see src/lib/series.ts);
    // `part` orders it; `partLabel` is what the reader is shown ("Part Three",
    // "Part Two · Engine 04"). The label is spelled out rather than derived,
    // because the book's own numbering is not a straight sequence.
    series: z.enum(['bedrock-and-weather', 'riding-out']).optional(),
    part: z.number().optional(),
    partLabel: z.string().optional(),
  }),
});

export const collections = { essays };
