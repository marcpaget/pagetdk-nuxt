<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names // eslint-disable-next-line vue/multi-word-component-names
<template>
    <div>
        <AppMenuDaisy />
        <div class="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
            <div class="h-screen w-screen bg-white dark:bg-zinc-400">
                <slot />
            </div>
            <AppFooter />
        </div>
    </div>
</template>

<script></script>

<style></style>
