<template>
    <div>
        <nuxt-img
            provider="cloudinary"
            src="/Marc_portr%C3%A6t_AROS_sqt5xo.jpg"
            alt=""
            width="400"
            height="400"
            :modifiers="{ roundCorner: 'max' }"
        />
        <p>test</p>
        <nuxt-img
            provider="cloudinary"
            src="/Marc_portr%C3%A6t_AROS_sqt5xo.jpg"
            alt=""
            width="200"
            height="200"
            :modifiers="{ roundCorner: 'max' }"
        />
    </div>
</template>

<script></script>
