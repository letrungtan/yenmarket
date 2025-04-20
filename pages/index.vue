<template>
  <div>
    <Header />
    <Navigation />
    <Banner />
    <div class="mb-6">
      <ProductSection 
        title="Fish and Seafood" 
        :products="fishProducts" 
        :loading
        :error
      />
      <ProductSection 
        title="Frozen Meat" 
        :products="frozenMeat" 
        :loading
        :error
      />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import ProductSection from '@/components/ProductSection.vue'
import Footer from '@/components/Footer.vue'

useHead({
  title: 'Trang chủ - Yen Market',
  meta: [
    { name: 'description', content: 'Siêu thị nhập khẩu Tiêu Chuẩn Nhật Bản' }
  ]
});

const { products, loading, error } = useProducts();
const fishProducts = computed(() => products.value.fish || [])
const frozenMeat = computed(() => products.value.frozen || [])

</script>