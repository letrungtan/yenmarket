<template>
  <div class="border border-[#dee2e6] rounded p-3 shadow hover:shadow-lg transition cursor-pointer">
    <div class="overflow-hidden">
      <NuxtImg :src="product.image" loading="lazy" class="w-full h-40 object-cover mb-2 transition-transform duration-500 hover:scale-115"/>
    </div>
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-red-500 text-sm"><b>{{ formatPrice(product.price) }}</b> / {{ product.unit }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})

function formatPrice(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
</script>