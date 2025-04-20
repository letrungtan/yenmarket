export const useProducts = () => {
    const products = ref([])
    const loading = ref(true)
    const error = ref(false)
  
    const fetchProducts = async () => {
      loading.value = true
      try {
        const res = await fetch('data/products.json')
        products.value = await res.json()
      } catch (err) {
        console.log('err', err)
        error.value = true
      } finally {
        loading.value = false
      }
    }
  
    onMounted(fetchProducts)
  
    return { products, loading, error }
  }