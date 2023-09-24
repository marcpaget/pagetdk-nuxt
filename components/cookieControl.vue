<template>
    <CookieControl>
        <template #bar>
            <h3>Bar title</h3>
            <p>Bar description (you can use $cookies.text.barDescription)</p>
            <n-link>Go somewhere</n-link>
        </template>
    </CookieControl>
</template>

<script setup lang="ts">
const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, isModalActive, moduleOptions } = useCookieControl()

// example: react to a cookie being accepted
watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
        if (!previous?.includes('google-analytics') && current?.includes('google-analytics')) {
            // cookie with id `google-analytics` got added
            window.location.reload() // placeholder for your custom change handler
        }
    },
    { deep: true }
)
</script>
