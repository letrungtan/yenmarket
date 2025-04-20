<template>
  <section class="app-product-section">
    <h2 class="teloadingxt-xl font-semibold mb-4">{{ title }}</h2>
    <div v-if="loading">Đang tải dữ liệu...</div>
    <div v-else-if="error">Lỗi khi tải dữ liệu</div>
    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  title: String,
  products: Array,
  loading: Boolean,
  error: Boolean,
})
</script>

<style lang="scss" scoped>
.app-product-section {
  margin: auto;
  padding: 0 max(1.5rem, min(5%, 4rem));
  max-width: 2080px;
  margin-bottom: 0.75rem;
}
</style>