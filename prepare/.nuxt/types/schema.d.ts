import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
    interface NuxtConfig {
        ['devtools']?: typeof import('/opt/homebrew/lib/node_modules/@nuxt/devtools/module').default extends NuxtModule<
            infer O
        >
            ? Partial<O>
            : Record<string, any>
        ['telemetry']?: typeof import('@nuxt/telemetry').default extends NuxtModule<infer O>
            ? Partial<O>
            : Record<string, any>
        modules?: (
            | undefined
            | null
            | false
            | NuxtModule
            | string
            | [NuxtModule | string, Record<string, any>]
            | ['/opt/homebrew/lib/node_modules/@nuxt/devtools/module', Exclude<NuxtConfig['devtools'], boolean>]
            | ['@nuxt/telemetry', Exclude<NuxtConfig['telemetry'], boolean>]
        )[]
    }
    interface RuntimeConfig {
        app: {
            baseURL: string

            buildAssetsDir: string

            cdnURL: string
        }
    }
    interface PublicRuntimeConfig {}
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $config: RuntimeConfig
    }
}
declare module '@vue/runtime-dom' {
    interface ComponentCustomProperties {
        $config: RuntimeConfig
    }
}
