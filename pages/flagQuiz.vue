<template>
    <div>
        <img :src="currentFlag.flag" />
        <div v-for="(choice, index) in choices" :key="index">
            <input v-model="guess" type="radio" :value="choice.name" @change="checkAnswer" />
            {{ choice.name }}
        </div>
        <div v-if="result">
            <p v-if="isCorrect">Correct!</p>
            <p v-else>Incorrect! The correct answer was {{ currentFlag.name }}</p>
        </div>
        <button v-if="!result" @click="checkAnswer">Submit</button>
        <button v-if="result" @click="nextQuestion">Next</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            flags: [],
            currentFlag: {},
            choices: [],
            guess: '',
            result: false,
            isCorrect: false,
            score: 0,
        }
    },
    async created() {
        const response = await axios.get('https://restcountries.com/v2/all')
        this.flags = response.data
        this.nextQuestion()
    },
    methods: {
        async nextQuestion() {
            this.result = false
            this.guess = ''
            this.currentFlag = this.flags[Math.floor(Math.random() * this.flags.length)]
            this.choices = [
                this.currentFlag,
                ...this.flags.filter((flag) => flag.name !== this.currentFlag.name).slice(0, 3),
            ]
            this.choices.sort(() => Math.random() - 0.5)
        },
        checkAnswer() {
            if (this.guess === this.currentFlag.name) {
                this.isCorrect = true
                this.score++
            } else {
                this.isCorrect = false
            }
            this.result = true
        },
    },
}
</script>

<!-- <script setup>
//how to make array of all country codes
// eslint-disable-next-line prettier/prettier
const countryCodes = [
   'AF', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY',
'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA',
'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'CI', 'HR', 'CU', 'CY', 'CZ',
'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA',
'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK',
'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KR',
'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT',
'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'MM', 'NA', 'NR', 'NP', 'NL',
'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN',
'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'VC', 'VC', 'WS', 'SM', 'ST', 'SA',
'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH',
'SY', 'TW', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB',
'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VE', 'VN', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW']


// generate two random countries as incorrect answers
//let countryList;

// const { threecountries } = async () => {
// for(let i = 0; i < 3; i++) {
//    let randomCountry = Math.floor(Math.random() * countryCodes.length)
//    console.log('randomCountry', randomCountry)
//    let countryList = countryCodes[randomCountry]
//    console.log('countryList', countryList)
//    let url = 'https://restcountries.com/v3.1/alpha/' + countryList
//    const { data: country, error } = await useFetch(url)
//    if (error) {
//       console.error(error)
//       return
//    }
//    console.log(country)
// }
// }




const countries = () => {
const { data } = useFetch('https://restcountries.com/v3.1/all')
const randomCountries = [];
if(data){
 for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomCountries.push(data[randomIndex]);
    }
}
return {
  randomCountries
}
}

//let korrektLand = randomCountry

// create a function that fetches three random countries
//const { data: country } = await useFetch('https://restcountries.com/v3.1/alpha/' + randomCountry)

// const url = 'https://restcountries.com/v3.1/alpha/' + countryList
// const { data: country } = await useFetch(url)


//create function that  returns a random country and stores it in a variable called randomCountry
</script>

<template>
    <div class="flex flex-row justify-around">
        <div class="basis-1/8">
            <img class="rounded-sm w-56 icon" :src="country[0].flags.png" />
        </div>
        <div class="basis-1/8">
            <h2 class="text-3xl">Gæt landet</h2>
            <span class="text-xl">{{ country[0].name.official }}</span>
            
  <div>
    <div v-for="country in countries" :key="country.alpha3Code">
      {{ country.name }}
    </div>
  </div>

        </div>
    </div>
</template> -->
