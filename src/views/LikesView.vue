<template>
  <div>
    <h1>Gillade Produkter</h1>
    <div v-for="(product, index) in likedProducts" :key="index">
      <h3>{{ product.name }}</h3>
      <p>{{ product.cost }} kr</p>
      <b-img :src="product.image" fluid alt="responsive image" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['likedProducts'])
    },
    methods: {
      ...mapActions(['addToLiked']),
      likeProduct(product) {
        this.addToLiked(product)
      }
    }
  }
</script>

<style>
  .like-button.liked {
    color: red;
  }
</style>
