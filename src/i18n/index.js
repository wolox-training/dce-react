import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18n.use(initReactI18next).init({
  lng: 'es',
  initImmediate: false,
  fallbackLng: 'es'
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
