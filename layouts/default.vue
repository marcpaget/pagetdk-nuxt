<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names // eslint-disable-next-line vue/multi-word-component-names
<template>
    <div>
        <AppMenu />
        <div class="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
            <div class="h-screen w-screen bg-blue-500 dark:bg-orange-400">
                <slot />
            </div>
            <AppFooter />
        </div>
    </div>
</template>

<script></script>

<style></style>
