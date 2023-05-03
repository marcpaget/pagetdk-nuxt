<script setup>
const showCountry = await useFetchCountries()
</script>

<template>
    <div>
        <p>{{ showCountry.officialName }}</p>
    </div>
</template>
