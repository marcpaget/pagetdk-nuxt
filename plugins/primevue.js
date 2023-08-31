import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'
import Menubar from 'primevue/menubar'
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop'
import Galleria from 'primevue/galleria'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('TabMenu', TabMenu)
    nuxtApp.vueApp.component('Menubar', Menubar)
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
    nuxtApp.vueApp.component('ScrollTop', ScrollTop)
    nuxtApp.vueApp.component('Galleria', Galleria)

    //other components that you need
})
