import { defineEventHandler, getQuery, createError } from 'h3';
import { u as useHostname, d as defaults } from '../utils.mjs';
import { g as getRouteRules } from '../nitro/node-server.mjs';
import 'node:fs';
import 'pathe';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:url';
import 'nanoid';
import 'dayjs';
import 'argon2';
import 'ipx';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

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
    baseURL: useHostname(e)
  };
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
