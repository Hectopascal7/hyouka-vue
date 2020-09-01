import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Argon from './plugins/argon-kit';

Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
