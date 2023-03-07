<template>
  <div>
    <h1 class="text-center">Klänningar</h1>
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
            name: '60s vintage black and orange/yellow flower power mini dress',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/b18dba93-c690-44d6-a1fb-2eb844b9da8c_large.jpg'
          },
          {
            id: 2,
            name: 'Vintage Blue & Off-White Floral Dress - L',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/2f351575-10b7-4899-bd8f-8d95cfdee9ba_large.jpg'
          },
          {
            id: 3,
            name: 'Vintage Blue & Off-White Floral Dress - L',
            price: 100,
            imageSrc:
              'https://marketplace-images.asos.com/user/2f351575-10b7-4899-bd8f-8d95cfdee9ba_large.jpg'
          }
        ]
      }
    }
  }
</script>
