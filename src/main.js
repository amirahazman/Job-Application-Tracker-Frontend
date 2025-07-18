import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/main.css"

import Card from "@/components/Card.vue"

const app = createApp(App)
app.component('card', Card)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

