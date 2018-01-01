<template>
  <ul class="list-unstyled">
    <product-category v-for="c in categories" :key="c.id" :category="c"></product-category>
  </ul>
</template>
<script>
  import ProductCategory from './ProductCategory.vue'
  export default {
    name: 'product-category-list',
    created () {
      if (this.categories.length === 0) {
        this.$store.dispatch('allCategories')
      }
    },
    computed: {
      categories () {
        return this.$store.getters.allCategories
      },
      category () {
        return this.$store.getters.category
      }
    },
    components: {
      ProductCategory
    },
    data () {
      return {
      }
    }
  }
</script>
