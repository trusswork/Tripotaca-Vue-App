import { createStore } from "vuex";

export default createStore({
  state: {
    images: [
      {
        id: 1,
        imageUrl: require("../assets/ibis.jpg"),
        hotel: "Ibis Styles",
        location: "Nairobi",
        price: "$250",
        people: "5 Adults",
        rating: [1, 2, 3, 4, 5],
      },

      {
        id: 2,
        imageUrl: require("../assets/social.jpg"),
        hotel: "The Social House",
        location: "Nairobi",
        price: "$200",
        people: "5 Adults",
        rating: [
          { id: 1, rate: 1 },
          { id: 2, rate: 2 },
          { id: 3, rate: 3 },
          { id: 4, rate: 4 },
          { id: 5, rate: 5 },
        ],
      },
      {
        id: 3,
        imageUrl: require("../assets/prideinn.jpg"),
        hotel: "Pride inn",
        location: "Nairobi",
        price: "$180",
        people: "4 Adults",
        rating: [
          { id: 1, rate: 1 },
          { id: 2, rate: 2 },
          { id: 3, rate: 3 },
          { id: 4, rate: 4 },
        ],
      },
      {
        id: 4,
        imageUrl: require("../assets/elewana.jpeg"),
        hotel: "elewana elsa’s kopje",
        location: "Meru",
        price: " $230",
        people: "3 Adults",
        rating: [
          { id: 1, rate: 1 },
          { id: 2, rate: 2 },
          { id: 3, rate: 3 },
        ],
      },
      {
        id: "5",
        imageUrl: require("../assets/nakuru.jpg"),
        hotel: "lake Nakuru lodge",
        location: "Nakuru",
        price: "$250",
        people: "4 Adults",
        rating: [
          { id: 1, rate: 1 },
          { id: 2, rate: 2 },
          { id: 3, rate: 3 },
          { id: 4, rate: 4 },
        ],
      },
    ],
    packages: [
      {
        id: 1,
        imageUrl: require("../assets/zebra.jpg"),
        title: "Parks",
      },
      {
        id: 1,
        imageUrl: require("../assets/hiking.jpg"),
        title: "Outdoor",
      },
      {
        id: 1,
        imageUrl: require("../assets/mombasa.jpg"),
        title: "Towns",
      },
      {
        id: 1,
        imageUrl: require("../assets/paint.jpg"),
        title: "Events",
      },
      {
        id: 1,
        imageUrl: require("../assets/town.jpg"),
        title: "Culture",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
