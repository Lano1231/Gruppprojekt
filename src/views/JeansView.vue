<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-..."
  />
  <h1 class="text-center">Jeans (Man)</h1>
  <b-container
    class="bv-example-row bv-example-row-flex-cols"
    @click="$event.stopPropagation()"
  >
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="6" v-for="product in JeansProducts" :key="product.id">
        <b-img :src="product.image" fluid alt="responsive image" />
        <p>{{ product.name }}</p>
        <p>{{ product.cost }} kr</p>
        <button class="btn-primary btn" @click="addProduct(product)">
          Lägg Till i Varukorg
        </button>
      </b-col>
    </b-row>
  </b-container>
  <footer class="bg-light text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #3b5998"
          href="#!"
          role="button"
          ><i class="fab fa-facebook-f"
        /></a>

        <!-- Twitter -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #55acee"
          href="#!"
          role="button"
          ><i class="fab fa-twitter"
        /></a>

        <!-- Google -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #dd4b39"
          href="#!"
          role="button"
          ><i class="fab fa-google"
        /></a>

        <!-- Instagram -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
          ><i class="fab fa-instagram"
        /></a>

        <!-- Linkedin -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #0082ca"
          href="#!"
          role="button"
          ><i class="fab fa-linkedin-in"
        /></a>
        <!-- Github -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #333333"
          href="#!"
          role="button"
          ><i class="fab fa-github"
        /></a>
      </section>
    </div>
    <!-- Grid container -->

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      Sell-IT vintage clothing
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['JeansProducts'])
    },
    methods: {
      addProduct(product) {
        this.$store.dispatch('addProduct', product)
        localStorage.setItem('cart', JSON.stringify(this.$store.getters.cart))
      },
      removeProduct(index) {
        this.$store.dispatch('removeProduct', index)
        localStorage.setItem('cart', JSON.stringify(this.$store.getters.cart))
      },
      clearCart() {
        this.$store.dispatch('clearCart')
        localStorage.removeItem('cart')
      }
    },
    created() {
      const cart = localStorage.getItem('cart')
      if (cart) {
        this.$store.commit('SET_CART', JSON.parse(cart))
      }
    }
  }
</script>
