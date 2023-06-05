/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        'node_modules/tailvue/dist/tailvue.es.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
                //sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
                permanentmarker: ['Permanent Marker', 'cursive'],
            },
            colors: {
                kaldi: '#ff0000',
            },
            textColor: {
                kaldi: '#ff0000',
            },
        },
    },
    darkMode: 'class',
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tw-elements/dist/plugin'),
        require('daisyui'),
        require('tailwind-scrollbar'),
        formKitTailwind,
    ],
}
