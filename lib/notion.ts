import { Client } from '@notionhq/client';
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints/common';
import type { Feature, ExampleApp, LearnLink, Level } from './types';
import defaultFeatures from '@/data/features';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

function text(prop: unknown): string {
  if (!prop || typeof prop !== 'object') return '';
  const p = prop as { type?: string; rich_text?: RichTextItemResponse[]; title?: RichTextItemResponse[]; url?: string; number?: number };
  if (p.type === 'rich_text') return (p.rich_text ?? []).map(r => r.plain_text).join('');
  if (p.type === 'title') return (p.title ?? []).map(r => r.plain_text).join('');
  if (p.type === 'url') return p.url ?? '';
  if (p.type === 'number') return String(p.number ?? '');
  return '';
}

function splitLines(raw: string): string[] {
  return raw.split('\n').map(s => s.trim()).filter(Boolean);
}

function parseLearnLinks(raw: string): LearnLink[] {
  const lines = splitLines(raw);
  const links: LearnLink[] = [];
  for (let i = 0; i + 1 < lines.length; i += 2) {
    links.push({ title: lines[i], url: lines[i + 1] });
  }
  return links;
}

function parseLevel(props: Record<string, unknown>, prefix: 'Spark' | 'Grow' | 'Master'): Level {
  const nameMap: Record<string, Level['name']> = { Spark: 'Spark', Grow: 'Grow', Master: 'Master' };
  return {
    name: nameMap[prefix],
    title: text(props[`${prefix} Title`]),
    brief: text(props[`${prefix} Brief`]),
    steps: splitLines(text(props[`${prefix} Steps`])),
  };
}

function mapPageToFeature(page: PageObjectResponse): Feature {
  const props = page.properties as Record<string, unknown>;

  const app1Name = text(props['App 1 Name']);
  const app1Embed = text(props['App 1 Embed']);
  const app2Name = text(props['App 2 Name']);
  const app2Embed = text(props['App 2 Embed']);

  const exampleApps: ExampleApp[] = [];
  if (app1Name && app1Embed) exampleApps.push({ name: app1Name, embedCode: app1Embed });
  if (app2Name && app2Embed) exampleApps.push({ name: app2Name, embedCode: app2Embed });

  return {
    id: text(props['ID']),
    name: text(props['Name']),
    tagline: text(props['Tagline']),
    blurb: text(props['Blurb']),
    icon: text(props['Icon']),
    garden: {
      plant: text(props['Garden Plant']),
      color: text(props['Garden Color']),
    },
    lab: {
      symbol: text(props['Lab Symbol']),
      atomicHint: text(props['Lab Hint']),
      color: text(props['Lab Color']),
    },
    playground: {
      structure: text(props['Playground Structure']),
      color: text(props['Playground Color']),
    },
    levels: [
      parseLevel(props, 'Spark'),
      parseLevel(props, 'Grow'),
      parseLevel(props, 'Master'),
    ],
    exampleApps,
    learn: parseLearnLinks(text(props['Learn Links'])),
  };
}

export async function getFeatures(): Promise<Feature[]> {
  if (!process.env.NOTION_DATABASE_ID || !process.env.NOTION_TOKEN) {
    return defaultFeatures;
  }
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATABASE_ID,
    });
    return (response.results as PageObjectResponse[]).map(mapPageToFeature);
  } catch (e) {
    console.error('Notion fetch failed, falling back to static data', e);
    return defaultFeatures;
  }
}
