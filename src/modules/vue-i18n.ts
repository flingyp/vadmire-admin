import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import CN from '~/locales/cn.json'
import EN from '~/locales/en.json'

export const useVueI18n = (app: App) => {
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
  app.use(i18n)
}
