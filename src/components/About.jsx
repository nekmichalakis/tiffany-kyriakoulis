import React from 'react'

import fourthImg from '../assets/fourth.jpg'

import './About.css'

const About = () => {
  return (
    <>
    <section className='aboutSection'>
      <div className="aboutContainer">
        <div className="textContainer">
          <div className="overAbout">
            Your name and credentials can go here.
          </div>
          <h2>Welcome!</h2>
          <p>
            Anigozanthos chrysanthemum chenpodium. Triteleia agapanthus spirea callistephus false false genista platycodon eryngiumm eurphorbia chamaelaucium kniphofia. Vulgare tanacetum symphoricarpos viburnum dianthus leucospermum moluccella calendula prunus cosmea vulgare chelone muscari cattleya nerine leucadendron. Lysimachia chrysanthemum. Aconitum
          </p>
          <div className="aboutButton">
            SCHEDULE A SESSION
          </div>
        </div>
        <div className="aboutImgContainer">
          <img src={fourthImg} alt="about" className='aboutImg' />
        </div>
      </div>
    </section>

    <section className="aboutSecond">
      <div className="aboutSecondContainer">
        <h2>My Story</h2>
        <p>I was born in Oxford, England and grew up in Athens, Greece. I am bi-cultural and bilingual. I attended an international school where from a young age, I was exposed to a plethora of cultures and am therefore able to appreciate the importance of culture in my line of work. I have been a registered psychologist since 2013. I was awarded my Bsc Psychology/Sociology from the University of Surrey, Roehampton in London. Following that, I completed my postgraduate degree in Health Psychology at the University of Stirling in Scotland. Currently, I am undergoing training as a systemic psychotherapist at Logos Psychis- the Training and Research Institute for Systemic Psychotherapy.  I am being trained in the S.A.N.E. (System, Attachment, Narrative, Encephalon) model, pioneered by its founding members and am bound by the Institute’s code of ethical conduct. 
        Furthermore, I am a certified Hatha, Vinyasa, Aerial and Yin yoga teacher and I use an assortment of techniques from these kinds of yoga when dealing with symptoms caused by anxiety, depression, panic attacks and PTSD. I also use them to help build self-confidence and self-trust. 
        I have attended numerous seminars and have worked for the Council of Glyfada as well as in various shelters that house vulnerable populations.
        I offer sessions to adolescents and adults 
        as well as couple and family therapy. Sessions last 50 mins and are conducted weekly or fortnightly in either English or Greek.</p>
      </div>
    </section>
    </>
  )
}

export default About