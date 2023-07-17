<template>
    <section v-if="remaining > 0">
        <div class="flex flex-col">
            <span class="mb-4 mt-4 text-center text-4xl text-sky-600">Guess the country</span>

            <div
                class="mt-8 box-border justify-center self-center rounded-md border-8 bg-slate-300 p-8 shadow-md shadow-slate-500 outline outline-1 dark:bg-slate-100 dark:shadow-slate-50"
            >
                <div class="min-w-max max-w-lg">
                    <span class="mb-4 text-center text-4xl text-sky-600">Score</span>

                    <p class="mb-4 text-center text-2xl text-green-600">Correct: {{ score }}</p>
                    <p class="mb-4 text-center text-2xl text-red-600">Wrong: {{ wrong }}</p>
                </div>

                <div class="justify-center self-center">
                    <img class="w-56 rounded-sm" :src="currentFlag" alt="Flag to guess" />
                </div>
                <div class="mt-4 flex min-w-max max-w-lg flex-col rounded-md shadow-sm">
                    <label
                        v-for="(option, index) in options"
                        :key="index"
                        :class="`option ${
                            options.selected == index ? (index == options.correctAnswer ? 'correct' : 'wrong') : ''
                        } ${options.selected != null && index != options.selected ? 'disabled' : ''}`"
                    >
                        class="py-3 px-4 mt-2 justify-center items-center gap-2 border text-white bg-slate-500
                        align-middle hover:bg-gray-50 transition-all text-xl dark:bg-gray-800 dark:hover:bg-slate-800
                        dark:border-gray-700 dark:text-gray-400" @click="checkAnswer(option)" >
                        {{ option }}
                        <input
                            v-model="options.selected"
                            type="radio"
                            :name="options.index"
                            :value="index"
                            :disabled="options.selected"
                            @change="checkAnswer(option)"
                        />
                        <!-- v-show="index != null"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        @click="getRandomFlag()"
                    >
                        Next question -->
                    </label>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <div class="flex flex-col">
            <span class="mb-4 mt-4 text-center text-4xl text-sky-600">Game over</span>
            <div
                class="mt-8 box-border justify-center self-center rounded-md border-8 bg-slate-300 p-8 shadow-md shadow-slate-500 outline outline-1 dark:bg-slate-100 dark:shadow-slate-50"
            >
                <div class="min-w-max max-w-lg">
                    <span class="mb-4 text-center text-4xl text-sky-600">Score</span>

                    <p class="mb-4 text-center text-2xl text-green-600">Correct: {{ score }}</p>
                    <p class="mb-4 text-center text-2xl text-red-600">Wrong: {{ wrong }}</p>
                    <button @click="startQuiz">Play Again</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
definePageMeta({
    layout: 'defaultwithouthandw',
})

export default {
    data() {
        return {
            countries: [],
            options: [],
            currentFlag: '',
            correctAnswer: '',
            wrong: 0,
            score: 0,
            remaining: 10,
        }
    },
    mounted() {
        this.fetchCountries()
    },
    methods: {
        async fetchCountries() {
            try {
                const res = await useFetch('https://restcountries.com/v2/all', 'no-cors')
                this.countries = res.data
                this.startQuiz()
            } catch (error) {
                console.error(error)
            }
        },
        startQuiz() {
            this.wrong = 0
            this.score = 0
            this.remaining = 10
            this.getRandomFlag()
        },
        getRandomFlag() {
            const randomIndex = Math.floor(Math.random() * this.countries.length)
            this.currentFlag = this.countries[randomIndex].flag
            this.correctAnswer = this.countries[randomIndex].name.common
            this.options = this.getRandomOptions(this.correctAnswer)
        },
        getRandomOptions(correctAnswer) {
            let options = [correctAnswer]
            while (options.length < 4) {
                const randomIndex = Math.floor(Math.random() * this.countries.length)
                const option = this.countries[randomIndex].name.common
                if (!options.includes(option)) {
                    options.push(option)
                }
            }
            options.sort(() => Math.random() - 0.5)
            return options
        },
        checkAnswer(option) {
            this.remaining--
            if (option === this.correctAnswer) {
                this.score++
            } else {
                this.wrong++
            }
        },
    },
}
</script>
