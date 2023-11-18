<template>
  <div>
    <Splide
      :options="{ rewind: true }"
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img
          src="assets/images/IMG_8467.jpeg"
          alt="Sample 1"
        >
      </SplideSlide>
      <SplideSlide>
        <img
          src="assets/images/IMG_8472.jpeg"
          alt="Sample 2"
        >
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
