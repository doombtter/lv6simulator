import { createApp, ref } from 'vue'
import App from './App.vue'
import Router from "./router";
import __tiles from "../src/components/tiles"
import __praise from "../src/components/praise"
import __checkbox from "../src/components/checkbox"
import __meteorbtn from "../src/components/meteorbtn"
import __greet from "../src/components/greet"
import __resetbtn from "../src/components/resetbtn"
import store from "./store"
import VueClipboard from 'vue3-clipboard'
//vuex 설치
//axios 설치
//vue3-clipboard 설치

//Vue app 생성
const app = createApp(App)

// service 선언
app.use(Router)
app.use(store)
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true
})

//component 선언
app.component('tiles', __tiles)
app.component('praise', __praise)
app.component('checkbox', __checkbox)
app.component('meteorbtn', __meteorbtn)
app.component('greet', __greet)
app.component('resetbtn', __resetbtn)

app.mount("#app")