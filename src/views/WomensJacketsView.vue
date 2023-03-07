<template>
  <h1 class="text-center">Jackor</h1>
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
            name: 'Vintage Levis Faux Shearling Lined Denim Jacket - M',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/fbff8f70-f3bc-41c8-9a4d-01e7aa14c258_large.jpg'
          },
          {
            name: 'Vintage timberlands woman button up long jacket',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/741639e1-96a6-4557-bb80-2f327333ed2a_large.jpg'
          },
          {
            name: 'Vintage Classic Black Denim Jacket - L',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/9dd83c7e-4cdc-4641-9a88-e24c3a42dde8_large.jpg'
          },
          {
            name: 'Vintage Colorful Light Nature Print Hoodie Jacket',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/e0aa2bff-a4e6-4020-ae2a-72229bcfafd5_large.jpg'
          },
          {
            name: 'Bayside league denim bomber jacket dark blue l - bv13800',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/9e60309b-7f35-4f42-8002-0dfea4aff8e8_large.jpg'
          },
          {
            name: 'Vintage 90s LL BEAN Denim Jacket Workwear Button Up Blue',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/4850adb5-4e27-455d-b37e-e4987000cc59_large.jpg'
          },
          {
            name: 'KENZO Overcoat Jacket Blue Womens S',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/bfdf723a-f64d-438b-aa39-383969630d04_large.jpg'
          },
          {
            name: 'Vintage Checked Multi Colour Button-Front Jacket - L',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/45ab0b62-0b88-4e17-81b6-cbd7a569af93_large.jpg'
          }
        ]
      }
    }
  }
</script>
