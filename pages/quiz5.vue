<template>
    <div class="flex flex-col">
        <span class="text-4xl text-sky-600 text-center m-4">Guess the country</span>

        <div class="card w-96 bg-base-100 shadow-xl">
            <section v-if="totalQuestions < 10">
                <div class="card">
                    <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
                </div>

                <progress
                    class="mt-8 place-content-center progress progress-primary w-96"
                    :value="totalQuestions"
                    :max="10"
                />
                <div class="card-body items-center text-center">
                    <h2 class="card-title items-center text-center">Shoes!</h2>
                    <figure class="px-10 pt-10">
                        <img :src="currentFlag" alt="Shoes" class="rounded-xl" />
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
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="artboard-demo phone-1">
            <span class="text-4xl text-sky-600 text-center m-4">Guess the country</span>

            <div
                class="bg-slate-300 dark:bg-slate-100 mt-8 rounded-md justify-center self-center shadow-md shadow-slate-500 dark:shadow-slate-50 outline outline-1 box-border p-8 border-8"
            >
                <section v-if="totalQuestions < 10">
                    <progress
                        class="mt-8 place-content-center progress progress-primary w-56"
                        :value="totalQuestions"
                        :max="10"
                    />
                    <span class="text-4xl text-sky-600 text-center mb-4">Score</span>
                    <!-- TODO: Difficulty levels hardcoded or based on countrys size or region/continent -->
                    <p class="text-2xl text-green-600 text-center mb-4">Correct: {{ score }}</p>
                    <p class="text-2xl text-red-600 text-center mb-4">Wrong: {{ wrong }}</p>
                    <div class="min-w-max max-w-lg" />
                    <div class="justify-center self-center">
                        <img class="rounded-sm w-56" :src="currentFlag" alt="Flag to guess" />

                        <div class="min-w-max max-w-lg flex flex-col rounded-md shadow-sm mt-4">
                            <button
                                v-for="(option, index) in options"
                                :key="index"
                                class="py-3 px-4 mt-2 justify-center items-center gap-2 border text-white bg-slate-500 align-middle hover:bg-gray-50 transition-all text-xl dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
                                @click="checkAnswer(option)"
                            >
                                {{ option }}
                            </button>
                        </div>
                    </div>
                </section>
                <section v-else>
                    <div class="min-w-max max-w-lg">
                        <span class="text-4xl text-sky-600 text-center mb-4">Score</span>

                        <p class="text-2xl text-green-600 text-center mb-4">Correct: {{ score }}</p>
                        <p class="text-2xl text-red-600 text-center mb-4">Wrong: {{ wrong }}</p>
                        <button @click="totalQuestions = 0">Play Again</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [],
            options: [],
            currentFlag: '',
            correctAnswer: '',
            score: 0,
            wrong: 0,
            number: 10,
            remaining: 10,
            totalQuestions: 0,
            selected: '',
        }
    },
    mounted() {
        this.fetchCountries()
    },
    methods: {
        async fetchCountries() {
            try {
                const res = await useRestCountriesApiData('v2/all/')
                this.countries = res.data
                this.getRandomFlag()
            } catch (error) {
                console.error(error)
            }
        },
        setNumber(number) {
            this.number = number
            this.remaining = number
        },
        getRemaining() {
            return this.remaining
        },
        getRandomFlag() {
            const randomIndex = Math.floor(Math.random() * this.countries.length)
            this.currentFlag = this.countries[randomIndex].flag
            this.correctAnswer = this.countries[randomIndex].name
            this.options = this.getRandomOptions(this.correctAnswer)
        },
        getRandomOptions(correctAnswer) {
            let options = [correctAnswer]
            while (options.length < 4) {
                const randomIndex = Math.floor(Math.random() * this.countries.length)
                const option = this.countries[randomIndex].name
                if (!options.includes(option)) {
                    options.push(option)
                }
            }
            options.sort(() => Math.random() - 0.5)
            return options
        },
        selectedAnswer(option) {
            return option === this.correctAnswer
        },
        checkAnswer(option) {
            this.totalQuestions++
            if (option === this.correctAnswer) {
                this.score++
            } else {
                this.wrong++
            }

            this.getRandomFlag()
        },
    },
}
</script>
