<script setup lang="ts">
const { page } = useContent()
</script>

<template>
    <PageToc />
    <ContentRenderer :key="page._id" :value="page" />
</template>
