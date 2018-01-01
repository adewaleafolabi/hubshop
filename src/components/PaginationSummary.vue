<template>
<span class="visible-items">Showing <strong>{{start}}-{{end}} </strong>of <strong>{{pagination.total}} </strong>results</span>
</template>
<script>
export default {
  name: 'pagination-summary',
  computed: {
    pagination () {
      return this.$store.getters.pagination
    },
    start () {
      return (this.pagination.limit * (this.pagination.page - 1)) + 1
    },
    end () {
      return (this.pagination.page * this.pagination.limit) > this.pagination.total ? this.pagination.total : (this.pagination.page * this.pagination.limit)
    }
  }
}
</script>

