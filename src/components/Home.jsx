import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <div className='mainContainer'>
      
      <section className='topSection'>
        <div className="overTitle">YOUR TOP SEO KEYWORDS & LOCATION GO HERE</div>
        <div className="title">The short and compelling client-centered headline can go right here.</div>
        <div className="buttonContainer">
            <div className="button bookButton">BOOK A SESSION</div>
        </div>
      </section>

      <section className='secondSection'>
        <div className="secondBox">
            <div className="secondImage"></div>
            <div className="secondTextBox">
                <div className="secondTitle">An empathic client-centered statement.</div>
                <div className="secondUnder">Engage your audience broadly, but enough so that they click for more details. Use “You” statements instead of “I” statements or passive language (e.g.  instead of “people who feel…” say “you feel”). </div>
            </div>
        </div>
      </section>

      <section className='thirdSection'>
        <div className="thirdTextBox">
            <div className="thirdTitle">
              Ideally, you want to work something in with your keywords in a heading two size, towards the top.
            </div>
            <div className="thirdUnder">
              Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </div>
          <div className="sliderBox">
            ❁
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home