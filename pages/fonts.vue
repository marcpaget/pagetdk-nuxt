<template>
  <main class="container">
    <article
      v-for="w in weights"
      :key="w.class"
      class="mb-5"
    >
      <h1 class="text-4xl">
        .{{ w.class }}
      </h1>
      <p
        class="text-3xl"
        :class="w.class"
      >
        ABCDEFGHIJKLMNOPRSTUVWXYZ
      </p>
      <p
        class="text-3xl"
        :class="w.class"
      >
        abcdefghijklmnopqrstuvwxyz
      </p>
      <p />
    </article>
    <p class="font-sans ...">
      The quick brown fox ...
    </p>
    <p class="font-serif ...">
      The quick brown fox ...
    </p>
    <p class="font-mono ...">
      The quick brown fox ...
    </p>
  </main>
</template>
<script>
export default {
    data: () => ({
        weights: [
            { class: 'font-hairline' },
            { class: 'font-thin' },
            { class: 'font-light' },
            { class: 'font-normal' },
            { class: 'font-medium' },
            { class: 'font-semibold' },
            { class: 'font-bold' },
            { class: 'font-extrabold' },
            { class: 'font-black' },
        ],
    }),
}
</script>
