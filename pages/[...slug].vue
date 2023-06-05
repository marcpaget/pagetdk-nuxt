<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'

const activeTocId = ref(null)
const nuxtContent = ref(null)

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
    root: nuxtContent.value,
    threshold: 0.5,
})

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id')
            if (entry.isIntersecting) {
                activeTocId.value = id
            }
        })
    }, observerOptions)

    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
        observer.value?.observe(section)
    })
})

onUnmounted(() => {
    observer.value?.disconnect()
})
</script>

<template>
    <main class="flex flex-col gap-4 p-4">
        <ContentDoc>
            <template #default="{ doc }">
                <div class="grid grid-cols-12 gap-8">
                    <div class="nuxt-content col-span-8">
                        <ContentRenderer ref="nuxtContent" :value="doc" />
                    </div>
                    <div class="col-span-4 rounded-md border p-4">
                        <div class="sticky top-0 flex flex-col items-center">
                            <TableOfContents :active-toc-id="activeTocId" />
                        </div>
                    </div>
                </div>
            </template>
        </ContentDoc>
    </main>
</template>
