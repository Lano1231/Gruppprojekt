<template>
  <div style="min-width: 320px; right: 0; left: auto;" class="">
    <div class="px-2 ">
    <h2>Varukorg <button class="btn btn-primary btn-sm" @click="clearCart">Töm varukorg</button></h2>
    <h2 style="font-size: medium;">{{ cartCount }} produkter i varukorg
      <p>Totala kostnad: {{ totalCost }} kr</p> </h2>
    <ul>
      <li v-for="(product, index) in cart" :key="product.id">
        <div class="item-image">
        <b-img :src="product.image" fluid alt="responsive image" style="width: 100px; height: auto;" />
      </div>

        <h3 style="font-size: medium;">{{ product.name }} <p>{{ product.cost }} kr</p></h3>
        <p>Antal produkter: {{ product.quantity }}</p>

        <button class="btn btn-primary btn-sm" @click="removeProduct(index)">Ta bort från varukorg</button>

      </li>
    </ul>


  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cart', 'totalCost', 'cartCount'])
  },
  methods: {
    removeProduct(index) {
      this.$store.dispatch('removeProduct', index);
    },
    clearCart() {
      this.$store.dispatch('clearCart');
    }
  }
};
</script>
