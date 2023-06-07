import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { CN, EN, JA } from '~/locales'
import { defaultVAdmireConfig } from '~/vadmire.config'

const { defaultLocales } = defaultVAdmireConfig()

const currentLocale = localStorage.getItem('locale') || defaultLocales

const messages = {
  zh_CN: { ...CN },
  en_US: { ...EN },
  ja_JP: { ...JA },
}

export const useI18n = (app: App) => {
  app.use(createI18n({
    messages,
    locale: currentLocale,
    fallbackLocale: defaultLocales,
    allowComposition: true,
  }))
}
