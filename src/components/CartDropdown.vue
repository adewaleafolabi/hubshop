<template>
  <div class="cart dropdown show">
    <a id="cartdetails" href="#" data-toggle="dropdown"
       aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
      class="icon-cart"></i>
      <div class="cart-no">{{cart.length}}</div>
    </a><a href="#" class="text-primary view-cart">View Cart</a>
    <div aria-labelledby="cartdetails" class="dropdown-menu">
      <!-- cart item-->
      <div class="dropdown-item cart-product" v-for="p in cart5">
        <div class="d-flex align-items-center">
          <div class="img"><img :src="p.images[0]" alt="" class="img-fluid"></div>
          <div class="details d-flex justify-content-between">
            <div class="text"><a href="#"><strong>{{p.name}}</strong></a>
              <small>Quantity: {{p.cartQty}} </small>
              <span class="price">&#8358;{{p.price}} </span></div>
            <div class="delete"><i class="fa fa-trash-o" @click="removeFromCart(p.id)"></i></div>
          </div>
        </div>
      </div>
      <!-- total price-->
      <div class="dropdown-item total-price d-flex justify-content-between"><span>Total</span><strong
        class="text-primary">&#8358;{{total}}</strong></div>
      <!-- call to actions-->
      <div class="dropdown-item CTA d-flex"><router-link to="/cart"
                                                         class="btn btn-template wide">View Cart</router-link><a
        href="#" class="btn btn-template wide">Checkout</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    REMOVE_FROM_CART
  } from '../store/mutation-types'
  export default {
    name: 'cart-drop-down',
    computed: {
      cart () {
        return this.$store.getters.cart
      },
      cart5 () {
        return this.cart.slice(0, 5)
      },
      total () {
        return this.cart.map(k => k.cartQty * parseFloat(k.price)).reduce((a, b) => a + b, 0)
      }
    },
    methods: {
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      }
    }
  }
</script>
