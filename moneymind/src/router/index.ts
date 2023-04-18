import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import PanelView from "@/views/PanelView.vue";
import ComparatorView from "@/views/ComparatorView.vue";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/panel",
      name: "panel",
      component: PanelView,
    },
    {
      path: "/comparator",
      name: "comparator",
      component: ComparatorView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
