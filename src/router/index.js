import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "game" */ "@/views/GameView.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "@/views/MapEditorView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
