import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

export const HTTP = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string | undefined
})

app.use(router)
app.use(store)

app.mount('#app')
