<!-- Please remove this file from your project -->
<template>
  <div>
    <pre>{{ products }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async getData() {
      const result = await this.$axios.$get("/products");

      this.products = result;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
