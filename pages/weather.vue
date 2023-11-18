<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup>
const search = ref('toronto')
const input = ref('')
// const { data: city, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=4c18f36d4332129c1554f3328b881e0a`);

const { data: city } = useAsyncData(
    'city',
    async () => {
        const response = await $fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=4c18f36d4332129c1554f3328b881e0a`
        )
        // const temp = response.main.temp;
        return response
    },
    {
        watch: [search],
    }
)

const handleClick = () => {
    const formattedSearch = input.value.trim().split(' ').join('+')
    search.value = formattedSearch
    input.value = ''
}
</script>

<template>
  {{ input }}
  <div class="relative h-screen overflow-hidden">
    <img>
    {{ search }}
    <div class="overlay absolute top-0 h-full w-full" />
    <div class="absolute top-0 h-full w-full p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">
            {{ city.name }}
          </h1>
          <p class="mt-2 text-2xl font-extralight text-white">
            Sunday
          </p>
          <img
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
            class="icon w-56"
          >
        </div>
        <div>
          <p class="text-9xl font-extralight text-white">
            {{ city.main.temp }}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input
          v-model="input"
          type="text"
          class="h-10 w-1/2"
          placeholder="Search weather for a city"
        >
        <button
          class="h-10 w-20 bg-sky-400 text-white"
          @click="handleClick"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
>
