<template>
    <div>
        <!-- <form>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="fr">fr</option>
            </select>
            <p>{{ $t('welcome') }}</p>
        </form> -->
        <h1 class="title">Nuxt Anime</h1>
        <h1 class="css-text">CSS</h1>
    </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 1200 })
    $anime({
        targets: '.css-text',
        translateX: 20,
        duration: 800,
    })
})
// import {AppHeader} from "~~/components/AppHeader.vue"
// export default {
//   components: {
//     AppHeader
//   },
// }
//const { locale } = useI18n()
definePageMeta({
    middleware: ['auth'],
    layout: 'article',
})
</script>
