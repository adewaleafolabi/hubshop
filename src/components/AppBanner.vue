<template>
  <section class="hero hero-page gray-bg white-bg padding-small">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-9 order-2 order-md-1">
          <h1>{{title}}</h1>
          <p class="lead text-muted" v-if="subtitle">{{subtitle}}</p>
          <!--<img :src="category.image" v-show="category.image" class="banner" v-if="category.name=='Default'"/>-->
          <!--<img :src="category.image" v-show="category.image" class="banner" v-else=""/>-->
        </div>
        <ul
          class="breadcrumb d-flex justify-content-start justify-content-md-center col-md-3 text-right order-1 order-md-2">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Shop</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'app-banner',
    props: ['title', 'subtitle', 'image']
  }
</script>
