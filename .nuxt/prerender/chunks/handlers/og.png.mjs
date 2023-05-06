import { defineEventHandler, setHeader, createError } from 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/h3/dist/index.mjs';
import { parseURL, withoutTrailingSlash, withBase } from 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ufo/dist/index.mjs';
import { f as fetchOptions, u as useHostname } from '../utils.mjs';
import { u as useProvider } from '../rollup/provider.mjs';
import 'node:fs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/pathe/dist/index.mjs';
import '../rollup/config.mjs';
import '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nanoid/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/argon2/argon2.js';
import 'node:url';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/ipx/dist/index.mjs';
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
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/satori-html/dist/index.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/twemoji/dist/twemoji.npm.js';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/svg2png-wasm/dist/index.mjs';
import 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/satori/dist/index.js';

const og_png = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  if (!path.endsWith("__og_image__/og.png"))
    return;
  const basePath = withoutTrailingSlash(
    path.replace("__og_image__/og.png", "")
  );
  setHeader(e, "Content-Type", "image/png");
  setHeader(e, "Cache-Control", "no-cache, no-store, must-revalidate");
  setHeader(e, "Pragma", "no-cache");
  setHeader(e, "Expires", "0");
  const options = await fetchOptions(e, basePath);
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`
    });
  }
  return provider.createPng(withBase(basePath, useHostname(e)), options);
});

export { og_png as default };
//# sourceMappingURL=og.png.mjs.map
