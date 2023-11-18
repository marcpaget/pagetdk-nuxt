<template>
  <div class="card flex justify-content-center">
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsive-options="responsiveOptions"
      :num-visible="7"
      container-style="max-width: 850px"
      :circular="true"
      :full-screen="true"
      :show-item-navigators="true"
      :show-thumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        >
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        >
      </template>
    </Galleria>

    <div
      v-if="images"
      class="grid"
      style="max-width: 400px"
    >
      <div
        v-for="(image, index) of images"
        :key="index"
        class="col-4"
      >
        <img
          :src="image.thumbnailImageSrc"
          :alt="image.alt"
          style="cursor: pointer"
          @click="imageClick(index)"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
    {
        itemImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/Marc_portr%C3%A6t_AROS_mty5kv.jpg',
        thumbnailImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/Marc_portr%C3%A6t_AROS_mty5kv.jpg',
        alt: 'Portrait',
    },
    {
        itemImageSrc: 'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/flower.webp',
        thumbnailImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/flower.webp',
        alt: 'Flower',
    },
    {
        itemImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/flower-cropped.webp',
        thumbnailImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/flower-cropped.webp',
        alt: 'Flower cropped',
    },
    {
        itemImageSrc: 'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/bird.jpeg',
        thumbnailImageSrc:
            'https://res.cloudinary.com/selfhostingninja/image/upload/v1684195448/pagetdk-nuxt/bird.jpeg',
        alt: 'Bird',
    },
]

const activeIndex = ref(0)
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5,
    },
    {
        breakpoint: '768px',
        numVisible: 3,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
    },
])
const displayCustom = ref(false)

const imageClick = (index) => {
    activeIndex.value = index
    displayCustom.value = true
}
</script>
