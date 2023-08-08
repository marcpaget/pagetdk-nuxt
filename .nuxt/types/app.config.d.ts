
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/app.config"

declare const inlineConfig = {
  "firebaseConfig": {
    "apiKey": "AIzaSyCVW5oqUcCHhheg3cTkaOZeTYB0yEonURE",
    "authDomain": "nuxt3-esp32.firebaseapp.com",
    "projectId": "nuxt3-esp32",
    "storageBucket": "nuxt3-esp32.appspot.com",
    "messagingSenderId": "519703147494",
    "appId": "1:519703147494:web:4ff64ace33395546a15c27",
    "measurementId": "G-9DQ9LHNHZ0"
  },
  "vuefireOptions": {
    "optionsApiPlugin": false,
    "emulators": {
      "enabled": true
    },
    "config": {
      "apiKey": "AIzaSyCVW5oqUcCHhheg3cTkaOZeTYB0yEonURE",
      "authDomain": "nuxt3-esp32.firebaseapp.com",
      "projectId": "nuxt3-esp32",
      "storageBucket": "nuxt3-esp32.appspot.com",
      "messagingSenderId": "519703147494",
      "appId": "1:519703147494:web:4ff64ace33395546a15c27",
      "measurementId": "G-9DQ9LHNHZ0"
    }
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
