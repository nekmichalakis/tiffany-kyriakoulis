import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import Tiffany11 from '../assets/Tiffany-11.jpg'

import './About.css'

const About = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="textContainer">
            <Fade delay={300}>
              <h3>{t("about.story4")}</h3>
              <Link
                to="/contact"
                className="aboutButton"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {t("about.schedule")}
              </Link>
            </Fade>
          </div>
          <Fade>
            <div className="aboutImgContainer">
              <img src={Tiffany11} alt="about" className="aboutImg" />
            </div>
          </Fade>
        </div>
      </section>

      <section className="aboutSecond">
        <div className="aboutSecondContainer">
          <Fade>
            <h2>{t("about.story")}</h2>
          </Fade>
          <Fade delay={300}>
            <p className="aboutText">{t("about.story1")}</p>
          </Fade>
          <Fade delay={300}>
            <p className="aboutText">{t("about.story2")}</p>
          </Fade>
          <Fade delay={300}>
            <p className="aboutText">{t("about.story3")}</p>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default About