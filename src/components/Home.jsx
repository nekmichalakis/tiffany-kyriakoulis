import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import faceImg from "../assets/faceSquare.jpg";
import fourthImg from "../assets/fourth.jpg";

import Tiffany1 from "../assets/Tiffany.jpg";
import Tiffany8 from "../assets/Tiffany-8.jpg";
import Tiffany9 from "../assets/Tiffany-9.jpg";
import Tiffany11 from "../assets/Tiffany-11.jpg";
import Tiffany12 from "../assets/Tiffany-12.jpg";

import "./Home.css";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div className="mainContainer">
      <section className="topSection">
        <div className="topContainer">
          <Fade>
            <div className="overTitle">
              YOUR TOP SEO KEYWORDS & LOCATION GO HERE
            </div>
          </Fade>
          <Fade delay={300}>
            <div className="title">
              The short and compelling client-centered headline can go right
              here.
            </div>
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
                BOOK A SESSION
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
            <Fade>
              <h2 className="secondTitle">
                An empathic client-centered statement.
              </h2>
            </Fade>
            <Fade delay={300}>
              <p>{t("home.part2")}</p>
            </Fade>
          </div>
        </div>
      </section>

      <section className="thirdSection">
        <div className="thirdContainer">
          <Fade>
            <h2>
              Ideally, you want to work something in with your keywords in a
              heading two size, towards the top.
            </h2>
          </Fade>
          <Fade delay={300}>
            <p>{t("home.part3")}</p>
            <div className="sliderBox">❁</div>
          </Fade>
        </div>
      </section>

      <section className="fourthSection">
        <div className="fourthContainer">
          <div className="fourthTextBox">
            <Fade>
              <h2>
                Here is where you put a short blurb to introduce yourself to
                your reader.
              </h2>
            </Fade>
            <Fade delay={300}>
              <p className="fourthUnder">{t("home.part1")}</p>
            </Fade>
            <Fade>
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
                MORE ABOUT ME
              </Link>
            </Fade>
          </div>
          <Fade>
            <div className="fourthImgContainer">
              <img src={Tiffany1} alt="fourth" className="fourthImg" />
            </div>
          </Fade>
        </div>
      </section>

      <section className="callToAction">
        <Fade>
          <h2 className="callTitle">Your “call-to-action.” will go here.</h2>
        </Fade>
        <Fade delay={300}>
          <p className="callUnder">
            A simple statement that tells the reader what you&apos;d like them
            to do.
          </p>
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
            GET IN TOUCH
          </Link>
        </Fade>
      </section>
    </div>
  );
};

export default Home;
