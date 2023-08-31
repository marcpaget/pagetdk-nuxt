
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ]
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/app.config.ts"
import cfg1 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/@nuxthq/ui/dist/runtime/app.config.mjs"

export default /* #__PURE__ */ defuFn(cfg0, cfg1, inlineConfig)
