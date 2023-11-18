<template>
  <!-- <div class="scrollbar-thumb-blue-700"> -->
  <div>
    <CookieControl>
      <template #bar>
        <h3>Bar title</h3>
        <p>Bar description (you can use $cookies.text.barDescription)</p>
        <n-link>Go somewhere</n-link>
      </template>
    </CookieControl>
    <SeoKit />
    <NuxtLoadingIndicator />
    <OgImageScreenshot />
    <AppMenu />
    <NuxtPage />
    <ScrollTop />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, isModalActive, moduleOptions } = useCookieControl()
</script>
