import React from 'react'
import { useTranslation } from 'react-i18next'

import fourthImg from '../assets/fourth.jpg'

import './About.css'

const About = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <>
    <section className='aboutSection'>
      <div className="aboutContainer">
        <div className="textContainer">
          <div className="overAbout">
            Your name and credentials can go here.
          </div>
          <h2>{t('about.welcome')}</h2>
          <p>{t('about.story4')}</p>
          <div className="aboutButton">
            {t('about.schedule')}
          </div>
        </div>
        <div className="aboutImgContainer">
          <img src={fourthImg} alt="about" className='aboutImg' />
        </div>
      </div>
    </section>

    <section className="aboutSecond">
      <div className="aboutSecondContainer">
        <h2>{t('about.story')}</h2>
        <p>{t('about.story1')}</p>
        <p>{t('about.story2')}</p>
        <p>{t('about.story3')}</p>
      </div>
    </section>
    </>
  )
}

export default About