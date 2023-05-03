// const { data: city, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=4c18f36d4332129c1554f3328b881e0a`);
//const countryList = ref(["peru", "denmark", "sweden"]);
//console.log(countryList);
//console.log(session.value);
//const search = ref('peru')
export default async (country) => {
    const { data, error } = await useFetch(`https://restcountries.com/v3.1/name/peru`)

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: error.value.statusText,
        })
    }
    return data
}
