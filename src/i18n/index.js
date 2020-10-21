import i18n from 'i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18n.init({
  lng: 'es',
  initImmediate: false,
  fallbackLng: 'es'
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
