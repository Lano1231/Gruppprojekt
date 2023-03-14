<template>
  <h1 class="text-center">Jackor</h1>
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
            name: 'Red Adidas Soccer College Windbreaker',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/046dca38-e93a-4175-a07c-7754ec99e4ce_large.jpg'
          },
          {
            name: 'Vintage Champion Sport Jacket in Black',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/eb2dde16-e4b8-4279-abc0-0e36f63325e4_large.jpg'
          },
          {
            name: "Vintage Levi's Medium Wash Denim Jacket",
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/7a8f0c57-584f-40fa-b5df-f28a3ed63ca0_large.jpg'
          },
          {
            name: 'Denim varsity jacket retro college basketball bomber green',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/445d972c-e72d-4fe5-adcf-8636d3fe6030_large.jpg'
          },
          {
            name: 'Vintage Champion Jacket in Blue',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/1b8bbd78-97fc-4d2c-9026-60fc17c7bc77_large.jpg'
          },
          {
            name: 'Vintage Eddie Bauer Teal Jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/9d8f0c4b-0ed2-43a2-9d34-ceae66e60d69_large.jpg'
          },
          {
            name: 'Tweed Wool Blazer',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/1b03109a-406b-486f-9e3b-0e634d8fb59f_large.jpg'
          },
          {
            name: 'Gray brown Burberry jacket',
            cost: '100kr',
            image:
              'https://marketplace-images.asos.com/user/0e04577b-2b38-4781-8231-af0330d999c3_large.jpg'
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
