/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
    daisyui: {
        themes: ['dracula'],
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: false, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
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
                sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
                //header: ['Nunito Sans'],
                quicksand: ['Quicksand', 'sans-serif'],
                //sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
                permanentmarker: ['Permanent Marker', 'cursive'],
                mavenpro: ['Maven Pro', 'sans-serif'],
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
        require('tailwindcss-animated'),
        formKitTailwind,
    ],
}
