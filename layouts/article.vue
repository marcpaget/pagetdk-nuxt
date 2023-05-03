<template>
    <div>
        <div class="content">
            <AppMenu />
            <AppMenuDaisy />
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppMenu from '~~/components/AppMenu.vue'
import AppFooter from '~~/components/AppFooter.vue'
import AppMenuDaisy from '~~/components/AppMenuDaisy.vue'
export default {
    components: { AppMenu, AppFooter, AppMenuDaisy },
}
</script>

<style></style>
