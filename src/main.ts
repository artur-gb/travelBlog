import { createApp } from "vue";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";

import { ITravelBlogServiceKey } from "./services/ITravelBlogService";
import { ApiTravelBlogService } from "./services/ApiTravelBlogService";

import { buildRouter } from "./routes/root";
import { createPinia } from "pinia";

const router = buildRouter();
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.provide(ITravelBlogServiceKey, new ApiTravelBlogService);
app.mount("#app");
