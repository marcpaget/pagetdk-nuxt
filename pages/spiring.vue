<template>
  <div class="overflow-x-auto content-center">
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>Navn</th>
          <th>Min. spiretemp</th>
          <th>Max. spiretemp</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="planter in frospiring"
          :key="planter.id"
        >
          <td>{{ planter.planteart }}</td>
          <td>{{ planter.min_spire_temp }}</td>
          <td>{{ planter.max_spire_temp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- <script setup>
const supabase = useSupabaseClient()
const planterResponse = ref()
planterResponse.value = await supabase.from('frospiring').select()
</script> -->

<script setup>
const supabase = useSupabaseClient()
const frospiring = ref([])
const { data, error } = await supabase.from('frospiring').select()
frospiring.value = data
</script>
