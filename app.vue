<template>
    <div class="scrollbar-thumb-blue-700 h-screen w-screen">
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
        <div class="sticky top-0">
            <AppMenuUpdated />
        </div>
        <NuxtPage />
        <ScrollTop />
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
