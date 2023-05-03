<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names // eslint-disable-next-line vue/multi-word-component-names
<template>
    <div>
        <AppMenuDaisy />
        <div class="h-screen w-screen bg-slate-100 dark:bg-zinc-400">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>
