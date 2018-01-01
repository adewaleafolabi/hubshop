<template>
  <div>
    <div class="row">
      <product-item :product="p" v-for="p in products" :key="p.id"></product-item>
    </div>
    <b-pagination @change="paginationChanged" size="md" :total-rows="this.$store.getters.pagination.total"
                  :per-page="10" class=" pagination-custom" prev-text="Prev" next-text="Next"></b-pagination>
  </div>
</template>
<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    beforeCreate () {
    },
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    components: {
      ProductItem
    },
    data () {
      return {}
    },
    methods: {
      paginationChanged (page) {
        this.$store.dispatch('pagination', page)
      }
    }
  }
</script>
