<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names // eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <AppMenu />
    <Breadcrumbs>
      <template #breadcrumb="{ to, title }">
        <NuxtLink :to="to">
          {{ title }}
        </NuxtLink>
        <div class="flex flex-col min-h-screen justify-center scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700">
          <slot />
        </div>
        <ScrollToTop />
        <AppFooter />
      </template>
    </Breadcrumbs>
  </div>
</template>

<script></script>

<!-- <style>
html {
    min-height: 100%;
    min-width: 100%;

    body {
        height: 100%;
        width: 100%;

        margin: 0;

        div#__nuxt {
            height: 100%;
            width: 100%;

            display: flex;
        }
    }
}
</style> -->
