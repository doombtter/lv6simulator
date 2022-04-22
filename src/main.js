import { createApp, ref } from 'vue'
import App from './App.vue'
import Router from "./router";
import __tiles from "../src/components/tiles"
import __praise from "../src/components/praise"
import __checkbox from "../src/components/checkbox"
import store from "./store"

const app = createApp(App)
app.use(Router)
app.use(store)
app.component('tiles', __tiles)
app.component('praise', __praise)
app.component('checkbox', __checkbox)
app.mount("#app")