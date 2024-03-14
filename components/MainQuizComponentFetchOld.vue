<template>
    <div class="flex flex-col mt-2">
        <div class="card w-96 bg-base-100 shadow-xl justify-center self-center">
            <span class="text-2xl text-sky-600 text-center m-2">Guess the country</span>
            <section v-if="totalQuestions">
                <progress class="place-content-center progress progress-primary" :value="totalQuestions" :max="10" />
                <div class="flex flex-col">
                    <div class="basis-1/2 justify-center self-center text-center">
                        <span class="text-4xl text-sky-600 justify-center self-center text-center mb-4">Score</span>
                    </div>
                </div>
                <!-- TODO: Difficulty levels hardcoded or based on countrys size or region/continent -->
                <div class="flex flex-row justify-center">
                    <div class="basis-1/2">
                        <p class="text-2xl text-green-600 text-center mb-2">{{ score }}</p>
                        <p class="text-xl text-green-600 text-center mb-2">Correct</p>
                    </div>
                    <div class="basis-1/2">
                        <p class="text-2xl text-red-600 text-center mb-2">{{ wrong }}</p>
                        <p class="text-xl text-red-600 text-center mb-2">Wrong</p>
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <figure class="px-10 pt-10">
                        <img :src="currentFlag" alt="Flag" class="rounded-xl" />
                    </figure>

                    <div class="card-actions">
                        <div class="min-w-max max-w-lg flex flex-col rounded-md shadow-sm mt-4">
                            <label
                                v-for="(option, index) in options"
                                :key="index"
                                class="btn btn-primary py-3 px-4 mt-2 justify-center items-center gap-2 border align-middle"
                                @click="checkAnswer(option)"
                            >
                                {{ option }}

                                <!-- Brug denne guide https://masteringnuxt.com/blog/building-a-quiz-app-powered-by-nuxt-content -->
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const remaining = ref(10)
const score = ref(0)
const wrong = ref(0)
const totalQuestions = ref(0)
const currentFlag = ref('')
const options = ref([])
const correctAnswer = ref('')
const countries = ref([])
const isLoading = ref(false)
const gameFinished = ref(false)

const fetchCountries = async () => {
    isLoading.value = true
    try {
        const res = await fetch('https://restcountries.com/v2/all')
        if (res.ok) {
            // Check response status
            countries.value = await res.json()
            getRandomFlag()
        } else {
            throw new Error('Could not fetch countries')
        }
    } catch (error) {
        console.error(error)
        // Display an error message to the user here
    } finally {
        isLoading.value = false
    }
}

const getRandomFlag = () => {
    const randomIndex = Math.floor(Math.random() * countries.value.length)
    currentFlag.value = countries.value[randomIndex].flag
    correctAnswer.value = countries.value[randomIndex].name
    options.value = getRandomOptions(correctAnswer.value)
}

const getRandomOptions = (correctAnswer) => {
    let optionsArr = [correctAnswer]
    while (optionsArr.length < 4) {
        const randomIndex = Math.floor(Math.random() * countries.value.length)
        const option = countries.value[randomIndex].name
        if (!optionsArr.includes(option)) {
            optionsArr.push(option)
        }
    }
    optionsArr.sort(() => Math.random() - 0.5)
    return optionsArr
}

const checkAnswer = (option) => {
    totalQuestions.value++
    if (option === correctAnswer.value) {
        score.value++
    } else {
        wrong.value++
    }
    getRandomFlag()
}

const resetGame = () => {
    // Reset all variables to initial states
    remaining.value = 10
    score.value = 0
    wrong.value = 0
    totalQuestions.value = 0
    gameFinished.value = false
    getRandomFlag()
}

onMounted(() => {
    fetchCountries()
})
</script>
