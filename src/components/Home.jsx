import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import Tiffany1 from "../assets/Tiffany.jpg";
import Tiffany12 from "../assets/Tiffany-12.jpg";

import "./Home.css";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div className="mainContainer">
      <section className="topSection">
        <div className="topContainer">
          <Fade>
            <div className="overTitle">{t("header.overMain")}</div>
          </Fade>
          <Fade delay={300}>
            <div className="title">{t("header.main")}</div>
          </Fade>
          <Fade>
            <div className="buttonContainer">
              <Link
                to="/contact"
                className="button bookButton"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {t("header.headButton")}
              </Link>
            </div>
          </Fade>
        </div>
      </section>

      <section className="secondSection">
        <div className="secondContainer">
          <Fade>
            <div className="secondImageContainer">
              <img src={Tiffany12} alt="face" className="secondImage" />
            </div>
          </Fade>
          <div className="secondTextBox">
            <Fade delay={300}>
              <h3>{t("home.part2")}</h3>
            </Fade>
          </div>
        </div>
      </section>

      <section className="thirdSection">
        <div className="thirdContainer">
          <Fade>
            <h3>{t("home.part31")}</h3>
          </Fade>
          <Fade delay={300}>
            <h4>{t("home.part32")}</h4>
          </Fade>
          <Fade delay={800}>
            <h2 className="sliderBox">❁</h2>
          </Fade>
        </div>
      </section>

      <section className="fourthSection">
        <div className="fourthContainer">
          <div className="fourthTextBox">
            <Fade delay={300}>
              <h3>{t("home.part1")}</h3>
            </Fade>
            <Fade delay={300}>
              <Link
                to="/about"
                className="fourthButton"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {t("home.more")}
              </Link>
            </Fade>
          </div>
          <Fade>
            <div className="fourthImgContainer">
              <img src={Tiffany1} alt={'portrait'} className="fourthImg" />
            </div>
          </Fade>
        </div>
      </section>

      <section className="callToAction">
        <Fade>
          <h2 className="callTitle">{t("header.cta1")}</h2>
        </Fade>
        <Fade delay={300}>
          <p className="callUnder">{t("header.cta2")}</p>
        </Fade>
        <Fade delay={300}>
          <Link
            to="/contact"
            className="callButton"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("header.ctaButton")}
          </Link>
        </Fade>
      </section>
    </div>
  );
};

export default Home;
