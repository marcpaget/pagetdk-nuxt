/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
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
                // roboto: ['Roboto', 'sans-serif'],
                // raleway: ['Raleway', 'sans-serif'],
                // poppins: ['Poppins', 'sans-serif'],
                aptos: ['Aptos', 'sans-serif'],
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
