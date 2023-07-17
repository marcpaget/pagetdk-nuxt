<!-- eslint-disable vue/require-v-for-key -->
<script>
definePageMeta({
    layout: 'defaultwithouthandw',
})
import axios from 'axios'

export default {
    data() {
        return {
            countries: [],
            currentFlag: {},
            choices: [],
            userAnswer: '',
            score: 0,
        }
    },
    async created() {
        // Fetch countries data from the API
        const response = await axios.get('https://restcountries.com/v2/all')
        this.countries = response.data
        this.setQuestion()
    },
    methods: {
        setQuestion() {
            // Randomly select a country from the list
            const randomIndex = Math.floor(Math.random() * this.countries.length)
            this.currentFlag = this.countries[randomIndex]

            // Create an array of 4 random choices
            this.choices = [this.currentFlag]
            while (this.choices.length < 4) {
                const randomChoice = this.countries[Math.floor(Math.random() * this.countries.length)]
                if (!this.choices.find((choice) => choice.name === randomChoice.name)) {
                    this.choices.push(randomChoice)
                }
            }
            this.shuffle(this.choices)
        },
        checkAnswer() {
            if (this.userAnswer === this.currentFlag.name) {
                this.score++
            }
        },
        nextQuestion() {
            this.userAnswer = ''
            this.setQuestion()
        },
        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
            }
        },
    },
}
</script>

<template>
    <div class="flex flex-col">
        <div class="mt-10 justify-center self-center bg-blue-300">
            <p class="text-4xl">Score: {{ score }}</p>

            <div>
                <img class="icon w-48 rounded-sm" :src="currentFlag.flag" />

                // eslint-disable-next-line vue/require-v-for-key
                <div v-for="choice in choices">
                    <button :value="choice.name" v-on="userAnswer" @click="checkAnswer" />
                    <label>{{ choice.name }}</label>
                </div>
                <button @click="nextQuestion">Next</button>
            </div>
        </div>
    </div>
</template>
