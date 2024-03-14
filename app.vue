<template>
    <NuxtLayout>
        <div class="w-screen scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700 dark:bg-slate-100">
            <CookieControl>
                <template #bar>
                    <h3>Bar title</h3>
                    <p>Bar description (you can use $cookies.text.barDescription)</p>
                    <NuxtLink>Go somewhere</NuxtLink>
                </template>
            </CookieControl>
            <NuxtLoadingIndicator />
            <OgImageScreenshot />
            <div class="sticky top-0">
                <AppMenuUpdated />
                <!-- <PrimevueMenubar /> -->
            </div>
            <NuxtPage />
            <ScrollTop />
        </div>
        <AppFooter />
    </NuxtLayout>
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
