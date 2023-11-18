<script setup>
//const { session, refresh, update, reset } = await useSession();
const search = ref('peru')
const input = ref('')
const background = ref('')
// const { data: city, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=4c18f36d4332129c1554f3328b881e0a`);
//const countryList = ref(["peru", "denmark", "sweden"]);
//console.log(countryList);
//console.log(session.value);
const { data: country, error } = useAsyncData(
    'country',
    async () => {
        const response = await $fetch(`https://restcountries.com/v3.1/name/${search.value}`)
        // const temp = response.main.temp;
        return response
    },
    {
        watch: [search],
    }
)
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <div class="overlay absolute top-0 h-full w-full" />
    <div class="absolute top-0 h-full w-full p-48">
      <div class="flex justify-around">
        <div>
          <img
            :src="country[0].flags.png"
            class="icon w-56"
          >
          <div>
            <p class="text-2xl font-extralight text-white">
              {{ country[0].region }}
            </p>
            <div>
              <p class="text-2xl font-extralight text-white">
                {{ country[0].name.official }}
              </p>
              <div>
                <button class="btn-xs btn sm:btn-sm md:btn-md lg:btn-lg">
                  Tryk
                </button>
              </div>
            </div>
          </div>
        </div>
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
