<template>
  <div>
    <section class="hero hero-page padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-9 order-2 order-md-1"></div>
          <ul
            class="breadcrumb d-flex justify-content-start justify-content-md-center col-md-3 text-right order-1 order-md-2">
            <li class="breadcrumb-item">
              <router-link :to="'/'">Home</router-link>
            </li>
            <li class="breadcrumb-item active">{{product.name}}</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="product-details no-padding-top">
      <div class="container">
        <div class="row">
          <div class="product-images col-lg-4">
            <div class="ribbon-info text-uppercase" v-if="product.state">{{product.state}}</div>
            <carousel  :perPage="1" :navigationEnabled="true">
              <slide><img :src="product.images[0]" alt="" class="slide-img"></slide>
              <slide><img :src="product.images[1]" alt="" class="slide-img"></slide>
              <slide><img :src="product.images[2]" alt="" class="slide-img"></slide>
            </carousel>

          </div>
          <div class="details col-lg-8">
            <h2>{{product.name}}</h2>
            <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row">
              <ul class="price list-inline no-margin">
                <li class="list-inline-item current">&#8358;{{product.price}}</li>
              </ul>
            </div>
            <p>{{product.description}}</p>

            <product-button-pill :product="product"></product-button-pill>
          </div>
        </div>
      </div>
    </section>
    <section class="product-description no-padding">
      <div class="container">
        <ul role="tablist" class="nav nav-tabs">
          <li class="nav-item"><a data-toggle="tab" href="detail.html#description" role="tab" class="nav-link active">Description</a></li>
        </ul>
        <div class="tab-content">
          <div id="description" role="tabpanel" class="tab-pane active">
            <p>{{product.description}}</p>
            <ul class="list-unstyled additional-information">
              <li class="d-flex justify-content-between" v-if="product.prdcode"><strong>Code:</strong><span>{{product.prdcode}}</span></li>
              <li class="d-flex justify-content-between" v-if="product.name"><strong>Name:</strong><span>{{product.name}}</span></li>
              <li class="d-flex justify-content-between" v-if="product.size"><strong>Size:</strong><span>{{product.size}}</span></li>
              <li class="d-flex justify-content-between" v-if="product.color"><strong>Color:</strong><span>{{product.color}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import ProductButtonPill from './ProductButtonPill'
  import { Carousel, Slide } from 'vue-carousel'
  export default{
    components: {ProductButtonPill, Carousel, Slide},
    name: 'product-detail',
    props: ['product']
  }
</script>
<style scoped="">
  .slide-img{
    min-height: 300px;
    max-height: 300px;
  }
</style>
