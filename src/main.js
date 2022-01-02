import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GlobalComponent from "./views/Global";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

Vue.component(GlobalComponent.name, GlobalComponent);

library.add(faFontAwesome);
library.add(faCoffee, faChild, faCircle, faArchive, faUserSecret);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
