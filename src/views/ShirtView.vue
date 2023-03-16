<template>
  <h1 class="text-center">Skjortor</h1>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="3" v-for="product in ShirtsProducts" :key="product.id">
        <b-img :src="product.image" fluid alt="responsive image" />
        <p>{{ product.name }}</p>
        <p>{{ product.cost }} kr</p>
        <button class="btn-primary btn" @click="addProduct(product)">
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
     ...mapGetters(['ShirtsProducts'])
  },

  methods: {
    addProduct(product) {
      this.$store.dispatch('addProduct', product);
      localStorage.setItem('cart', JSON.stringify(this.$store.getters.cart));
    },
    removeProduct(index) {
      this.$store.dispatch('removeProduct', index);
      localStorage.setItem('cart', JSON.stringify(this.$store.getters.cart));
    },
    clearCart() {
      this.$store.dispatch('clearCart');
      localStorage.removeItem('cart');
    }
  },
  created() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.$store.commit('SET_CART', JSON.parse(cart));
    }
  }
};
</script>
