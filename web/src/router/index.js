import KanoMain from "@/views/KanoMain.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/:pathMatch(.*)*", component: KanoMain }], //匹配所有路由
});

export default router;
