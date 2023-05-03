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
    <div class="h-screen relative overflow-hidden">
        <img />
        {{ search }}
        <div class="absolute w-full h-full top-0 overlay" />
        <div class="absolute w-full h-full top-0 p-48">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-7xl text-white">{{ city.name }}</h1>
                    <p class="font-extralight text-2xl mt-2 text-white">Sunday</p>
                    <img :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" class="w-56 icon" />
                </div>
                <div>
                    <p class="text-9xl text-white font-extralight">{{ city.main.temp }}°</p>
                </div>
            </div>
            <div class="mt-20">
                <input v-model="input" type="text" class="w-1/2 h-10" placeholder="Search weather for a city" />
                <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">Search</button>
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
