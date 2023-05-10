import { createRouter, createWebHistory } from "vue-router";

import About from "../components/TentangKami.vue";
import Ongkir from "../components/CekOngkir.vue";
import Home from "../components/indexPage.vue";
import Terms from "../components/SyaratKetentuan.vue";
import Privasi from "../components/PrivasiPage.vue";
import Faq from "../components/FaqPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { toTop: true },
  },
  {
    path: "/about",
    component: About,
    meta: { toTop: true },
  },
  {
    path: "/terms",
    component: Terms,
    meta: { toTop: true },
  },
  {
    path: "/privacy",
    component: Privasi,
    meta: { toTop: true },
  },
  {
    path: "/faq",
    component: Faq,
    meta: { toTop: true },
  },
  {
    path: "/ongkir",
    component: Ongkir,
    meta: { toTop: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;

    return scroll;
  },
});

export default router;
