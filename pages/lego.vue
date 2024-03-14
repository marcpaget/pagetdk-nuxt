<template>
    <div class="flex flex-col mt-2">
        <p>LEGO</p>
        <p class="text-2xl font-bold font-aptos">Søg efter Mocs du kan bygge med sætnr.:</p>
        <input type="text" class="border-2 border-gray-300 p-2 rounded-lg" />
        <button class="bg-blue-500 text-white p-2 rounded-lg">Søg</button>
        <!-- Søgefelt til setnr.
        section v-if som fjerner søgefelt og viser resultaterne af moc søgning -->
        <div class="grid grid-cols-3 gap-4">
            <div v-for="lego in res.results" :key="lego.id" class="bg-gray-100 p-4 rounded-lg">
                <NuxtLink :to="lego.moc_url" class="text-xl font-bold font-aptos">{{ lego.name }}</NuxtLink>
                <NuxtImg :src="lego.moc_img_url" :alt="lego.name" class="h-8 w-8" />
            </div>
        </div>
    </div>
</template>
<script setup>
// create a usefetch function for this url   https://rebrickable.com/api/v3/lego/colors/ and add authorization headern and  fetch the data and display it in the template
const useFetch = async (url) => {
    const response = await fetch(url, {
        headers: {
            Authorization: 'key 291ae5a12dd20f27add548fa804eab87',
        },
    })
    const data = await response.json()
    return data
}
const searchItem = '21042'
const res = await useFetch(`https://rebrickable.com/api/v3/lego/sets/${searchItem}-1/alternates/`)
console.log(res)
</script>
