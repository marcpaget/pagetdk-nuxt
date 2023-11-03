
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "e9d4196c-e8cf-4686-8c78-0e6205f208ea"
  },
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
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
