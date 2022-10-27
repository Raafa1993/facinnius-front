import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSon from './translation/en.json'
import ptBRJson from './translation/ptBR.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'br', 
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJSon,
    br: ptBRJson
  }
})

export default i18n;
