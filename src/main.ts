import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

createApp(App).use(createVuestic()).mount('#app')
