<template>
  <div id="app">
    <loading :show="showLoader"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import loading from './components/Loading.vue'
  export default {
    name: 'app',
    components: {
      loading
    },
    computed: {
      showLoader () {
        return this.$store.state.showLoader
      }
    }
  }
</script>

