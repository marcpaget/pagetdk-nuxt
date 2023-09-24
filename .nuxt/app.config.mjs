
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
