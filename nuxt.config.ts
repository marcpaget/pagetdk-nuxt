// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [
        '@nuxt/content', //'@nuxtjs/tailwindcss',
        '@formkit/nuxt', // '@nuxtjs/prismic',
        '@vueuse/nuxt', //'@nuxtjs/supabase',
        //'@nuxtjs/color-mode',
        'nuxt-icon',
        'unplugin-icons/nuxt', //'@nuxtjs/partytown',
        //'@inkline/nuxt',
        //'nuxt-umami',
        '@sidebase/nuxt-session',
        '@pinia/nuxt', // '@nuxtjs/vuetify',
        'nuxt-viewport',
        'nuxt-swiper',
        // '@nuxt/image-edge',
        'nuxt-headlessui',
        '@dargmuesli/nuxt-cookie-control',
        '@nuxt/devtools', // 'nuxt-logrocket',
        // 'nuxt-bugsnag',
        //'@nuxtjs/i18n',
        '@hypernym/nuxt-anime',
        '@varlet/nuxt', //'nuxt-purgecss',
        '@nuxt/ui',
        '@nuxtjs/strapi',
        '@tresjs/nuxt',
        '@nuxtjs/eslint-module', //'nuxt-vuefire',
        'vue3-carousel-nuxt',
        'nuxt-api-party',
        '@morev/vue-transitions/nuxt',
        'nuxt-vercel-analytics',
        '@hypernym/nuxt-gsap',
        'nuxt-anchorscroll',
        'nuxt-gtag',
        'nuxt-og-image',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        'nuxt-link-checker',
        'nuxt-seo-experiments', //'nuxt-schema-org',
        //'nuxt-aos',
        '@nuxtjs/cloudinary',
        'nuxt3-leaflet',
        '@nuxt/image',
        // '@nuxtus/nuxt-localtunnel',
    ],

    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL!,
            SUPABASE_KEY: process.env.SUPABASE_KEY!,
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL! || 'https://paget.dk',
            siteName: 'Paget.dk',
            siteDescription: 'Velkommen til Paget.dk!',
            language: 'da-DK', // prefer more explicit language codes like `en-AU` over `en`
        },
    },
    // localtunnel: {},
    gtag: {
        id: 'G-L04C39X79K',
    },

    anchorscroll: {
        hooks: [
            // Or any valid hook if needed
            // Default is `page:finish`
            'page:transition:finish',
        ],
    },
    // module options
    cookieControl: {
        colors: {
            checkboxActiveBackground: '#00A34A', // text-green-600
        },
        closeModalOnClickOutside: true,
        cookies: {
            necessary: [
                {
                    description: {
                        en: 'This cookie does something very very very very very very very long.',
                    },
                    name: {
                        en: 'Necessary Cookie',
                    },
                    targetCookieIds: ['NEC'],
                },
            ],
            optional: [
                {
                    id: 'op',
                    name: 'Optional Cookie',
                    links: {
                        'https://example.com': 'Privacy Policy',
                        'https://example.cop': null,
                    },
                    targetCookieIds: ['_o', '_p', '_t'],
                },
            ],
        },
        isCookieIdVisible: true,
        isIframeBlocked: true,
        locales: ['en'],
        localeTexts: {
            en: {
                iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
            },
        },
    },
    apiParty: {
        endpoints: {
            restCountriesApi: {
                url: process.env.API_PARTY_BASE_URL!,
            },
        },
    },
    gsap: {
        extraPlugins: {
            scrollTrigger: true,
        },
    },
    // vuefire: {
    //     config: {
    //         // there could be other properties depending on the project
    //         apiKey: 'AIzaSyCVW5oqUcCHhheg3cTkaOZeTYB0yEonURE',
    //         authDomain: 'nuxt3-esp32.firebaseapp.com',
    //         projectId: 'nuxt3-esp32',
    //         storageBucket: 'nuxt3-esp32.appspot.com',
    //         messagingSenderId: '519703147494',
    //         appId: '1:519703147494:web:4ff64ace33395546a15c27',
    //         measurementId: 'G-9DQ9LHNHZ0',
    //     },
    // },
    eslint: {
        emitWarning: false,
        lintOnStart: false,
        emitError: false,
    },
    //plugins: ['~/plugins/primevue.js', '~/plugins/vuetify.ts', '~/plugins/naive-ui.ts'],
    ssr: false,
    components: true,
    strapi: {
        // Options
    },
    // purgecss: {
    //     enabled: true, // Always enable purgecss
    //     //  safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
    // },
    content: {
        documentDriven: true,
    },

    devServerHandlers: [],

    typescript: {
        // strict: true,
    },

    // extends: ['nuxt-seo-kit'],

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
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt',
        },
    },

    colorMode: {
        classSuffix: '',
        // preference: 'system',
        fallback: 'light',
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
    // postcss: {
    //     plugins: {
    //         'postcss-import': {},
    //         'tailwindcss/nesting': 'postcss-nesting',
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
    // postcss: {
    //     plugins: {
    //         'postcss-import': {},
    //         'tailwindcss/nesting': 'postcss-nesting',
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },

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
            ],
        },
    },

    devtools: {
        enabled: true,
    },
})
