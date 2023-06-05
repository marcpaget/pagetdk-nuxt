import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'
import Menubar from 'primevue/menubar'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('TabMenu', TabMenu)
    nuxtApp.vueApp.component('Menubar', Menubar)
    //other components that you need
})
