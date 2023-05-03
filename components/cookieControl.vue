<!-- component.vue -->

<template>
    <CookieControl locale="en" />
</template>

<script setup lang="ts">
const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, isModalActive, moduleOptions } = useCookieControl()
</script>
