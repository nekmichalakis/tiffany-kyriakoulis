import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './components/App'
import './index.css'

import global_en from './translations/en/global.json'
import global_gr from './translations/gr/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'gr',
  resources: {
    en: {
      global: global_en
    },
    gr: {
      global: global_gr
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
)
