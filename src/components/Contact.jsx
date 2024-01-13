import React from 'react'
import { useTranslation } from 'react-i18next'

import './Contact.css'

const Contact = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div>
      <section className="contactTop">
        {t('contact.title')}
      </section>

      <section className="contactInfo">
        <div className="contactTitle">{t('contact.infoTitle')}</div>
        <div className="contactUnder">{t('contact.iDoMyBest')}</div>
        <p>{t('footer.email')}</p>
        <p>{t('footer.phone')}</p>
      </section>

      <section className="contactMap">
        <div className="mapContainer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6875344983223!2d23.908277212193497!3d37.750474113441285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1edabef3bee31%3A0x6cd642474798b825!2sPosidonos%2021%2C%20Saronida%20190%2013!5e0!3m2!1sen!2sgr!4v1703782897050!5m2!1sen!2sgr" style={{border:0}} allowFullScreen="" loading="lazy" className='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="mapInfo">
          <div className="myOffice">{t('contact.office')}</div>
          <p>{t('contact.addr1')}</p>
          <p>{t('contact.addr2')}</p>
          <div className="hours">{t('contact.hours')}</div>
          <p>{t('contact.hours1')}</p>
          <p>{t('contact.hours2')}</p>
        </div>
      </section>
    </div>
  )
}

export default Contact