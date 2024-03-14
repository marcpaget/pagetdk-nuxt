<template>
    <div class="flex flex-col">
        <span class="text-4xl text-sky-600 text-center mb-4 mt-4">Guess the country</span>

        <div
            class="bg-slate-300 dark:bg-slate-100 mt-8 rounded-md justify-center self-center shadow-md shadow-slate-500 dark:shadow-slate-50 outline outline-1 box-border p-8 border-8"
        >
            <div class="min-w-max max-w-lg">
                <span class="text-4xl text-sky-600 text-center mb-4">Score</span>

                <p class="text-2xl text-green-600 text-center mb-4">Correct: {{ score }}</p>
                <p class="text-2xl text-red-600 text-center mb-4">Wrong: {{ wrong }}</p>
            </div>
            ! FIX: Add optional timer
            <div class="justify-center self-center">
                <img class="rounded-sm w-56" :src="currentFlag" alt="Flag to guess" />
            </div>
            <div class="min-w-max max-w-lg flex flex-col rounded-md shadow-sm mt-4">
                ! FIX: Add a button to start the quiz
                <button
                    v-for="(option, index) in options"
                    :key="index"
                    class="py-3 px-4 mt-2 justify-center items-center gap-2 border text-white bg-slate-500 align-middle hover:bg-gray-50 transition-all text-xl dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
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
