<script setup lang="ts">
const { scrollToTop } = useAnchorScroll({
    scrollOptions: {
        behavior: 'smooth',
        offsetTop: 0,
    },
})
</script>

<template>
    <div class="linked" fixed bottom-10 right-10 border="~ solid rounded" bg-white p-2 @click="scrollToTop">Go up</div>
</template>
