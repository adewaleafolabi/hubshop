<template>
  <div>
    <app-header></app-header>
    <app-banner title="Shopping Cart" :subtitle="bannerSubTitle"></app-banner>
    <section class="shopping-cart">
      <div class="container">
        <div class="basket">
          <div class="basket-holder">
            <div class="basket-header">
              <div class="row">
                <div class="col-5">Product</div>
                <div class="col-2">Price</div>
                <div class="col-2">Quantity</div>
                <div class="col-2">Total</div>
                <div class="col-1 text-center">Remove</div>
              </div>
            </div>
            <div class="basket-body">
              <!-- Product-->
              <div class="item" v-for="p in cart" :key="p.id">
                <div class="row d-flex align-items-center">
                  <div class="col-5">
                    <div class="d-flex align-items-center"><img :src="p.images[0]" alt="" class="img-fluid">
                      <div class="title">
                        <router-link :to="'/details/'+p.id">
                          <h5>{{p.name}}</h5>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-2"><span>&#8358;{{p.price}}</span></div>
                  <div class="col-2">
                    <div class="d-flex align-items-center">
                      <div class="quantity d-flex align-items-center">
                        <div class="dec-btn" v-if="p.cartQty > 1" @click="decrementQty(p)">-</div>
                        <span class="quantity-no " > {{p.cartQty}} </span>
                        <div class="inc-btn" @click="incrementQty(p)">+</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2"><span>&#8358;{{parseFloat(p.price) * p.cartQty}}</span></div>
                  <div class="col-1 text-center"><i class="delete fa fa-trash" @click="removeFromCart(p.id)"></i></div>
                </div>
              </div>

              <div class="item">
                <div class="row d-flex align-items-center">
                  <div class="col-5">
                    <div class="d-flex align-items-center">

                      <div class="title">Total

                      </div>
                    </div>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-2">
                    <div class="d-flex align-items-center">
                      <div class="quantity d-flex align-items-center">

                      </div>
                    </div>
                  </div>
                  <div class="col-2"><span>&#8358;{{total}}</span></div>
                  <div class="col-1 text-center"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="order-details no-padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="block">
              <div class="block-header">
                <h6 class="text-uppercase">Coupon Code</h6>
              </div>
              <div class="block-body">
                <p>If you have a coupon code, please enter it in the box below</p>
                <form action="cart.html#">
                  <div class="form-group d-flex">
                    <input type="text" name="coupon">
                    <button type="submit">Apply Coupon</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="block">
              <div class="block-header">
                <h6 class="text-uppercase">Instructions for seller</h6>
              </div>
              <div class="block-body">
                <p>If you have some information for the seller you can leave them in the box below</p>
                <form action="cart.html#">
                  <textarea name="instructions"></textarea>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="block">
              <div class="block-header">
                <h6 class="text-uppercase">Order Summary</h6>
              </div>
              <div class="block-body">
                <p>Shipping and additional costs are calculated based on values you have entered.</p>
                <ul class="order-menu list-unstyled">
                  <li class="d-flex justify-content-between"><span>Order Subtotal </span><strong>&#8358;{{subTotal}}</strong></li>
                  <li class="d-flex justify-content-between"><span>Shipping and handling</span><strong>&#8358;{{shipping}}</strong></li>
                  <li class="d-flex justify-content-between"><span>Total</span><strong class="text-primary price-total">&#8358;{{total}}</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 text-center CTAs"><a href="#" class="btn btn-template btn-lg wide">Proceed to checkout<i class="fa fa-long-arrow-right"></i></a></div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY
  } from '../store/mutation-types'
  import AppHeader from '../components/AppHeader'
  import AppBanner from '../components/AppBanner'
  import AppFooter from '../components/Footer'
  export default {
    components: {
      AppFooter,
      AppBanner,
      AppHeader
    },
    name: 'shopping-cart',
    computed: {
      cart () {
        return this.$store.getters.cart
      },
      bannerSubTitle () {
        return `You currently have ${this.cart.length} item${this.cart.length > 1 ? 's' : ''} in your shopping cart`
      },
      subTotal () {
        return this.cart.map(k => k.cartQty * parseFloat(k.price)).reduce((a, b) => a + b, 0)
      },
      shipping () {
        return 1500
      },
      total () {
        return this.shipping + this.subTotal
      }
    },
    methods: {
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      },
      incrementQty (product) {
        product.cartQty += 1
        this.$store.commit(UPDATE_CART_QUANTITY, { id: product.id, cartQty: product.cartQty })
      },
      decrementQty (product) {
        product.cartQty -= 1
        this.$store.commit(UPDATE_CART_QUANTITY, { id: product.id, cartQty: product.cartQty })
      }
    }
  }
</script>
<style scoped="">
  .quantity-no {
    padding:0 10px;
  }
</style>
