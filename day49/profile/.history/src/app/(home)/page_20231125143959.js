'use client'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import translationVie from '../../../public/assets/vi/translation.json'
import translationEn from '../../../public/assets/en/translation.json'
import ProFile from '@/Components/ProFile/ProFile'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      vi: {
        translation: translationVie
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
export default function Home() {
  const { t } = useTranslation();
  return (
    <ProFile />

  )
}
