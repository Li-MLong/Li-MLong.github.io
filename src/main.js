import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "./router/permission";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store);
app.use(router);
app.use(ElementUI);
app.mount("#app");