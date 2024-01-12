import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import faceImg from '../assets/faceSquare.jpg'
import fourthImg from '../assets/fourth.jpg'

import './Home.css'

const Home = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div className='mainContainer'>

      <section className='topSection'>
        <div className="topContainer">
          <div className="overTitle">YOUR TOP SEO KEYWORDS & LOCATION GO HERE</div>
          <div className="title">The short and compelling client-centered headline can go right here.</div>
          <div className="buttonContainer">
              <Link to='/contact' className="button bookButton">BOOK A SESSION</Link>
          </div>
        </div>
      </section>

      <section className='secondSection'>
        <div className="secondContainer">
            <div className="secondImageContainer">
              <img src={faceImg} alt="face" className='secondImage' />
            </div>
            <div className="secondTextBox">
                <h2 className="secondTitle">An empathic client-centered statement.</h2>
                <p>{t('home.part1')}</p>
            </div>
        </div>
      </section>

      <section className='thirdSection'>
        <div className="thirdContainer">
            <h2>
              Ideally, you want to work something in with your keywords in a heading two size, towards the top.
            </h2>
            <p>
              Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
          <div className="sliderBox">
            ❁
          </div>
        </div>
      </section>

      <section className='fourthSection'>
        <div className="fourthContainer">
          <div className="fourthTextBox">
            <h2>
              Here is where you put a short blurb to introduce yourself to your reader.
            </h2>
            <p className="fourthUnder">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="fourthButton">
              MORE ABOUT ME
            </div>
          </div>
          <div className="fourthImgContainer">
            <img src={fourthImg} alt="fourth" className='fourthImg' />
          </div>
        </div>
      </section>

      <section className="callToAction">
        <h2 className="callTitle">
          Your “call-to-action.” will go here.
        </h2>
        <p className='callUnder'>
          A simple statement that tells the reader what you’d like them to do. 
        </p>
        <div className="callButton">GET IN TOUCH</div>
      </section>

    </div>
  )
}

export default Home