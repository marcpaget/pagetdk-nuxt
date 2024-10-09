<template>

</template>


<script setup>
import { ref, computed } from 'vue'
import { useRestCountriesApiData } from '../composables/useRestCountriesApiData'

   async fetchCountries() {
      try {
        const res = await useRestCountriesApiData('v2/all/')
        this.countries = res.data
        console.log(this.countries)
      }
      catch (error) {
        console.error(error)
      }
    },
</script>