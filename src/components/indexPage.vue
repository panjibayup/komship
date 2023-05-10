<template>
  <div>
    <BerandaPage />
    <LayananPage />
    <BenefitPage />
    <RecomendasiPage />
    <AlurPengiriman />
    <FiturPage />
    <TestimoniPage />
    <FaqPage />
  </div>
</template>
<script>
import BerandaPage from "./BerandaPage.vue";
// import HeaderPage from "./HeaderPage.vue";
import LayananPage from "./LayananPage.vue";
import BenefitPage from "./BenefitPage.vue";
import RecomendasiPage from "./RecomendasiPage.vue";
import AlurPengiriman from "./AlurPengiriman.vue";
import FiturPage from "./FiturPage.vue";
import TestimoniPage from "./TestimoniPage.vue";
import FaqPage from "./FaqPage.vue";

export default {
  name: "App",
  components: { BerandaPage, LayananPage, BenefitPage, RecomendasiPage, AlurPengiriman, FiturPage, TestimoniPage, FaqPage },
};
</script>
