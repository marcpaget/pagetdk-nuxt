<script setup lang="ts">
const supabase = useSupabaseClient()
const columns = ref([])
const { data: planter } = await supabase.from('frospiring').select()
</script>

<template>
    <div>
        <UTable :rows="planter" :columns="columns" />
    </div>
</template>
