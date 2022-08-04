<template>
  <Home />
  <Footer />
</template>

<script>
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";
export default {
  
  components: {
    Home,
    Footer,
  },

  name: "App",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
