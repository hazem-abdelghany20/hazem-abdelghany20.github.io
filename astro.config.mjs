import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hazemabdelghany.com',
  // Build emits directory-format URLs (/about/index.html), and canonicals and the
  // sitemap are trailing-slashed; keep hrefs consistent so no link costs a 301.
  trailingSlash: 'always',
});
