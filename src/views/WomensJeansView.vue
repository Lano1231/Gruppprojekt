<template>
  <h1 class="text-center">Jeans</h1>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="text-center products" align-v="stretch">
      <b-col cols="3" v-for="product in products" :key="product.name">
        <b-img :src="product.image" fluid alt="responsive image" />
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
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
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
          },
          {
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          },
          {
            name: 'Vintage Cream Guess Skinny Fit Jeans - W24',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/ae672ea6-8bde-4807-838c-98f1bfb69c74_large.jpg'
          },
          {
            name: 'Vintage levis 505 boyfriend fit jeans w30 l26 BV16268M',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/4cb12be3-bcf7-4ad2-bb62-a6bae92703e5_large.jpg'
          },
          {
            name: 'Vintage lee loose fit jeans black w36 l32 BV16046',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/04ceb03e-5b14-405c-9f60-9b9c8a440a7a_large.jpg'
          },
          {
            name: 'Vintage Pluto velvet jeans in navy blue tapered leg',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/eba28ca0-ae29-4719-afa8-cd21676fe20f_large.jpg'
          },
          {
            name: 'Splash jeans dye denim pants in black cream',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/0536deb0-8b09-47fe-933f-f58efda784cf_large.jpg'
          }
        ]
      }
    }
  }
</script>
