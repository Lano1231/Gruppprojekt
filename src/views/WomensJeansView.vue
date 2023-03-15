<template>
  <h1 class="text-center">Jeans</h1>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="3" v-for="product in WomensJeansProducts" :key="product.id">
        <b-img :src="product.image" fluid alt="responsive image" />
        <p>{{ product.name }}</p>
        <p>{{ product.cost }}</p>
        <button class="btn-primary btn" @click="addItemToCart(product)">
          Add to cart
        </button></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {}},
      computed: {
     ...mapGetters(['WomensJeansProducts'])
        ,

    productsCount() {
      return this.$store.getters.productsCount;
    }
  },

  methods: {
    addProduct() {
      this.$store.dispatch('addProduct', { id: 1, name: 'Product 4', cost: "100kr", image: 32121, });
    }
  }
};
</script>
