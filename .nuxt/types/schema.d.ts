import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/supabase`
     */
    ["supabase"]: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-session`
     */
    ["session"]: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-viewport`
     */
    ["viewport"]: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-headlessui`
     */
    ["headlessui"]: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     */
    ["cookieControl"]: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@hypernym/nuxt-anime`
     */
    ["anime"]: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     */
    ["strapi"]: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@tresjs/nuxt`
     */
    ["tres"]: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     */
    ["vue3-carousel-nuxt"]: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-api-party`
     */
    ["apiParty"]: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@morev/vue-transitions/nuxt`
     */
    ["vueTransitions"]: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vercel-analytics`
     */
    ["nuxt-vercel-analytics"]: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-anchorscroll`
     */
    ["anchorscroll"]: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/cloudinary`
     */
    ["cloudinary"]: typeof import("@nuxtjs/cloudinary").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-particles`
     */
    ["particles"]: typeof import("nuxt-particles").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@oku-ui/motion-nuxt`
     */
    ["motion"]: typeof import("@oku-ui/motion-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `usemods-nuxt`
     */
    ["usemods"]: typeof import("usemods-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/supabase`
     */
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-session`
     */
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-viewport`
     */
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-headlessui`
     */
    ["headlessui"]?: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     */
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@hypernym/nuxt-anime`
     */
    ["anime"]?: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     */
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@tresjs/nuxt`
     */
    ["tres"]?: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     */
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-api-party`
     */
    ["apiParty"]?: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@morev/vue-transitions/nuxt`
     */
    ["vueTransitions"]?: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vercel-analytics`
     */
    ["nuxt-vercel-analytics"]?: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-anchorscroll`
     */
    ["anchorscroll"]?: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/cloudinary`
     */
    ["cloudinary"]?: typeof import("@nuxtjs/cloudinary").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-particles`
     */
    ["particles"]?: typeof import("nuxt-particles").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@oku-ui/motion-nuxt`
     */
    ["motion"]?: typeof import("@oku-ui/motion-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `usemods-nuxt`
     */
    ["usemods"]?: typeof import("usemods-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/supabase", Exclude<NuxtConfig["supabase"], boolean>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-headlessui", Exclude<NuxtConfig["headlessui"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@hypernym/nuxt-anime", Exclude<NuxtConfig["anime"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@tresjs/nuxt", Exclude<NuxtConfig["tres"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["nuxt-api-party", Exclude<NuxtConfig["apiParty"], boolean>] | ["@morev/vue-transitions/nuxt", Exclude<NuxtConfig["vueTransitions"], boolean>] | ["nuxt-vercel-analytics", Exclude<NuxtConfig["nuxt-vercel-analytics"], boolean>] | ["nuxt-anchorscroll", Exclude<NuxtConfig["anchorscroll"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxtjs/cloudinary", Exclude<NuxtConfig["cloudinary"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["nuxt-particles", Exclude<NuxtConfig["particles"], boolean>] | ["@oku-ui/motion-nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["usemods-nuxt", Exclude<NuxtConfig["usemods"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/supabase`
     * @see https://www.npmjs.com/package/@nuxtjs/supabase
     */
    ["supabase"]: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-session`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-session
     */
    ["session"]: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-viewport`
     * @see https://www.npmjs.com/package/nuxt-viewport
     */
    ["viewport"]: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-headlessui`
     * @see https://www.npmjs.com/package/nuxt-headlessui
     */
    ["headlessui"]: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     * @see https://www.npmjs.com/package/@dargmuesli/nuxt-cookie-control
     */
    ["cookieControl"]: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@hypernym/nuxt-anime`
     * @see https://www.npmjs.com/package/@hypernym/nuxt-anime
     */
    ["anime"]: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     * @see https://www.npmjs.com/package/@nuxtjs/strapi
     */
    ["strapi"]: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@tresjs/nuxt`
     * @see https://www.npmjs.com/package/@tresjs/nuxt
     */
    ["tres"]: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     * @see https://www.npmjs.com/package/vue3-carousel-nuxt
     */
    ["vue3-carousel-nuxt"]: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-api-party`
     * @see https://www.npmjs.com/package/nuxt-api-party
     */
    ["apiParty"]: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@morev/vue-transitions/nuxt`
     * @see https://www.npmjs.com/package/@morev/vue-transitions/nuxt
     */
    ["vueTransitions"]: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vercel-analytics`
     * @see https://www.npmjs.com/package/nuxt-vercel-analytics
     */
    ["nuxt-vercel-analytics"]: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-anchorscroll`
     * @see https://www.npmjs.com/package/nuxt-anchorscroll
     */
    ["anchorscroll"]: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/cloudinary`
     * @see https://www.npmjs.com/package/@nuxtjs/cloudinary
     */
    ["cloudinary"]: typeof import("@nuxtjs/cloudinary").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-particles`
     * @see https://www.npmjs.com/package/nuxt-particles
     */
    ["particles"]: typeof import("nuxt-particles").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@oku-ui/motion-nuxt`
     * @see https://www.npmjs.com/package/@oku-ui/motion-nuxt
     */
    ["motion"]: typeof import("@oku-ui/motion-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `usemods-nuxt`
     * @see https://www.npmjs.com/package/usemods-nuxt
     */
    ["usemods"]: typeof import("usemods-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/supabase`
     * @see https://www.npmjs.com/package/@nuxtjs/supabase
     */
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-session`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-session
     */
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-viewport`
     * @see https://www.npmjs.com/package/nuxt-viewport
     */
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-headlessui`
     * @see https://www.npmjs.com/package/nuxt-headlessui
     */
    ["headlessui"]?: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     * @see https://www.npmjs.com/package/@dargmuesli/nuxt-cookie-control
     */
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@hypernym/nuxt-anime`
     * @see https://www.npmjs.com/package/@hypernym/nuxt-anime
     */
    ["anime"]?: typeof import("@hypernym/nuxt-anime").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     * @see https://www.npmjs.com/package/@nuxtjs/strapi
     */
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@tresjs/nuxt`
     * @see https://www.npmjs.com/package/@tresjs/nuxt
     */
    ["tres"]?: typeof import("@tresjs/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     * @see https://www.npmjs.com/package/vue3-carousel-nuxt
     */
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-api-party`
     * @see https://www.npmjs.com/package/nuxt-api-party
     */
    ["apiParty"]?: typeof import("nuxt-api-party").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@morev/vue-transitions/nuxt`
     * @see https://www.npmjs.com/package/@morev/vue-transitions/nuxt
     */
    ["vueTransitions"]?: typeof import("@morev/vue-transitions/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vercel-analytics`
     * @see https://www.npmjs.com/package/nuxt-vercel-analytics
     */
    ["nuxt-vercel-analytics"]?: typeof import("nuxt-vercel-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-anchorscroll`
     * @see https://www.npmjs.com/package/nuxt-anchorscroll
     */
    ["anchorscroll"]?: typeof import("nuxt-anchorscroll").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/cloudinary`
     * @see https://www.npmjs.com/package/@nuxtjs/cloudinary
     */
    ["cloudinary"]?: typeof import("@nuxtjs/cloudinary").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package//Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]?: typeof import("/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-particles`
     * @see https://www.npmjs.com/package/nuxt-particles
     */
    ["particles"]?: typeof import("nuxt-particles").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@oku-ui/motion-nuxt`
     * @see https://www.npmjs.com/package/@oku-ui/motion-nuxt
     */
    ["motion"]?: typeof import("@oku-ui/motion-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `usemods-nuxt`
     * @see https://www.npmjs.com/package/usemods-nuxt
     */
    ["usemods"]?: typeof import("usemods-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/supabase", Exclude<NuxtConfig["supabase"], boolean>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-headlessui", Exclude<NuxtConfig["headlessui"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@hypernym/nuxt-anime", Exclude<NuxtConfig["anime"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@tresjs/nuxt", Exclude<NuxtConfig["tres"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["nuxt-api-party", Exclude<NuxtConfig["apiParty"], boolean>] | ["@morev/vue-transitions/nuxt", Exclude<NuxtConfig["vueTransitions"], boolean>] | ["nuxt-vercel-analytics", Exclude<NuxtConfig["nuxt-vercel-analytics"], boolean>] | ["nuxt-anchorscroll", Exclude<NuxtConfig["anchorscroll"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxtjs/cloudinary", Exclude<NuxtConfig["cloudinary"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["nuxt-particles", Exclude<NuxtConfig["particles"], boolean>] | ["@oku-ui/motion-nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["usemods-nuxt", Exclude<NuxtConfig["usemods"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
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

      admin: string,

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

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

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

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

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
      useNuxtImage: boolean,

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

      integrity: number,

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

   supabase: {
      url: string,

      key: string,

      redirect: boolean,

      redirectOptions: {
         login: string,

         callback: string,

         exclude: Array<any>,

         cookieRedirect: boolean,
      },

      cookieName: string,

      cookieOptions: {
         maxAge: number,

         sameSite: string,

         secure: boolean,
      },

      clientOptions: any,
   },

   strapi: {
      url: string,

      prefix: string,

      admin: string,

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
      enabled: boolean,

      initMode: string,

      id: string,

      initCommands: Array<any>,

      config: any,

      tags: Array<any>,

      loadingStrategy: string,

      url: string,
   },

   cloudinary: {
      cloudName: string,

      uploadPreset: any,

      apiKey: any,

      analytics: boolean,

      cloud: any,

      url: any,
   },

   "nuxt-seo": {
      canonicalQueryWhitelist: Array<string>,
   },

   cookieControl: {
      barPosition: string,

      closeModalOnClickOutside: boolean,

      colors: {
         barBackground: string,

         barButtonBackground: string,

         barButtonColor: string,

         barButtonHoverBackground: string,

         barButtonHoverColor: string,

         barTextColor: string,

         checkboxActiveBackground: string,

         checkboxActiveCircleBackground: string,

         checkboxDisabledBackground: string,

         checkboxDisabledCircleBackground: string,

         checkboxInactiveBackground: string,

         checkboxInactiveCircleBackground: string,

         controlButtonBackground: string,

         controlButtonHoverBackground: string,

         controlButtonIconColor: string,

         controlButtonIconHoverColor: string,

         focusRingColor: string,

         modalBackground: string,

         modalButtonBackground: string,

         modalButtonColor: string,

         modalButtonHoverBackground: string,

         modalButtonHoverColor: string,

         modalOverlay: string,

         modalOverlayOpacity: number,

         modalTextColor: string,

         modalUnsavedColor: string,
      },

      cookies: {
         necessary: Array<any>,

         optional: Array<any>,
      },

      cookieExpiryOffsetMs: number,

      cookieNameIsConsentGiven: string,

      cookieNameCookiesEnabledIds: string,

      cookieOptions: {
         path: string,

         sameSite: string,

         secure: boolean,
      },

      isAcceptNecessaryButtonEnabled: boolean,

      isControlButtonEnabled: boolean,

      isCookieIdVisible: boolean,

      isCssEnabled: boolean,

      isCssPonyfillEnabled: boolean,

      isDashInDescriptionEnabled: boolean,

      isIframeBlocked: boolean,

      isModalForced: boolean,

      locales: Array<string>,

      localeTexts: {
         en: {
            accept: string,

            acceptAll: string,

            bannerDescription: string,

            bannerTitle: string,

            close: string,

            cookiesFunctional: string,

            cookiesNecessary: string,

            cookiesOptional: string,

            decline: string,

            declineAll: string,

            here: string,

            iframeBlocked: string,

            manageCookies: string,

            save: string,

            settingsUnsaved: string,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }