
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "141b2764-69c5-4c8f-a772-f6d1960fea37"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
