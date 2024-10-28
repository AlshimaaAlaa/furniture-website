import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from './Translate/Ar.json';
import enTranslation from './Translate/En.json';
function App() {
  i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "ar",
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
  return (
    <div>
      
    </div>
  );
}
export default App;