<template>
  <div>
    <div id="slider-snap"></div>
    <div class="value d-flex justify-content-between">
      <vue-slider v-model="value" :min="0" :max="5000" width="100%" :tooltipStyle="tooltipStyle" :processStyle="tooltipStyle" formatter= "₦{value}"></vue-slider>
    </div>
  </div>
</template>
<script>
  import vueSlider from 'vue-slider-component'
  export default {
    name: 'price-filter',
    components: {
      vueSlider
    },
    data () {
      return {
        value: [],
        tooltipStyle: {
          'backgroundColor': '#222',
          'borderColor': '#222'
        }
      }
    }
  }
</script>
