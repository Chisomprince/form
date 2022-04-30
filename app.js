Vue.createApp({
  data() {
    return {
      title: "Flint",
      products: [],
      grid2x: false,
      displayGrid: true,
    };
  },
  methods: {
    async fetchProducts() {
      const res = await fetch(
        "https://random-data-api.com/api/commerce/random_commerce?size=8"
      );
      const data = await res.json();
      console.log(data);
      this.products = data;
    },

    setGridSize() {
      this.displayGrid = true;
      this.grid2x = !this.grid2x;
      this.gridSize = 4;
    },

    toggleGrid() {
      this.displayGrid = !this.displayGrid;
    },
  },
  created() {
    this.fetchProducts();
  },
}).mount("#app");
