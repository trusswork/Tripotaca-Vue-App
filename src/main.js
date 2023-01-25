import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
// import store from "./store/store";
import store from './store'

loadFonts();

createApp(App).use(store)
.use(store)
.use(vuetify)
.mount("#app");
