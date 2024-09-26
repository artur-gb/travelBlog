import { createApp } from "vue";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";

import { buildRouter } from "./routes/root";

const router = buildRouter();
const app = createApp(App);

app.use(router);
app.mount("#app");
