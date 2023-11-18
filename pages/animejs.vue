<!-- layout.vue | page.vue | component.vue -->

<template>
  <div>
    <h1 class="title">
      Nuxt Anime
    </h1>
    <span class="css">CSSs</span>
    <span class="js">Javascript</span>
    <svg
      id="visual"
      viewBox="0 0 448 512"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <rect
        x="0"
        y="0"
        width="900"
        height="600"
        fill="#FF0066"
      />
      <g transform="translate(423.67573178041187 316.84739011456736)">
        <path
          d="M149 -142C199 -99 249.5 -49.5 243 -6.5C236.5 36.5 173.1 73.1 123.1 112.4C73.1 151.7 36.5 193.9 0.6 193.3C-35.4 192.7 -70.7 149.4 -105.4 110C-140 70.7 -174 35.4 -186 -12C-198.1 -59.4 -188.1 -118.8 -153.5 -161.8C-118.8 -204.8 -59.4 -231.4 -4.9 -226.4C49.5 -221.5 99 -185 149 -142"
          fill="none"
          stroke="#BB004B"
          stroke-width="6"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
    $anime({
        targets: '.css',
        translateX: 250,
        rotate: 180,
        borderRadius: ['0%', '50%'],
        duration: 800,
    })
})
</script>
