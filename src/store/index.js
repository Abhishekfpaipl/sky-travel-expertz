import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Sheer Pullover T-shirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        price: 2300,
        collecton: 'test 1212',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        ]
      },
      {
        id: 2,
        name: 'Straight Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        price: 2490,
        collecton: 'test 11',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        ]
      },
      {
        id: 3,
        name: 'Jacquard Denim Jacket with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        price: 7990,
        collecton: 'test 32',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        ]
      },
      {
        id: 4,
        name: 'Pocket Wide Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        price: 2290,
        collecton: 'test 12',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        ]
      },
      {
        id: 5,
        name: 'Flare Leg Denim Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        price: 3690,
        collecton: 'test 6',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        ]
      },
      {
        id: 6,
        name: 'Pocket Denim Jumpsuit with Refelctive Binding',
        img: 'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        price: 7990,
        collecton: 'test 5',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        ]
      },
      {
        id: 7,
        name: 'Patchwork Denim Top with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        price: 4290,
        collecton: 'test 4',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        ]
      },
      {
        id: 8,
        name: 'Buttoned Denim A-Line Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        price: 3290,
        collecton: 'test 1',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        ]
      },
      {
        id: 9,
        name: 'Seam Denim Straight Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        price: 2690,
        collecton: 'test 2',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        ]
      },
      {
        id: 10,
        name: 'Jumpsuit',
        img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        price: 3990,
        collecton: 'test 3',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        ]
      },
    ],

    tradeFairs: [
      {
        id: 1,
        title: "SIGN & LED China 2024",
        slug: "SIGN-&-LED-China-2024",
        date: "19-21 Sept 2024",
        price: "1,09,000",
        image: "https://rctrips.com/assets/sign-china-thumb.jpg",
      },
      {
        id: 2,
        title: "RubberTech China 2024",
        slug: "RubberTech-China-2024",
        date: "19-21 Sept 2024",
        price: "1,09,000",
        image: "https://rctrips.com/assets/rubbertech-thumb.jpg",
      },
      {
        id: 3,
        title: "Wire & Tube China 2024",
        slug: "Wire-&-Tube-China-2024",
        date: "25-28 Sept 2024",
        price: "1,20,000",
        image: "https://rctrips.com/assets/wire-tube-thumb.jpg",
      },
      {
        id: 4,
        title: "CPHI Milan 2024",
        slug: "CPHI-Milan-2024",
        date: "8-10 Oct 2024",
        price: "1,13,000",
        image: "https://rctrips.com/assets/cphi-milan-thumb.jpg",
      },
      // {
      //   id: 5,
      //   title: "CMEF China 2024",
      //   slug: "CMEF-China-2024",
      //   date: "12-15 Oct 2024",
      //   price: "1,00,000",
      //   image: "https://rctrips.com/assets/cmef-healtcare.jpg",
      // },
      // {
      //   id: 6,
      //   title: "ITMA ASIA & CITME 2024",
      //   slug: "ITMA-ASIA-&-CITME-2024",
      //   date: "14-18 Oct 2024",
      //   price: "1,06,000",
      //   image: "https://rctrips.com/assets/cphi-milan-thumb.jpg",
      // },
      // {
      //   id: 7,
      //   title: "Canton Fair China 2024",
      //   slug: "Canton-Fair-China-2024",
      //   date: "15-19 23-27 Oct 2024",
      //   price: "1,15,000",
      //   image: "https://rctrips.com/assets/canton-fair.jpg",
      // },
      // {
      //   id: 8,
      //   title: "Fenestration Bau 2024",
      //   slug: "Fenestration-Bau-2024",
      //   date: "16-19 Oct 2024",
      //   price: "1,07,000",
      //   image: "https://rctrips.com/assets/fenestration-thumb.jpg",
      // },
      // {
      //   id: 9,
      //   title: "Glasstec Dusseldorf 2024",
      //   slug: "Glasstec-Dusseldorf-2024",
      //   date: "22-24 Oct 2024",
      //   price: "1,06,000",
      //   image: "https://rctrips.com/assets/glasstec-3.jpg",
      // },
      // {
      //   id: 10,
      //   title: "Medica Düsseldorf 2024",
      //   slug: "Medica-Düsseldorf-2024",
      //   date: "10-15 10-17 Nov 2024",
      //   price: " 2,10,000",
      //   image: "https://rctrips.com/assets/medica-thumb.jpg",
      // },
    ],
    itinerary: [
      {
        name: "Itninerary",
        description: "",
      },
      {
        name: "Facts & Figures",
        description: "",
      },
      {
        name: "Hotel",
        description: "",
      },
      {
        name: "Flight",
        description: "",
      },
      {
        name: "Visa",
        description: "",
      },
      {
        name: "Inclusion",
        description: "",
      },
      {
        name: "Exclusion",
        description: "",
      },
      {
        name: "Term & Conditions",
        description: "",
      },
    ],
  },
  getters: {
    getProducts: state => state.products,
    getTrades: state => state.tradeFairs,
    getItinerary: state => state.itinerary
  },
  mutations: {
    createProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
  },
  actions: {
    createProduct({ commit }, product) {
      commit('createProduct', product);
    },
    editProduct({ commit }, product) {
      commit('editProduct', product);
    }
  },
  modules: {},
});
