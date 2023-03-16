<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-..."
  />
  <div class="container">
    <h1 class="text-center">Jackor (Man)</h1>
    <b-container
      class="bv-example-row bv-example-row-flex-cols"
      @click="$event.stopPropagation()"
    >
      <b-row class="text-center products" align-v="stretch">
        <b-col cols="3" v-for="product in JacketsProducts" :key="product.id">
          <b-img :src="product.image" fluid alt="responsive image" />
          <p>{{ product.name }}</p>
          <p>{{ product.cost }} kr</p>
          <button class="btn-primary btn" @click="addProduct(product)">
            Lägg Till i Varukorg
          </button></b-col
        >
      </b-row>
    </b-container>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4>Om oss</h4>
            <p>
              Vi är en vintageklädbutik som är dedikerad till att tillhandahålla
              hög kvalitet kläder för män och kvinnor.
            </p>
          </div>
          <div class="col-md-6">
            <h4>Kontakta oss</h4>
            <p>E-post: contact@sellit.com</p>
            <p>Telefon: 555-555-5555</p>
            <p>Adress: 123 Main St, Anytown USA</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['JacketsProducts'])
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
