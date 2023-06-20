import { createApp } from "vue";
import App from "./App.vue";
import store from "../stores/modules/index.js";
import router from "../routers/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
