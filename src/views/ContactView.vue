<template>
  <h1 class="text-center">Jackor</h1>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="3" v-for="product in JacketsProducts" :key="product.id">
        <b-img :src="product.image" fluid alt="responsive image" />
        <p>{{ product.name }}</p>
        <p>{{ product.cost }} kr</p>
        <button class="btn-primary btn" @click="addProduct(product)">
          Add to cart
        </button></b-col
      >
    </b-row>
  </b-container>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>About Us</h4>
          <p>
            We are a vintage clothing store dedicated to providing high-quality
            clothing for men and women.
          </p>
        </div>
        <div class="col-md-6">
          <h4>Contact Us</h4>
          <p>Email: contact@sellit.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {}},
      computed: {
     ...mapGetters(['JacketsProducts'])
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
