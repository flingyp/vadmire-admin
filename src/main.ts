import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '~/router'
import { permissionDirective } from '~/directives'
import '~/styles/index.css'

const app = createApp(App)

// register permission directive
permissionDirective(app)

app.use(router)
app.use(createPinia())

app.mount('#app')
