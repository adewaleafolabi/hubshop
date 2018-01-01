<template>
  <select id="sorting" class="bs-select" @change="change" v-model="sort">
    <option value="false">Low Price</option>
    <option value="true">High Price</option>
  </select>
</template>
<script>
  export default{
    name: 'app-sorting',
    methods: {
      change () {
        this.$store.dispatch('sort', this.sort)
      }
    },
    data () {
      return {
        sort: 'false'
      }
    }
  }
</script>
