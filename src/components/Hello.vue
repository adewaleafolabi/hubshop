<template>
  <div>
    <!-- navbar-->
    <app-header></app-header>
    <!-- Hero Section-->
    <app-banner :title="category.name && category.name !=='Default'?category.name: 'Shop'"></app-banner>
    <main>
      <div class="container">
        <div class="row">
          <!-- Sidebar-->
          <div class="sidebar col-xl-3 col-lg-4 sidebar">
            <div class="block">
              <h6 class="text-uppercase">Product Categories</h6>
              <product-category-list></product-category-list>
            </div>
            <div class="block">
              <h6 class="text-uppercase">Filter By Price  </h6>
              <price-filter></price-filter>
            </div>
            <div class="block">
              <h6 class="text-uppercase">Brands </h6>
              <product-brand-list :brands="brands"></product-brand-list>
            </div>
          </div>
          <!-- /Sidebar end-->
          <!-- Grid -->
          <div class="products-grid col-xl-9 col-lg-8 sidebar-left">
            <header class="d-flex justify-content-between align-items-start">
              <h4 v-if="category.name">{{category.name}}</h4>
              <pagination-summary></pagination-summary>
              <app-sorting></app-sorting>
            </header>
            <product-list></product-list>

          </div>
          <!-- / Grid End-->
        </div>
      </div>
    </main>

    <product-detail-popup :product="product"></product-detail-popup>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './Footer.vue'
  import PaginationSummary from './PaginationSummary.vue'
  import ProductDetailPopup from './ProductDetailPopup.vue'
  import ProductList from './ProductList.vue'
  import ProductCategoryList from './ProductCategoryList.vue'
  import PriceFilter from './PriceFilter'
  import ProductBrandList from './ProductBrandList'
  import AppSorting from './AppSorting'
  import vueSlider from 'vue-slider-component'
  import AppHeader from './AppHeader'
  import AppBanner from './AppBanner'

  export default {
    name: 'hello',
    data () {
      return {
        product: {},
        brands: [
          {id: 1, name: 'Kelvin Clein', quantity: 20}
        ]
      }
    },
    computed: {
      category () {
        return this.$store.getters.category
      }
    },
    components: {
      AppBanner,
      AppHeader,
      AppSorting,
      ProductBrandList,
      PriceFilter,
      ProductCategoryList,
      AppFooter,
      ProductList,
      PaginationSummary,
      ProductDetailPopup,
      vueSlider
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    padding-left: 25%;
    min-height:300px;
    max-height: 300px;
  }
  .white-bg{
    background-color: #ffffff !important;
    box-shadow: 0 2px 2px rgba(0,0,0,0.1);
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
