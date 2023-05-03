import { AppFooter } from './.nuxt/components'; import { AppMenuDaisy } from './.nuxt/components';

<template>
    <div class="scrollbar-thumb-blue-700">
        <SeoKit />
        <NuxtLoadingIndicator />
        <OgImageScreenshot />
        <AppMenuDaisy />
        <NuxtPage />
        <AppFooter />
    </div>
</template>

<!------------------------------------------------------
<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}
</style>
-->
