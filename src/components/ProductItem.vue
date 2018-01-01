<template>
  <div class="item col-xl-4 col-md-6">
    <div class="product is-gray">
      <div class="image d-flex align-items-center justify-content-center">
        <div class="ribbon ribbon-primary text-uppercase" v-if="product.state">{{product.state}}</div>
        <img :src="product.images[0]" alt="product" class="img-fluid">
        <div class="hover-overlay d-flex align-items-center justify-content-center">
          <product-button :product="product"></product-button>
        </div>
      </div>
      <div class="title">
        <small class="text-muted">{{product.categoryName}}</small>
        <router-link :to="'/details/'+product.id">
          <h3 class="h6 text-uppercase no-margin-bottom">{{product.name}}</h3></router-link><span
        class="price text-muted">&#8358;{{product.price}}</span></div>
    </div>
  </div>


</template>
<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    data () {
      return {
      }
    },
    components: {
      ProductButton
    }
  }
</script>

<style scoped="">
  img {
    max-height: 230px;
    min-height: 230px;
  }
</style>
