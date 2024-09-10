<template>
  <div class="card">
    <DataTable
      :value="frospiring"
      striped-rows
      table-style="min-width: 50rem"
    >
      <Column
        field="frospiring.planteart"
        header="Code"
      />
      <Column
        field="name"
        header="Name"
      />
      <Column
        field="category"
        header="Category"
      />
      <Column
        field="quantity"
        header="Quantity"
      />
    </DataTable>
  </div>
</template>
<!-- <script setup>
const supabase = useSupabaseClient()
const planterResponse = ref()
planterResponse.value = await supabase.from('frospiring').select()
</script> -->

<script setup>
const supabase = useSupabaseClient();
const frospiring = ref([]);
const { data, error } = await supabase.from('frospiring').select();
frospiring.value = data;
</script>
