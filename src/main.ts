import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { router } from '~/router'
import { permissionDirective } from '~/directives'
import '~/styles/index.css'

import CN from '~/locales/cn.json'
import EN from '~/locales/en.json'

export type LanguageSchema = typeof EN

const i18n = createI18n({
  legacy: false,
  locale: 'CN',
  fallbackLocale: 'CN',
  globalInjection: true,
  messages: {
    CN,
    EN,
  },
})

const app = createApp(App)

// register permission directive
permissionDirective(app)

app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount('#app')
