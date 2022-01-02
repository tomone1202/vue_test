import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

let tempPush = VueRouter.prototype.push;
let tempReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, res, rej) {
  if (res && rej) {
    console.log("tempPush :>> ", tempPush);
    tempPush.call(this, location, res, rej);
  } else {
    console.log("tempPush :>> ", tempPush);
    tempPush.call(
      this,
      location,
      (rej) => {},
      (error) => {}
    );
  }
};
VueRouter.prototype.replace = function (location, res, rej) {
  if (res && rej) {
    tempReplace.call(this, location, res, rej);
  } else {
    tempReplace.call(
      this,
      location,
      (rej) => {},
      (error) => {}
    );
  }
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Search/:token?",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
    // props: true,
    // props: { testA: "ha", testB: "ma" },
    props: params => ({
      testB: "testB從router內寫死",
      token: params.params.token,
      query: params.query.token,
    }),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
