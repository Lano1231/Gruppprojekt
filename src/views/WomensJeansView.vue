<template>
  <div>
    <h1 class="text-center">Jeans</h1>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-v="stretch">
        <b-col v-for="product in products" :key="product.id">
          <b-img :src="product.imageSrc" fluid alt="Fluid image" />
        </b-col>
      </b-row>
      <b-row class="text-center" align-v="stretch">
        <b-col v-for="product in products" :key="product.id">
          <p>{{ product.name }}</p>
          <p>{{ product.price }} kr</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    computed: {
      products() {
        return [
          {
            id: 1,
            name: 'Straight Leg Levis 501 Jeans - W35',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
          },
          {
            id: 2,
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            id: 3,
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          },
          {
            id: 4,
            name: 'Straight Leg Levis 501 Jeans - W35',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
          },
          {
            id: 5,
            name: 'Vintage Tapered Levis 550 Jeans - W36',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
          },
          {
            id: 6,
            name: 'Vintage Ralph Lauren Flared Jeans - W34',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
          }
        ]
      }
    }
  }
</script>
