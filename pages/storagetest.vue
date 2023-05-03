<script setup>
const { supabase } = useSupabaseClient()
// storage.value = await supabase.storage.getBucket("nextjs-gallery-images");

// imagestorage.value = await supabase.storage.from('nextjs-gallery-images').list('restaurantimages'); // path to the image in the bucket

// create function to retreive the publicurl from supabase
//create async funtion that returns the public url
const getPublicUrl = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('imagefolder/IMG_6731.jpeg')
    return data
}

// const { data, error } = await supabase
//   .storage
//   .from('images')
//   .list('imagefolder', {
//     limit: 100,
//     offset: 0,
//     sortBy: { column: 'name', order: 'asc' },
//   })
</script>

<template>
    <div>
        <h1>Hej</h1>
        <p>
            {{ getPublicUrl.name }}
        </p>
    </div>
</template>
