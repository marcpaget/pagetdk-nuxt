// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        //'@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        // '@nuxtjs/prismic',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        //'@nuxtjs/color-mode',
        'nuxt-icon',
        'unplugin-icons/nuxt',
        //'@nuxtjs/partytown',
        //'@inkline/nuxt',
        //'nuxt-umami',
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
        //'@nuxtjs/i18n',
        '@hypernym/nuxt-anime',
        '@varlet/nuxt',
        'nuxt-purgecss',
        '@nuxthq/ui',
        '@nuxtjs/strapi',
    ],
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
    ssr: false,
    components: true,
    content: {
        documentDriven: true,
    },

    devServerHandlers: [],

    typescript: {
        strict: true,
        shim: false,
    },

    extends: ['nuxt-seo-kit'],

    headlessui: {
        prefix: 'Headless',
    },

    // umami: {
    //     autoTrack: true,
    //     doNotTrack: false,
    //     cache: false,
    //     domains: 'selfhosting.ninja',
    //     websiteId: '13c32209-6374-4c1d-a2d6-8fbb41c89e01',
    //     scriptUrl: 'https://analytics.umami.is/script.js',
    // },
    image: {
        domains: ['paget.dk'],
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/selfhostingninja/image/upload/v1684199117',
        },
    },

    colorMode: {
        classSuffix: '',
        // preference: 'system',
        fallback: 'light',
        componentName: 'ColorScheme',
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
        'primeflex/primeflex.css',
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

    devtools: true,
})
