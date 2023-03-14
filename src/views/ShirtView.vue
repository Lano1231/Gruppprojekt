<template>
  <h1 class="text-center">Skjortor</h1>
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
            name: 'Vintage Foliage Hawaiian Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/c179fac7-97bb-4e3d-a382-a491033399a4_large.jpg'
          },
          {
            name: 'Vintage Wrangler Navy Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/61eba5e5-b980-4aa8-89c7-04da088cf55e_large.jpg'
          },
          {
            name: 'Vintage Dockers Pinstriped Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/0d4f2b9b-0d3e-45e4-a97f-4a81a6290ee1_large.jpg'
          },
          {
            name: 'Vintage Van Heusen Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/c4fa5774-6aa6-4920-bc8a-0ede24eeb0d9_large.jpg'
          },
          {
            name: 'Vintage Calvin Klein Checked Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/58647f2e-0316-47b0-804d-2ab85ce5be64_large.jpg'
          },
          {
            name: 'Vintage Ralph Lauren Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/144a27fa-8024-4ef4-bdbb-887e17c21e04_large.jpg'
          },
          {
            name: 'Vintage Dickies Denim Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/f1f27f05-f42b-402d-abd8-11330f387bd9_large.jpg'
          },
          {
            name: 'Vintage Woolrich Checked Shirt',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/49fa57fe-1bf6-47b3-8fc2-c19c4e5799b2_large.jpg'
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
