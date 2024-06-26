import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import localesResourse from '../locales/index';

var detect = 'vi';
const languageDetector = {
  type: 'languageDetector',
  detect: () => detect,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: localesResourse,
    fallbackLng: 'vi',
    compatibilityJSON: 'v3',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

i18n.on('languageChanged', lng => {
  detect = lng;
});

export default i18n;
