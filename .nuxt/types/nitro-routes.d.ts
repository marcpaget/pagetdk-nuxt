// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/sitemap.xml').default>>>> | Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/session': {
      'patch': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@sidebase/nuxt-session/dist/runtime/server/api/session').default>>>>
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@sidebase/nuxt-session/dist/runtime/server/api/session').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@sidebase/nuxt-session/dist/runtime/server/api/session').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@sidebase/nuxt-session/dist/runtime/server/api/session').default>>>>
    }
    '/api/__api_party/:endpointId': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-api-party/dist/runtime/server/handler').default>>>>
    }
    '/api/og-image-html': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/html').default>>>>
    }
    '/api/og-image-options': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/options').default>>>>
    }
    '/api/og-image-svg': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/svg').default>>>>
    }
    '/api/og-image-vnode': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/vnode').default>>>>
    }
    '/api/og-image-font': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/font').default>>>>
    }
    '/api/__sitemap__/debug': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap').default>>>>
    }
    '/api/__sitemap__/document-driven-urls': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/document-driven-urls').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-robots/dist/runtime/server/robots-txt').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
  }
}
export {}