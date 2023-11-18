<script setup lang="ts">
const supabase = useSupabaseClient()
//const { data: restaurant } = await useAsyncData('restaurant', async () => {const { data } = await client.from('restaurants').select('name, location').eq('name, Marcsjoint').single()
//return data
//})
//const {supabase} = useSupabase();
const restaurantsResponse = ref()
restaurantsResponse.value = await supabase.from('restaurants').select()
</script>

<template>
  <div v-if="restaurantsResponse.data">
    <div class="grid grid-cols-4 gap-1">
      <div
        v-for="restaurants in restaurantsResponse.data"
        :key="restaurants.id"
      >
        <div class="card card-compact w-96 bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              {{ restaurants.name }}
            </h2>
            <p>{{ restaurants.location }}</p>
            <div class="card-actions justify-end">
              <button class="btn">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
