<template>
    <div class="min-w-max max-w-lg">
        <span class="text-4xl text-sky-600 text-center mb-4">Score</span>
        <p class="text-2xl text-green-600 text-center mb-4">Correct: {{ score }}</p>
        <p class="text-2xl text-red-600 text-center mb-4">Wrong: {{ wrong }}</p>
        <button @click="totalQuestions = 0">Play Again</button>
        <!-- <StartQuizComponent />
        <EndQuizComponent :score="score" :wrong="wrong" />
        <button @click="showGame = !showGame">Switch</button> -->
        <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
    </div>
</template>

<!-- Pass props fra MainQuizComponent -->
<!-- Lav lækre transitions og tsparticle sconfetti -->

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

// See tsParticles documentation for all available options
const options = {
    fullScreen: {
        zIndex: 1,
    },
    particles: {
        number: {
            value: 0,
        },
        color: {
            value: ['#00FFFC', '#FC00FF', '#fffc00'],
        },
        shape: {
            type: ['circle', 'square'],
            options: {},
        },
        opacity: {
            animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: 'max',
                count: 1,
                destroy: 'min',
            },
            value: {
                min: 0,
                max: 0.5,
            },
        },
        size: {
            value: {
                min: 2,
                max: 4,
            },
        },
        links: {
            enable: false,
        },
        life: {
            duration: {
                sync: true,
                value: 5,
            },
            count: 1,
        },
        move: {
            enable: true,
            gravity: {
                enable: true,
                acceleration: 10,
            },
            speed: {
                min: 10,
                max: 20,
            },
            decay: 0.1,
            direction: 'none',
            straight: false,
            outModes: {
                default: 'destroy',
                top: 'none',
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: 'random',
            move: true,
            animation: {
                enable: true,
                speed: 60,
            },
        },
        tilt: {
            direction: 'random',
            enable: true,
            move: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 60,
            },
        },
        roll: {
            darken: {
                enable: true,
                value: 25,
            },
            enable: true,
            speed: {
                min: 15,
                max: 25,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
                min: -15,
                max: 15,
            },
        },
    },
    emitters: {
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.4,
        },
        rate: {
            delay: 0.1,
            quantity: 150,
        },
        size: {
            width: 0,
            height: 0,
        },
    },
}

const onLoad = (container: Container) => {
    // Do something with the container
    setTimeout(() => container.play(), 2000)
    // play confetti for 5 seconds then stop
    setTimeout(() => container.stop(), 5000)
}
</script>
