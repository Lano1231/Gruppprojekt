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
      },

      {
        id: 10,
        name: 'Red Adidas Soccer College Windbreaker',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/046dca38-e93a-4175-a07c-7754ec99e4ce_large.jpg'
      },
      {
        id: 11,
        name: 'Vintage Champion Sport Jacket in Black',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/eb2dde16-e4b8-4279-abc0-0e36f63325e4_large.jpg'
      },
      {
        id: 12,
        name: "Vintage Levi's Medium Wash Denim Jacket",
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/7a8f0c57-584f-40fa-b5df-f28a3ed63ca0_large.jpg'
      },
      {
        id: 13,
        name: 'Denim varsity jacket retro college basketball bomber green',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/445d972c-e72d-4fe5-adcf-8636d3fe6030_large.jpg'
      },
      {
        id: 14,
        name: 'Vintage Champion Jacket in Blue',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/1b8bbd78-97fc-4d2c-9026-60fc17c7bc77_large.jpg'
      },
      {
        id: 15,
        name: 'Vintage Eddie Bauer Teal Jacket',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/9d8f0c4b-0ed2-43a2-9d34-ceae66e60d69_large.jpg'
      },
      {
        id: 16,
        name: 'Tweed Wool Blazer',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/1b03109a-406b-486f-9e3b-0e634d8fb59f_large.jpg'
      },
      {
        id: 17,
        name: 'Gray brown Burberry jacket',
        cost: '100kr',
        category: 'Jackets',
        image:
          'https://marketplace-images.asos.com/user/0e04577b-2b38-4781-8231-af0330d999c3_large.jpg'
      },

      {
        id: 18,
        name: 'Vintage Foliage Hawaiian Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/c179fac7-97bb-4e3d-a382-a491033399a4_large.jpg'
      },
      {
        id: 19,
        name: 'Vintage Wrangler Navy Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/61eba5e5-b980-4aa8-89c7-04da088cf55e_large.jpg'
      },
      {
        id: 20,
        name: 'Vintage Dockers Pinstriped Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/0d4f2b9b-0d3e-45e4-a97f-4a81a6290ee1_large.jpg'
      },
      {
        id: 21,
        name: 'Vintage Van Heusen Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/c4fa5774-6aa6-4920-bc8a-0ede24eeb0d9_large.jpg'
      },
      {
        id: 22,
        name: 'Vintage Calvin Klein Checked Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/58647f2e-0316-47b0-804d-2ab85ce5be64_large.jpg'
      },
      {
        id: 23,
        name: 'Vintage Ralph Lauren Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/144a27fa-8024-4ef4-bdbb-887e17c21e04_large.jpg'
      },
      {
        id: 24,
        name: 'Vintage Dickies Denim Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/f1f27f05-f42b-402d-abd8-11330f387bd9_large.jpg'
      },
      {
        id: 25,
        name: 'Vintage Woolrich Checked Shirt',
        cost: '100kr',
        category: 'Shirts',
        image:
          'https://marketplace-images.asos.com/user/49fa57fe-1bf6-47b3-8fc2-c19c4e5799b2_large.jpg'
      },

      {
        id: 26,
        name: 'Vintage Adidas Marseille Jacket',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/f9d319bd-202e-43da-857b-b95724c489c3_large.jpg'
      },
      {
        id: 27,
        name: 'Vintage La Coruna Track Jacket',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/c6879c64-58e5-4733-b638-27ac8970c519_large.jpg'
      },
      {
        id: 28,
        name: 'Vintage Jean Leduc Track Jacket',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/7541aa16-3290-4870-98fa-88f963ffe190_large.jpg'
      },
      {
        id: 29,
        name: 'Vintage Fila Track Jacket',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/7829ab1a-2b8b-446e-9978-483d6cf4cb97_large.jpg'
      },
      {
        id: 30,
        name: 'Vintage Adidas Black Track Top',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/2cc0cf07-41af-4470-a3e5-74f6374ad0a1_large.jpg'
      },
      {
        id: 31,
        name: 'Vintage Nike 1/4 zip Track Jacke',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/dc4bcbea-9c18-41e9-ac63-9310f6b99de4_large.jpg'
      },
      {
        id: 32,
        name: 'Vintage Reebok Track Jacket',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/1a28a829-df7e-48f8-884a-d8d700a4128b_large.jpg'
      },
      {
        id: 33,
        name: 'Vintage Lotto Track Jackets',
        cost: '100kr',
        category: 'Tracksuits',
        image:
          'https://marketplace-images.asos.com/user/7c2f6e2f-e317-448e-807c-2798a02839c6_large.jpg'
      },

      {
        id: 34,
        name: 'Vintage Levis Faux Shearling Lined Denim Jacket - M',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/fbff8f70-f3bc-41c8-9a4d-01e7aa14c258_large.jpg'
      },
      {
        id: 35,
        name: 'Vintage timberlands woman button up long jacket',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/741639e1-96a6-4557-bb80-2f327333ed2a_large.jpg'
      },
      {
        id: 36,
        name: 'Vintage Classic Black Denim Jacket - L',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/9dd83c7e-4cdc-4641-9a88-e24c3a42dde8_large.jpg'
      },
      {
        id: 37,
        name: 'Vintage Colorful Light Nature Print Hoodie Jacket',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/e0aa2bff-a4e6-4020-ae2a-72229bcfafd5_large.jpg'
      },
      {
        id: 38,
        name: 'Bayside league denim bomber jacket dark blue l - bv13800',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/9e60309b-7f35-4f42-8002-0dfea4aff8e8_large.jpg'
      },
      {
        id: 39,
        name: 'Vintage 90s LL BEAN Denim Jacket Workwear Button Up Blue',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/4850adb5-4e27-455d-b37e-e4987000cc59_large.jpg'
      },
      {
        id: 40,
        name: 'KENZO Overcoat Jacket Blue Womens S',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/bfdf723a-f64d-438b-aa39-383969630d04_large.jpg'
      },
      {
        id: 41,
        name: 'Vintage Checked Multi Colour Button-Front Jacket - L',
        cost: '100kr',
        category:'WomensJackets',
        image:
          'https://marketplace-images.asos.com/user/45ab0b62-0b88-4e17-81b6-cbd7a569af93_large.jpg'
      },

      {
        id: 42,
        name: 'Straight Leg Levis 501 Jeans - W35',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/9446f52d-0c32-407b-8413-97628402c90d_large.jpg'
      },
      {
        id: 43,
        name: 'Vintage Tapered Levis 550 Jeans - W36',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/8ed9bee3-4aa9-4817-9cd1-6acdb7294070_large.jpg'
      },
      {
        id: 44,
        name: 'Vintage Ralph Lauren Flared Jeans - W34',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/64fbe984-4f84-414d-950d-369c56f5bfab_large.jpg'
      },
      {
        id: 45,
        name: 'Vintage Cream Guess Skinny Fit Jeans - W24',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/ae672ea6-8bde-4807-838c-98f1bfb69c74_large.jpg'
      },
      {
        id: 46,
        name: 'Vintage levis 505 boyfriend fit jeans w30 l26 BV16268M',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/4cb12be3-bcf7-4ad2-bb62-a6bae92703e5_large.jpg'
      },
      {
        id: 47,
        name: 'Vintage lee loose fit jeans black w36 l32 BV16046',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/04ceb03e-5b14-405c-9f60-9b9c8a440a7a_large.jpg'
      },
      {
        id: 48,
        name: 'Vintage Pluto velvet jeans in navy blue tapered leg',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/eba28ca0-ae29-4719-afa8-cd21676fe20f_large.jpg'
      },
      {
        id: 49,
        name: 'Splash jeans dye denim pants in black cream',
        cost: '100kr',
        category:'WomensJeans',
        image:
          'https://marketplace-images.asos.com/user/0536deb0-8b09-47fe-933f-f58efda784cf_large.jpg'
      },

      {
        id: 50,
        name: '60s vintage black and orange/yellow flower power mini dress',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/b18dba93-c690-44d6-a1fb-2eb844b9da8c_large.jpg'
      },
      {
        id: 51,
        name: 'Vintage Blue & Off-White Floral Dress - L',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/2f351575-10b7-4899-bd8f-8d95cfdee9ba_large.jpg'
      },
      {
        id: 52,
        name: 'Vintage Puff Sleeve Levis Denim Dress - S',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/5110a4d2-021c-42d9-9eaf-939453019443_large.jpg'
      },
      {
        id: 53,
        name: '1980s Vintage Black Floral Pleated Dress & Belt',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/aa522bb3-3700-4926-99e4-d245fb7795d5_large.jpg'
      },
      {
        id: 54,
        name: 'Vintage Jacquard Sleeveless 1990s Black & Red Evening Dress',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/ac98ed6e-4be0-4874-8a6b-5ad52185e9d0_large.jpg'
      },
      {
        id: 55,
        name: 'Vintage Medium Wash Denim Dress - L',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/0e389f38-994f-4222-8307-d164a704c6af_large.jpg'
      },
      {
        id: 56,
        name: 'Vintage Floral Print Strappy Dress - M',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/d450ef1f-c5d1-4c08-ac83-a13613d7a96f_large.jpg'
      },
      {
        id: 57,
        name: 'Vintage Floral Print Dress - S',
        cost: '100kr',
        category:'WomensDress',
        image:
          'https://marketplace-images.asos.com/user/20bf1add-2651-438a-9835-06d71676c62c_large.jpg'
      },

      {
        id: 58,
        name: 'Platform loafers faux leather white thread boots in black',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/c25f7b0c-2277-46a8-a61d-cd8b90ec67e7_large.jpg'
      },
      {
        id: 59,
        name: 'Faux leather sneakers retro classic trainers in white',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/7c3f1990-ad0b-4742-bdec-8533282cc88f_large.jpg'
      },
      {
        id: 60,
        name: 'Vintage Brown Leather Mid Heeled Shoes with Bow Detail UK3.5',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/117acada-e416-4768-b261-10d1da5695cf_large.jpg'
      },
      {
        id: 61,
        name: 'Nike Air Force 1 Air Force womens shoes',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/f3595e97-1de6-45a3-8335-5fdda1a4675b_large.jpg'
      },
      {
        id: 62,
        name: 'Customized trainers check laces cat patch sneakers in black',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/65fa126f-a7f5-49f7-9023-aa8e91e3cf05_large.jpg'
      },
      {
        id: 63,
        name: 'Black Platform Zipper Lace Up Buckle Ankle Boots',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/85f3efce-9a73-47be-b3dc-398139b583d6_large.jpg'
      },
      {
        id: 64,
        name: 'Customized peace trainers punk beads sneakers in white',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/fc6687be-a78a-484f-87ec-ca678755c8de_large.jpg'
      },
      {
        id: 65,
        name: 'Customized smile trainers love diamonds sneakers in white',
        cost: '100kr',
        category:'WomensShoes',
        image:
          'https://marketplace-images.asos.com/user/951984d8-dbae-4e89-9f88-041deceef6b2_large.jpg'
      },

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
    },
    JacketsProducts(state) {
      return state.products.filter(product => product.category === 'Jackets');
    },
    ShirtsProducts(state) {
      return state.products.filter(product => product.category === 'Shirts');
    },
    TracksuitsProducts(state) {
      return state.products.filter(product => product.category === 'Tracksuits');
    },

    WomensJacketsProducts(state) {
      return state.products.filter(product => product.category === 'WomensJackets');
    },
    WomensJeansProducts(state) {
      return state.products.filter(product => product.category === 'WomensJeans');
    },
    WomensShoesProducts(state) {
      return state.products.filter(product => product.category === 'WomensShoes');
    },
    WomensDressProducts(state) {
      return state.products.filter(product => product.category === 'WomensDress');
    },
  }
});

export default store ;
