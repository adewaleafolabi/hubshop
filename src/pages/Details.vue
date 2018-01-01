<template>
  <div>
    <product-detail :product="product"></product-detail>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import ProductDetail from '../components/ProductDetail'
  import AppFooter from '../components/Footer'
  export default{
    created () {
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      AppFooter,
      ProductDetail
    },
    name: 'details'
  }
</script>
