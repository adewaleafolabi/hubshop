<template>
  <div class="CTA d-flex align-items-center justify-content-center">
    <a href="#" @click="addToCart" class="add-to-cart" v-if="isAdding"><i class="fa fa-shopping-cart"></i></a>
    <a href="#" @click="removeFromCart(product.id)" class="add-to-cart" v-else><i class="fa fa-trash"></i></a>
    <router-link :to="'/details/'+product.id" class="visit-product active"><i class="icon-search"></i>View</router-link>
    <a href="#" @click="setProduct" data-toggle="modal" data-target="#exampleModal" class="quick-view"><i
      class="fa fa-arrows-alt"></i></a>
  </div>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT
  } from '../store/mutation-types'
  export default {
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
