<template>
  <form action="">
    <product-brand v-for="b in brands" :key="b.id" :brand="b"></product-brand>
  </form>
</template>
<script>
  import ProductBrand from './ProductBrand.vue'
  export default{
    name: 'product-brand-list',
    props: ['brands'],
    components: {
      ProductBrand
    }
  }
</script>
