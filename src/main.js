import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router";
import __tiles from "../src/components/tiles"

const app = createApp(App)
app.use(Router)
app.component('tiles', __tiles)
app.mount("#app")