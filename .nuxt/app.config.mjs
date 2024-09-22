
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "b2668664-d20f-4a7e-a20f-55ca375afb19"
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
