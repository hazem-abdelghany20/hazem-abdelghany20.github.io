export type SeriesKey = 'bedrock-and-weather';

export type SeriesDef = {
  key: SeriesKey;
  title: string;
  ar: string;
  subtitle: string;
  /** Shown on the essays index in place of every individual part. */
  blurb: string;
  /** Landing page that every part links back to. */
  href: string;
  /** Planned length of the finished series — not how many are published yet. */
  parts: number;
};

export const SERIES: Record<SeriesKey, SeriesDef> = {
  'bedrock-and-weather': {
    key: 'bedrock-and-weather',
    title: 'Bedrock and Weather',
    ar: 'الصخر والطقس',
    subtitle: 'A field guide to how fortunes are actually built',
    blurb:
      'Ten fortunes taken apart to the mechanism. Five frameworks tested until they broke. And an honest line drawn between what every wealthy person had — and what was only the weather they happened to be standing in.',
    href: '/bedrock-and-weather/',
    parts: 10,
  },
};

export const seriesDef = (key: SeriesKey) => SERIES[key];
