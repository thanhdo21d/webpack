import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from '~/locales/en/home.json'
import PRODUCT_EN from '~/locales/en/product.json'
import HOME_VI from '~/locales/vi/home.json'
import PRODUCT_VI from '~/locales/vi/product.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import Cookies from 'js-cookie'

export const locales = {
  EN: 'English',
  VN: 'Tiếng Việt'
} as const
export const resources = {
  EN: {
    home: HOME_EN,
    product: PRODUCT_EN
  },
  VN: {
    home: HOME_VI,
    product: PRODUCT_VI
  }
} as const
export const defaultNS = 'product'
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: Cookies.get('language'),
    ns: ['home', 'product'],
    fallbackLng: 'VN',
    defaultNS,
    detection: {
      order: ['cookie', 'querystring', 'localStorage'],
      lookupCookie: 'denso_wws_language',
      caches: ['cookie'] // chon cookie là language chinh
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
export default i18n
