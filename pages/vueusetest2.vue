<script>
import { useGeolocation } from '@vueuse/core'
const { coords, locatedAt, error, resume, pause } = useGeolocation()
</script>
<template>
    <UseGeolocation v-slot="{ coords: { latitude, longitude } }">
        Latitude: {{ latitude }} Longitude: {{ longitude }}
    </UseGeolocation>
</template>
