<template>
    <div class="flex justify-center">
        <div class="basis-5/12 place-content-center">
            <!-- This page correctly has only one single root element -->
            <h1 class="font-permanentmarker text-kaldi py-4 text-4xl">The Coldest Sunset</h1>
            <p class="text-xl font-quicksand text-gray-400 pt-2 pb-6 leading-relaxed tracking-tight">
                Irure deserunt reprehenderit non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu
                id laborum enim ea. Pariatur fugiat exercitation amet. Non proident commodo exercitation aute
                adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu labore duis duis anim esse proident
                eiusmod aute officia ut minim ea ad. Irure deserunt reprehenderit non ad nostrud commodo adipisicing
                enim adipisicing laborum elit ipsum. Eu id laborum enim ea. Pariatur fugiat exercitation amet. Non
                proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu
                labore duis duis anim esse proident eiusmod aute officia ut minim ea ad. Irure deserunt reprehenderit
                non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu id laborum enim ea. Pariatur
                fugiat exercitation amet. Non proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat
                sunt exercitation ea. Aute eu labore duis duis anim esse proident eiusmod aute officia ut minim ea ad.
                Irure deserunt reprehenderit non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu
                id laborum enim ea. Pariatur fugiat exercitation amet. Non proident commodo exercitation aute
                adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu labore duis duis anim esse proident
                eiusmod aute officia ut minim ea ad.
            </p>
            <!-- <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
        </select> -->
            <h1 ref="anim" class="text-4xl pb-8 text-green-500 font-permanentmarker">Irure deserunt reprehenderit</h1>
            <p class="font-quicksand tracking-normal leading-loose text-xl">
                Irure deserunt reprehenderit non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu
                id laborum enim ea. Pariatur fugiat exercitation amet. Non proident commodo exercitation aute
                adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu labore duis duis anim esse proident
                eiusmod aute officia ut minim ea ad. Irure deserunt reprehenderit non ad nostrud commodo adipisicing
                enim adipisicing laborum elit ipsum. Eu id laborum enim ea. Pariatur fugiat exercitation amet. Non
                proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu
                labore duis duis anim esse proident eiusmod aute officia ut minim ea ad.
            </p>
            <!-- <transition-fade appear>
            <div v-if="isVisible">...</div> -->

            <h2 class="text-4xl font-permanentmarker text-kaldi pt-14 pb-7">
                adipisicing enim adipisicing laborum elit ipsum. Eu id laborum enim ea.
            </h2>
            <p class="text-xl pt-5 pb-6">
                Non proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute
                eu labore duis duis anim esse proident eiusmod aute officia ut minim ea ad. Irure deserunt reprehenderit
                non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu id laborum enim ea. Pariatur
                fugiat exercitation amet. Non proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat
                sunt exercitation ea. Aute eu labore duis duis anim esse proident eiusmod aute officia ut minim ea ad.
                Irure deserunt reprehenderit non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu
                id laborum enim ea. Pariatur fugiat exercitation amet. Non proident commodo exercitation aute
                adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu labore duis duis anim esse proident
                eiusmod aute officia ut minim ea ad.
            </p>
            <!-- </transition-fade> -->
            <h2 class="text-4xl font-permanentmarker text-kaldi pt-14 pb-7">
                adipisicing enim adipisicing laborum elit ipsum. Eu id laborum enim ea.
            </h2>
            <p ref="anim2" class="text-xl pt-5 pb-6">
                Non proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute
                eu labore duis duis anim esse proident eiusmod aute officia ut minim ea ad. Irure deserunt reprehenderit
                non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu id laborum enim ea. Pariatur
                fugiat exercitation amet. Non proident commodo exercitation aute adipisicing eu ipsum. Tempor occaecat
                sunt exercitation ea. Aute eu labore duis duis anim esse proident eiusmod aute officia ut minim ea ad.
                Irure deserunt reprehenderit non ad nostrud commodo adipisicing enim adipisicing laborum elit ipsum. Eu
                id laborum enim ea. Pariatur fugiat exercitation amet. Non proident commodo exercitation aute
                adipisicing eu ipsum. Tempor occaecat sunt exercitation ea. Aute eu labore duis duis anim esse proident
                eiusmod aute officia ut minim ea ad.
            </p>
            <!-- <div ref="root">
            <p>Scroll me down!</p>
            <div v-intersection-observer="[onIntersectionObserver, { root }]">
                <p>Hello world!</p>
            </div>
        </div> -->
            <nuxt-img src="https://ik.imagekit.io/paget/2s" />
        </div>
    </div>
</template>

<!-- <script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script> -->

<!-- <script setup>
import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

const root = ref(null)

const isVisible = ref(false)

function onIntersectionObserver([{ isIntersecting }]) {
    isVisible.value = isIntersecting
}
</script> -->
