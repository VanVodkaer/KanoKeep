import KanoMain from "@/views/KanoMain.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: KanoMain }],
});

export default router;
