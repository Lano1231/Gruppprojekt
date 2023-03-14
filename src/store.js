import { createStore } from 'vuex';


const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Vintage Carhartt Straight Fit Jeans',
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/b45bd446-033d-4f7a-8c34-4072672fec0b_large.jpg'
      },
      {
        id: 2,
        name: "Vintage 90's Levi's 514 Denim",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/90c7277d-6d7d-4e43-85e4-01dbdd480d7c_large.jpg'
      },
      {
        id: 3,
        name: "Vintage 90's Wrangler Jeans",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/03f5dca0-6a66-45ac-b73e-91be447d1ea0_large.jpg'
      },
      {
        id: 4,
        name: "Levi's 90's 501 Denim Slim",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/38b85db1-f713-4d3a-85d4-25d42497cbd2_large.jpg'
      },
      {
        id: 5,
        name: "Calvin Klein 90's Denim",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/b45bd446-033d-4f7a-8c34-4072672fec0b_large.jpg'
      },
      {
        id: 6,
        name: "Levi's 514's Black Denim Jeans",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/e8c25888-9068-407d-b594-d764b35ff06c_large.jpg'
      },
      {
        id: 7,
        name: "Wrangler 90's Denim Straight Leg",
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/d7eb83e7-3d58-440d-898f-79a2f26c0d20_large.jpg'
      },
      {
        id: 8,
        name: 'Vintage G-Star Raw 3301',
        cost: '100kr',
        category: 'Jeans',
        image:
          'https://marketplace-images.asos.com/user/84e7ff59-bbd8-4856-a672-faf04125d58b_large.jpg'
      }
    ],


  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    }
  },
  getters: {
    productsCount(state) {
      return state.products.length;
    },
    JeansProducts(state) {
      return state.products.filter(product => product.category === 'Jeans');
    }
  }
});

export default store ;
