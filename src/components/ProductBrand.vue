<template>
    <div class="form-group">
      <input :id="brand.id" type="checkbox" name="clothes-brand"  class="checkbox-template">
      <label :for="brand.id">{{brand.name}}
        <small>({{brand.quantity}})</small>
      </label>
    </div>
</template>
<script>
  export default{
    name: 'product-brand',
    props: ['brand']
  }
</script>
