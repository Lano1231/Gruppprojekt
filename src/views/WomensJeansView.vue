<template>
  <h1 class="text-center">Jeans</h1>
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
            name: 'Straight Leg Levis 501 Jeans - W35',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
          },
          {
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          },
          {
            name: 'Straight Leg Levis 501 Jeans - W35',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
          },
          {
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          },
          {
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: 100,
            image:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          }
        ]
      }
    }
  }
</script>
