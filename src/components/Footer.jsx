import React from 'react'
import { useTranslation } from 'react-i18next'

import './Footer.css'

const Footer = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <>
    <div className='footerContainer'>
        <div className="footerTitle">{t('footer.nameCredentials')}</div>
        <p>{t('footer.email')}</p>
        <p>{t('footer.phone')}</p>
    </div>
    <p className="credits">
        {t('footer.footNote')}
    </p>
    </>
  )
}

export default Footer