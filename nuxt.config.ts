// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules:
[// '@nuxtjs/tailwindcss', disabled because of nuxt-ui
  '@nuxt/content', // '@nuxtjs/prismic',
  '@formkit/nuxt', '@vueuse/nuxt', // '@nuxtjs/color-mode', disabled because of nuxt-ui
  '@nuxtjs/supabase', // 'nuxt-icon', disabled because of nuxt-ui
  // '@nuxtjs/partytown',
  // '@inkline/nuxt',
  'unplugin-icons/nuxt', // 'nuxt-umami',
  // '@nuxtjs/vuetify',
  '@sidebase/nuxt-session', '@pinia/nuxt', 'nuxt-viewport', // '@nuxt/image-edge',
  'nuxt-swiper', 'nuxt-headlessui', // 'nuxt-logrocket',
  '@dargmuesli/nuxt-cookie-control', // 'nuxt-bugsnag',
  '@nuxt/devtools', // '@nuxtjs/i18n',
  // '@varlet/nuxt',
  // 'nuxt-purgecss',
  '@hypernym/nuxt-anime', '@nuxtjs/strapi', // 'nuxt-vuefire',
  '@tresjs/nuxt', 'vue3-carousel-nuxt', 'nuxt-api-party', '@morev/vue-transitions/nuxt', 'nuxt-vercel-analytics', 'nuxt-anchorscroll', // 'nuxt-aos',
  'nuxt-gtag', '@nuxtjs/cloudinary',
  // '@primevue/nuxt-module',
  '@nuxt/image', '@nuxtjs/seo', 'nuxt-particles', '@oku-ui/motion-nuxt',
  '@nuxt/ui', 'usemods-nuxt', '@nuxt/eslint'],

  supabase: {
    redirect: false,
    // https://www.reddit.com/r/Nuxt/comments/17a3p7r/nuxt_app_keeps_redirecting_to_login/
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
        jsx: true,
        // @stylistic/array-element-newline: "error",
      }, // <---
    },
    checker: {
      emitWarning: false,
      lintOnStart: false,
      emitError: false,
      // the options from `@nuxtjs/eslint-module` go here
    },
  },

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

  gtag: {
    id: 'G-L04C39X79K',
  },

  particles: { mode: 'full' },

  // primevue: {
  // 	usePrimeVue: false,
  // 	components: {
  // 		prefix: 'prime',
  // 		exclude: ['useToast'],
  // 	},
  // 	options: {
  // 		ripple: true,
  // 	},
  // 	// importPT: { as: 'Lara', from: '~/primevue/presets/lara' },
  // },

  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },

  apiParty: {
    endpoints: {
      restCountriesApi: {
        url: 'https://restcountries.com/',
      },
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
  // eslint: {
  //     emitWarning: false,
  //     lintOnStart: false,
  //     emitError: false,
  // },
  // plugins: ['~/plugins/primevue.js', '~/plugins/vuetify.ts', '~/plugins/naive-ui.ts'],
  ssr: true,

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
    shim: false,
  },

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
    preference: 'system',
  },

  // colorMode: {
  //     classSuffix: '',
  //     // preference: 'system',
  //     fallback: 'light',
  // },

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

  // css: [
  // 	'primevue/resources/themes/lara-light-blue/theme.css',
  // 	'primevue/resources/primevue.css',
  // 	'primeicons/primeicons.css',
  // 	'primeflex/primeflex.css',
  // ],

  build: {
    transpile:
																																																																								process.env.NODE_ENV === 'production' ? ['vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer', 'vuetify', 'primevue'] : ['@juggle/resize-observer', 'vuetify', 'primevue'],
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
        'vueuc',
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-07-07',
});
