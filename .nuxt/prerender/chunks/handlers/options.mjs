import { defineEventHandler, getQuery, getHeaders, createError } from 'file:///Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/h3/dist/index.mjs';
import { d as defaults } from '../rollup/config.mjs';
import { g as getRouteRules } from '../nitro/nitro-prerenderer.mjs';
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

function decodeHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      obj[key] = value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/");
    }
  });
  return obj;
}
function extractOgImageOptions(html) {
  const htmlPayload = html.match(/<script id="nuxt-og-image-options" type="application\/json">(.+?)<\/script>/)?.[1];
  if (!htmlPayload)
    return false;
  let options;
  try {
    options = JSON.parse(htmlPayload);
  } catch (e) {
    options = false;
  }
  if (options) {
    const description = html.match(/<meta property="og:description" content="(.*?)">/)?.[1];
    if (description)
      options.description = description;
    else
      options.description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
    return decodeHtmlEntities(options);
  }
  return false;
}

const options = defineEventHandler(async (e) => {
  const query = getQuery(e);
  const path = query.path || "/";
  const fetchOptions = {
    headers: getHeaders(e)
  } ;
  const html = await globalThis.$fetch(path, {
    ...fetchOptions
  });
  const extractedPayload = extractOgImageOptions(html);
  if (!extractedPayload) {
    throw createError({
      statusCode: 500,
      statusMessage: `The path ${path} is missing the og-image payload.`
    });
  }
  e.node.req.url = path;
  e.context._nitro.routeRules = void 0;
  const routeRules = getRouteRules(e)?.ogImage;
  e.node.req.url = e.path;
  if (routeRules === false)
    return false;
  return {
    path,
    ...defaults,
    // use route rules
    ...routeRules || {},
    // use provided data
    ...extractedPayload,
    // use query data
    ...query
  };
});

export { options as default };
//# sourceMappingURL=options.mjs.map
