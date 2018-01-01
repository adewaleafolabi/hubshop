<template>
  <ul class="CTAs list-inline">
    <li class="list-inline-item" v-if="isAdding"><a href="#"  @click.stop="addToCart" class="btn btn-template wide"> <i
      class="icon-cart"></i>Add to Cart</a></li>
    <li class="list-inline-item" v-else=""><a href="#" @click.stop="removeFromCart(product.id)" class="btn btn-danger btn-template wide"> <i
      class="fa fa-trash"></i>Remove from Cart</a></li>
  </ul>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT
  } from '../store/mutation-types'
  export default {
    name: 'product-button-pill',
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }
    },
    methods: {
      addToCart () {
        this.$set(this.product, 'cartQty', 1)
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      },
      setProduct () {
        this.$store.commit(SET_PRODUCT, this.product)
      }
    }
  }
</script>
