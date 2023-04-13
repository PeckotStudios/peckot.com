import { createApp } from 'vue'
import Notifications from 'notiwind'
import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App);

app.use(router)
app.use(Notifications)
app.mount('#app')
