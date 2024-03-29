import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["formkit"]?: typeof import("@formkit/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["headlessui"]?: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["anime"]?: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tres"]?: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["eslint"]?: typeof import("@nuxtjs/eslint-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apiParty"]?: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueTransitions"]?: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-vercel-analytics"]?: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gsap"]?: typeof import("@hypernym/nuxt-gsap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["anchorscroll"]?: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["cloudinary"]?: typeof import("@nuxtjs/cloudinary").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ark-ui"]?: typeof import("nuxt-ark-ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["primevue"]?: typeof import("nuxt-primevue").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-simple-robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/seo/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["seoExperiments"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/seo/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["particles"]?: typeof import("nuxt-particles").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["motion"]?: typeof import("@oku-ui/motion-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@formkit/nuxt", Exclude<NuxtConfig["formkit"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-headlessui", Exclude<NuxtConfig["headlessui"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@hypernym/nuxt-anime", Exclude<NuxtConfig["anime"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@tresjs/nuxt", Exclude<NuxtConfig["tres"], boolean>] | ["@nuxtjs/eslint-module", Exclude<NuxtConfig["eslint"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["nuxt-api-party", Exclude<NuxtConfig["apiParty"], boolean>] | ["@morev/vue-transitions/nuxt", Exclude<NuxtConfig["vueTransitions"], boolean>] | ["nuxt-vercel-analytics", Exclude<NuxtConfig["nuxt-vercel-analytics"], boolean>] | ["@hypernym/nuxt-gsap", Exclude<NuxtConfig["gsap"], boolean>] | ["nuxt-anchorscroll", Exclude<NuxtConfig["anchorscroll"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxtjs/cloudinary", Exclude<NuxtConfig["cloudinary"], boolean>] | ["nuxt-ark-ui", Exclude<NuxtConfig["ark-ui"], boolean>] | ["nuxt-primevue", Exclude<NuxtConfig["primevue"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-simple-robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/seo/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/seo/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["nuxt-particles", Exclude<NuxtConfig["particles"], boolean>] | ["@oku-ui/motion-nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   mdc: {
      highlight: any,
   },

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

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
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

   apiParty: {
      endpoints: {
         restCountriesApi: {
            url: string,
         },
      },

      client: boolean,

      openAPITS: any,

      server: {
         basePath: string,
      },
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   particles: {
      mode: string,

      lazy: boolean,
   },

   session: {
      api: {
         isEnabled: boolean,

         methods: Array<string>,

         basePath: string,
      },
   },

   SUPABASE_URL: string,

   SUPABASE_KEY: string,

   siteUrl: string,

   siteName: string,

   siteDescription: string,

   language: string,

   mdc: {
      components: {
         prose: boolean,

         map: {
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
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

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

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
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
         restCountriesApi: {
            cookies: any,
         },
      },

      client: boolean,

      server: {
         basePath: string,
      },
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

   cloudinary: {
      cloudName: string,

      uploadPreset: any,

      apiKey: any,

      analytics: boolean,
   },

   primevue: {
      usePrimeVue: boolean,

      resolvePath: any,

      cssLayerOrder: string,

      importPT: any,

      options: {
         ripple: boolean,
      },

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<any>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<any>,

      injectStylesAsStringToTop: Array<string>,
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }