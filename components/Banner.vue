<script setup>
  import { InfiniteCarousel, Slide } from 'infinite-carousel-vue'
  import banner_1 from 'assets/images/banner_1.jpg'
  import banner_2 from 'assets/images/banner_2.jpg'

  const slides = [
    banner_1,
    banner_2
  ]
</script>
<template>
  <div class="app-banner">
    <InfiniteCarousel
      autoplay
      interval="1000"
    >
      <Slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide" />
      </Slide>
    </InfiniteCarousel>
  </div>
</template>

<style lang="scss">
.app-banner {
  overflow: hidden;
  margin-bottom: 0.75rem;
  padding: .7rem max(1.5rem, min(5%, 4rem));
  max-width: 2080px;
  .t-carousel-viewport {
    aspect-ratio: 25 / 9 !important;
  }
}
</style>