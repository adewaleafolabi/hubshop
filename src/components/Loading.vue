<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="showing" :class="{'white-overlay': overlay}">
      <div class="loader-wrapper">
        <div class="" style="padding: 10px 20px"><spinner background="#3494E6"></spinner></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {SquareGrid} from 'vue-loading-spinner'
  export default {
    props: {
      label: {
        default: 'Loading...'
      },
      show: {
        default: false
      },
      overlay: {
        default: true
      },
      // central event bus
      eventBus: {
        default: null
      },
      eventShow: {
        default: 'show-full-loading'
      },
      eventHide: {
        default: 'hide-full-loading'
      }
    },
    components: {
      Spinner: SquareGrid
    },
    data () {
      return {
        showing: false
      }
    },
    watch: {
      show (val) {
        this.showing = val
      }
    },
    methods: {
      showMe () {
        this.showing = true
      },
      hideMe () {
        this.showing = false
      },
      // Register eventBus methods.
      registerBusMethods () {
        this.eventBus.$on(this.eventShow, this.showMe)
        this.eventBus.$on(this.eventHide, this.hideMe)
      }
    },
    mounted () {
      // If event bus, register methods.
      if (this.eventBus) {
        this.registerBusMethods()
      }
    }
  }
</script>
<style scoped>
  .white-overlay {
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 9999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    margin: 0;
  }

  .loader-wrapper {
    position: absolute;
    display: inline-block;
    right: 45%;
    top:45%
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  .wrapper {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 0;
  }



</style>
