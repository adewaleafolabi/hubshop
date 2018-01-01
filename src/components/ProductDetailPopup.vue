<template>
  <div id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade overview">
    <div role="document" class="modal-dialog">
      <div class="modal-content">
        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true"><i
          class="icon-close"></i></span></button>
      </div>
      <div class="modal-body">
        <div class="ribbon-primary text-uppercase">Sale</div>
        <div class="row d-flex align-items-center">
          <div class="image col-lg-5"><img :src="product.imageOne" alt="..." class="img-fluid d-block"></div>
          <div class="details col-lg-7">
            <h2>{{product.name}}</h2>
            <ul class="price list-inline">
              <li class="list-inline-item current">&#8358;{{product.price}}</li>
            </ul>
            <p>{{product.description}}</p>
            <ul class="list-unstyled additional-information">
              <li class="d-flex justify-content-between" v-if="product.size"><strong>Size:</strong><span>{{product.size}}</span></li>
              <li class="d-flex justify-content-between" v-if="product.color"><strong>Color:</strong><span>{{product.color}}</span></li>
            </ul>
            <product-button-pill :product="product"></product-button-pill>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductButtonPill from './ProductButtonPill'
  export default {
    components: {ProductButtonPill},
    name: 'product-detail-popup',
    computed: {
      product () {
        return this.$store.getters.product
      }
    }
  }
</script>
<style scoped="">
  .additional-information{
    width: 30%
  }
</style>
