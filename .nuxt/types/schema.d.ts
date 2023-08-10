import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["formkit"]?: typeof import("@formkit/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["headlessui"]?: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["anime"]?: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["@varlet/ui"]?: typeof import("@varlet/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tres"]?: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["eslint"]?: typeof import("@nuxtjs/eslint-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vuefire"]?: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apiParty"]?: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueTransitions"]?: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-vercel-analytics"]?: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gsap"]?: typeof import("@hypernym/nuxt-gsap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["anchorscroll"]?: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["unhead"]?: typeof import("nuxt-unhead").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@formkit/nuxt", Exclude<NuxtConfig["formkit"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/supabase", Exclude<NuxtConfig["supabase"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/image-edge", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-headlessui", Exclude<NuxtConfig["headlessui"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@hypernym/nuxt-anime", Exclude<NuxtConfig["anime"], boolean>] | ["@varlet/nuxt", Exclude<NuxtConfig["@varlet/ui"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@tresjs/nuxt", Exclude<NuxtConfig["tres"], boolean>] | ["@nuxtjs/eslint-module", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-vuefire", Exclude<NuxtConfig["vuefire"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["nuxt-api-party", Exclude<NuxtConfig["apiParty"], boolean>] | ["@morev/vue-transitions/nuxt", Exclude<NuxtConfig["vueTransitions"], boolean>] | ["nuxt-vercel-analytics", Exclude<NuxtConfig["nuxt-vercel-analytics"], boolean>] | ["@hypernym/nuxt-gsap", Exclude<NuxtConfig["gsap"], boolean>] | ["nuxt-anchorscroll", Exclude<NuxtConfig["anchorscroll"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-unhead", Exclude<NuxtConfig["unhead"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   indexable: boolean,

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   supabase: {
      serviceKey: any,
   },

   session: {
      isEnabled: boolean,

      session: {
         expiryInSeconds: number,

         idLength: number,

         storePrefix: string,

         cookieSameSite: string,

         cookieSecure: boolean,

         cookieHttpOnly: boolean,

         storageOptions: {
            driver: string,

            options: any,
         },

         domain: boolean,

         ipPinning: boolean,

         rolling: boolean,
      },

      api: {
         isEnabled: boolean,

         methods: Array<string>,

         basePath: string,
      },
   },

   strapi: {
      url: string,

      prefix: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },

   vuefire: {
      options: {
         optionsApiPlugin: boolean,

         emulators: {
            enabled: boolean,
         },

         config: {
            apiKey: string,

            authDomain: string,

            projectId: string,

            storageBucket: string,

            messagingSenderId: string,

            appId: string,

            measurementId: string,
         },
      },
   },

   apiParty: {
      endpoints: {
         gsmarena: {
            url: string,
         },
      },

      allowClient: boolean,
   },
  }
  interface PublicRuntimeConfig {
   session: {
      api: {
         isEnabled: boolean,

         methods: Array<string>,

         basePath: string,
      },
   },

   trailingSlash: boolean,

   titleSeparator: string,

   siteName: string,

   siteUrl: string,

   siteDescription: string,

   language: string,

   SUPABASE_URL: string,

   SUPABASE_KEY: string,

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   supabase: {
      url: string,

      key: string,

      redirect: boolean,

      redirectOptions: {
         login: string,

         callback: string,

         exclude: Array<any>,
      },

      cookieName: string,

      cookieOptions: {
         maxAge: number,

         sameSite: string,

         secure: boolean,
      },

      clientOptions: {
         auth: {
            flowType: string,

            detectSessionInUrl: boolean,

            persistSession: boolean,

            autoRefreshToken: boolean,
         },
      },
   },

   strapi: {
      url: string,

      prefix: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },

   apiParty: {
      endpoints: {
         gsmarena: {
            cookies: any,
         },
      },

      allowClient: boolean,
   },

   anchorScroll: {
      hooks: Array<string>,
   },

   gtag: {
      id: string,

      config: any,

      initialConsent: boolean,

      loadingStrategy: string,
   },

   "nuxt-unhead": {
      seoOptimise: boolean,

      resolveAliases: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }