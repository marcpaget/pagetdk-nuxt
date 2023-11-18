<template>
  <div />
</template>
<!-- <template>
    <div class="card md:flex md:justify-content-center">
        <Galleria
            :value="images"
            :responsive-options="responsiveOptions"
            :num-visible="5"
            container-style="max-width: 640px"
        >
                <img :src="https://ik.imagekit.io/paget/3" />
      
                <img :src="https://ik.imagekit.io/paget/1" />
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PhotoService } from '@/service/PhotoService'

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data))
})

const images = ref()
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4,
    },
    {
        breakpoint: '767px',
        numVisible: 3,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
    },
])
</script> -->
