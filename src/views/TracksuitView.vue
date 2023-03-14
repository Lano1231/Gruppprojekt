<template>
  <h1 class="text-center">Träningsoveraller</h1>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="3" v-for="product in products" :key="product.name">
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
  export default {
    data: () => {
      return {
        cart: [],
        products: [
          {
            name: 'Vintage Adidas Marseille Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/f9d319bd-202e-43da-857b-b95724c489c3_large.jpg'
          },
          {
            name: 'Vintage La Coruna Track Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/c6879c64-58e5-4733-b638-27ac8970c519_large.jpg'
          },
          {
            name: 'Vintage Jean Leduc Track Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/7541aa16-3290-4870-98fa-88f963ffe190_large.jpg'
          },
          {
            name: 'Vintage Fila Track Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/7829ab1a-2b8b-446e-9978-483d6cf4cb97_large.jpg'
          },
          {
            name: 'Vintage Adidas Black Track Top',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/2cc0cf07-41af-4470-a3e5-74f6374ad0a1_large.jpg'
          },
          {
            name: 'Vintage Nike 1/4 zip Track Jacke',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/dc4bcbea-9c18-41e9-ac63-9310f6b99de4_large.jpg'
          },
          {
            name: 'Vintage Reebok Track Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/1a28a829-df7e-48f8-884a-d8d700a4128b_large.jpg'
          },
          {
            name: 'Vintage Lotto Track Jackets',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/7c2f6e2f-e317-448e-807c-2798a02839c6_large.jpg'
          }
        ]
      }
    },
    methods: {
      addItemToCart(product) {
        console.log(product)
      }
    }
  }
</script>
