<template>
    <prismic-image :field="document.data.example_image" />
</template>

<script setup>
const { client } = usePrismic()
const { data: home } = await useAsyncData('home', () => client.getByUID('page', 'home'))
</script>

<script>
export default {}
</script>
