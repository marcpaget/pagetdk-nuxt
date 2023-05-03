<template>
    <div>
        <!-- <form>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="fr">fr</option>
            </select>
            <p>{{ $t('welcome') }}</p>
        </form> -->
        <AppHeader />
    </div>
</template>

<script setup>
// import {AppHeader} from "~~/components/AppHeader.vue"
// export default {
//   components: {
//     AppHeader
//   },
// }
//const { locale } = useI18n()
definePageMeta({
    middleware: ['auth'],
    layout: 'default',
})
</script>
