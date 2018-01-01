<template>
    <li>
      <a @click.prevent="loadCategory" :class="{'d-flex justify-content-between align-items-center' : true, 'active': active}"><span>{{category.name}}</span>
      <small>{{category.quantity}}</small>
        <i class="fa fa-times" @click="clearCategory" v-if="active"></i>
    </a>
      <ul class="list-unstyled" v-if="category.subItems.length > 0">
        <li v-for="s in category.subItems"><a href="">{{s.name}}</a></li>
      </ul>
    </li>
</template>
<script>
  export default {
    name: 'product-category',
    props: ['category'],
    data () {
      return {
        active: false
      }
    },
    methods: {
      loadCategory () {
        this.$store.dispatch('category', this.category)
      },
      clearCategory () {
        console.log('clear called')
      }
    }
  }
</script>
<style scoped="">
  a{
    cursor: pointer !important;
  }
  .fa{
    color: #ffffff;
    font-weight: bold;
  }

  .active{
    background: #222 !important;
    color: #fff !important;
  }
</style>
