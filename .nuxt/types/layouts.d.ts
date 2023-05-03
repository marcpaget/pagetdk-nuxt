import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article" | "default" | "defaultwithouthandw" | "formkit-theme" | "page" | "post"
declare module "/Users/marcpaget/Kodeprojekter/pagetdk-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}