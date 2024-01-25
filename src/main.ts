import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import './assets/main.css'

import App from './App.vue'
// import router from './routers/index';

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus, {
    size: 'small', // 全局配置大小
    zIndex: 3000,
    // locale: zhCn // 国际化配置
})
app.use(pinia)
app.mount('#app')