// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        // '@nuxtjs/prismic',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'unplugin-icons/nuxt',
        //'@nuxtjs/partytown',
        //'@inkline/nuxt',
        'nuxt-api-party',
        'nuxt-umami',
        '@sidebase/nuxt-session',
        '@pinia/nuxt',
        // '@nuxtjs/vuetify',
        'nuxt-viewport',
        'nuxt-swiper',
        '@nuxt/image-edge',
        'nuxt-headlessui',
        '@dargmuesli/nuxt-cookie-control',
        '@nuxt/devtools',
        // 'nuxt-logrocket',
        // 'nuxt-bugsnag',
        '@nuxtjs/i18n',
    ],
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
    ssr: false,
    // i18n: {
    //     vueI18n: './i18n.config.ts',
    // },
    // logRocket: {
    //     id: '6boygm/selfhostingninja',
    //     dev: false,
    //     config: {},
    // },
    apiParty: {
        endpoints: {
            restCountriesApi: {
                url: process.env.API_PARTY_BASE_URL,
            },
        },
    },
    // bugsnag: {
    //     publishRelease: true,
    //     config: {
    //         apiKey: process.env.BUGSNAG_APIKEY,
    //         enabledReleaseStages: ['staging', 'production'],
    //         releaseStage: process.env.NODE_ENV,
    //         appVersion: '1.0',
    //     },
    // },
    components: true,
    content: {
        documentDriven: true,
    },
    // devServerHandlers: [],
    typescript: {
        strict: true,
        shim: false,
    },
    extends: ['nuxt-seo-kit'],
    headlessui: {
        prefix: 'Headless',
    },
    umami: {
        autoTrack: true,
        doNotTrack: false,
        cache: false,
        domains: 'selfhosting.ninja',
        websiteId: '13c32209-6374-4c1d-a2d6-8fbb41c89e01',
        scriptUrl: 'https://analytics.umami.is/script.js',
    },
    image: {
        domains: ['selfhosting.ninja'],
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/selfhostingninja/image/upload/v1679713729',
        },
    },
    colorMode: {
        classSuffix: '',
        // preference: 'system',
        fallback: 'light',
        componentName: 'ColorScheme',
    },
    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_KEY: process.env.SUPABASE_KEY,
            siteUrl: 'https://selfhosting.ninja',
            siteName: 'Selfhosting.ninja',
            siteDescription:
                'Selfhosting.ninja is a blog about selfhosting your own homelab, Home Assistant, Docker, Kubernetes and much more.',
            language: 'en-US',
            titleSeparator: '|',
            trailingSlash: false,
        },
    },
    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css',
    //     configPath: 'tailwind.config.js',
    //     exposeConfig: false,
    //     //    config: {},
    //     injectPosition: 0,
    //     viewer: true,
    // },
    // css: ['~/assets/css/main.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': 'postcss-nesting',
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
    ],
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer', 'vuetify', 'primevue']
                : ['@juggle/resize-observer', 'vuetify', 'primevue'],
    },
    vite: {
        logLevel: 'info',
        optimizeDeps: {
            include: [
                '@headlessui/vue',
                '@heroicons/vue/solid',
                '@heroicons/vue/outline',
                'vue',
                'ufo',
                'naive-ui',
                'vueuc',
                'date-fns-tz/esm/formatInTimeZone',
            ],
        },
    },
})
