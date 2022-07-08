const app = Vue.createApp({
  data() {
    return {
      images: [
        "https://i.imgur.com/rmydi2w.jpg",
        "https://i.imgur.com/rAFqZiM.jpg",
        "https://i.imgur.com/Fpw5KKY.jpg",
        "https://i.imgur.com/IbYRmoW.jpg",
        "https://i.imgur.com/9poVrgA.jpg",
      ],
      currentImage: 0,
    };
  },
  methods: {},
});

app.mount("#app");
