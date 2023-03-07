<template>
  <h1 class="text-center">Skor</h1>
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
            name: 'Platform loafers faux leather white thread boots in black',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/c25f7b0c-2277-46a8-a61d-cd8b90ec67e7_large.jpg'
          },
          {
            name: 'Faux leather sneakers retro classic trainers in white',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/7c3f1990-ad0b-4742-bdec-8533282cc88f_large.jpg'
          },
          {
            name: 'Vintage Brown Leather Mid Heeled Shoes with Bow Detail UK3.5',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/117acada-e416-4768-b261-10d1da5695cf_large.jpg'
          },
          {
            name: 'Nike Air Force 1 Air Force womens shoes',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/f3595e97-1de6-45a3-8335-5fdda1a4675b_large.jpg'
          },
          {
            name: 'Customized trainers check laces cat patch sneakers in black',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/65fa126f-a7f5-49f7-9023-aa8e91e3cf05_large.jpg'
          },
          {
            name: 'Black Platform Zipper Lace Up Buckle Ankle Boots',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/85f3efce-9a73-47be-b3dc-398139b583d6_large.jpg'
          },
          {
            name: 'Customized peace trainers punk beads sneakers in white',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/fc6687be-a78a-484f-87ec-ca678755c8de_large.jpg'
          },
          {
            name: 'Customized smile trainers love diamonds sneakers in white',
            price: '100kr',
            image:
              'https://marketplace-images.asos.com/user/951984d8-dbae-4e89-9f88-041deceef6b2_large.jpg'
          }
        ]
      }
    }
  }
</script>
