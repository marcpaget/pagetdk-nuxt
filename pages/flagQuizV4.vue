<template>
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
            ! FIX: Add optional timer
            <div class="justify-center self-center">
                <img class="w-56 rounded-sm" :src="currentFlag" alt="Flag to guess" />
            </div>
            <div class="mt-4 flex min-w-max max-w-lg flex-col rounded-md shadow-sm">
                ! FIX: Add a button to start the quiz
                <button
                    v-for="(option, index) in options"
                    :key="index"
                    class="mt-2 items-center justify-center gap-2 border bg-slate-500 px-4 py-3 align-middle text-xl text-white transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800"
                    @click="checkAnswer(option)"
                >
                    {{ option }}
                    <!--
                copilot change color of button to green if answer is correct and red if answer incorrect


            
            
            
            -->
                </button>
            </div>
        </div>
    </div>
</template>

<!-- 
TODO: Add a button to start the quiz 
todo: Add a button to restart the quiz 
TODO: Add option to set game length
TODO: Show correct and wrong answers at the end of the game
TODO: Set difficulty level and region
TODO: Add option to show hints (results in a lower score)
TODO: login option that saves high scores
TODO: Add a timer
TODO: Save states (in local storage?)
TODO: Add form to enter player name
TODO: add option for multiple players
 -->

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
            score: 0,
            wrong: 0,
            number: 10,
            remaining: 10,
        }
    },
    mounted() {
        this.fetchCountries()
    },
    methods: {
        async fetchCountries() {
            try {
                // ! FIX: Add option to set difficulty level and region
                // ! FIX: Add option to show hints (results in a lower score)
                // ! FIX: Implement login option that saves high scores
                // ! FIX: Add a timer
                // ! FIX: Implement form to enter player name
                // ! FIX: Add option for multiple players
                // FIX: Add option to set game length
                // FIX: Show correct and wrong answers at the end of the game
                // FIX: Add a button to restart the quiz
                // FIX: Add a button to start the quiz
                //FIX : Save states (in local storage?)
                // Implement apiparty

                //copilot how do i change color of button to green if answer is correct and red if answer incorrect

                const res = await useFetch('https://restcountries.com/v2/all', 'no-cors')
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
        checkAnswer(option) {
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
