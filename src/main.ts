import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '~/router'
import '~/styles/tailwind.css'
import '~/styles/theme.css'
import '~/styles/reset.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
