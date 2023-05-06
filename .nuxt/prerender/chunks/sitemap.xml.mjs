import { defineEventHandler } from 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/h3/dist/index.mjs';
import { SitemapStream, streamToPromise } from 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/sitemap/dist/index.js';
import { s as serverQueryContent } from './nitro/nitro-prerenderer.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nanoid/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/argon2/argon2.js';
import 'node:url';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unified/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/micromark-util-character/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-emoji/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/rehype-slug/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/rehype-external-links/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-gfm/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/rehype-raw/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-parse/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/remark-rehype/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/detab/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unist-builder/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/mdurl/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/slugify/slugify.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unist-util-position/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unist-util-visit/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unenv/runtime/npm/consola.mjs';

const sitemap_xml = defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "https://example.com"
  });
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly"
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
