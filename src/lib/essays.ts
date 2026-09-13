import { getCollection, type CollectionEntry } from 'astro:content';

/** The single definition of "published", used by every page, the feed and the
 *  sitemap — so a draft or a future-dated post can never leak through one of
 *  them while the others hide it. */
export async function publishedEssays(): Promise<CollectionEntry<'essays'>[]> {
  const now = new Date();
  return (await getCollection('essays'))
    .filter((e) => !e.data.draft && e.data.date <= now)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
