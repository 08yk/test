
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { store } from "@/store";
import "../src/assets/css/commss.scss";   
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router);
app.use(store);
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.mount("#app");
