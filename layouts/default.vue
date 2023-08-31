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
                <div class="scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700">
                    <div class="h-screen w-screen bg-blue-500 dark:bg-orange-400">
                        <slot />
                        <ScrollToTop />
                    </div>

                    <AppFooter />
                </div>
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
