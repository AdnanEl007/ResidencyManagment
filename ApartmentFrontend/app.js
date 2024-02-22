const routes = [
  { path: "/home", component: home },
  { path: "/residency", component: residency },
  { path: "/apartment", component: apartment },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
