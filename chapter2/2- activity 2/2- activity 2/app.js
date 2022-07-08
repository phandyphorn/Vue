const app = Vue.createApp({
  data() {
    return {
      text: "",
      username: "",
      age: 0,
      arr: ['a','b','c','d','e','f'],
      array: [],
      something: "",
      link: 'https://google.com',
      image: 'https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg?w=2000%5C'
    };
  },

  methods: {
    add() {
      this.array.push(this.something)
    }
  }
});

app.mount("#app");
