<template>
  <HeaderPage />
  <router-view></router-view>
  <FooterPage />
</template>

<script lang="js">
// import BerandaPage from "./components/BerandaPage.vue";
import HeaderPage from "./components/HeaderPage.vue";
// import LayananPage from "./components/LayananPage.vue";
// import BenefitPage from "./components/BenefitPage.vue";
// import RecomendasiPage from "./components/RecomendasiPage.vue";
// import AlurPengiriman from "./components/AlurPengiriman.vue";
// import FiturPage from "./components/FiturPage.vue";
import FooterPage from "./components/FooterPage.vue";
// import TestimoniPage from "./components/TestimoniPage.vue";
// import FaqPage from "./components/FaqPage.vue";

export default {
  name: "App",
  components: { HeaderPage, FooterPage },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}
:root {
  --primary-color: #fe783a;
}
</style>
