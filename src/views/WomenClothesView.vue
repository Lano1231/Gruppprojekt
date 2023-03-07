<template>
  <h1 class="text-center">Dresses</h1>
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
            name: '60s vintage black and orange/yellow flower power mini dress',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/b18dba93-c690-44d6-a1fb-2eb844b9da8c_large.jpg'
          },
          {
            name: 'Vintage Blue & Off-White Floral Dress - L',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/2f351575-10b7-4899-bd8f-8d95cfdee9ba_large.jpg'
          },
          {
            name: 'Vintage Puff Sleeve Levis Denim Dress - S',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/5110a4d2-021c-42d9-9eaf-939453019443_large.jpg'
          },
          {
            name: '1980s Vintage Black Floral Pleated Dress & Belt',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/aa522bb3-3700-4926-99e4-d245fb7795d5_large.jpg'
          },
          {
            name: 'Vintage Jacquard Sleeveless 1990s Black & Red Evening Dress',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/ac98ed6e-4be0-4874-8a6b-5ad52185e9d0_large.jpg'
          },
          {
            name: 'Vintage Medium Wash Denim Dress - L',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/0e389f38-994f-4222-8307-d164a704c6af_large.jpg'
          },
          {
            name: 'Vintage Floral Print Strappy Dress - M',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/d450ef1f-c5d1-4c08-ac83-a13613d7a96f_large.jpg'
          },
          {
            name: 'Vintage Floral Print Dress - S',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/20bf1add-2651-438a-9835-06d71676c62c_large.jpg'
          }
        ]
      }
    }
  }
</script>
