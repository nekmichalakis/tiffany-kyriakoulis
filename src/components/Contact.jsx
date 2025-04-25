import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Tiffany9 from "../assets/Tiffany-9.jpg";
import office1 from "../assets/office1.jpeg";
import office2 from "../assets/office2.jpeg";
import office3 from "../assets/office3.jpeg";

import "./Contact.css";
import {useState} from "react";

const Contact = () => {
  const [t] = useTranslation("global");

  const [map, setMap] = useState("anavyssos");

  return (
    <div>
      <section className="contactTop">
        <Fade delay={200}>
          <div className='contactGetin'>{t("contact.title")}</div>
        </Fade>
      </section>

        <section className="contactInfo">
            <Fade>
                <div className="contactTitle">{t("contact.infoTitle")}</div>
            </Fade>
            <Fade delay={300}>
                <p>{t("footer.email")}</p>
                <p>{t("footer.phone")}</p>
                <p>{t("contact.or")}</p>
            </Fade>
            <Fade>
                <div className="contactTitle">{t("contact.visitOffice")}</div>
            </Fade>

            <div className="carouselContainer">
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={5000}>
                    <div>
                        <img src={office1} className="contactImg" alt={"contact image"}/>
                    </div>
                    <div>
                        <img src={office2} className="contactImg" alt={"contact image"}/>
                    </div>
                    <div>
                        <img src={office3} className="contactImg" alt={"contact image"}/>
                    </div>
                </Carousel>
            </div>
            <div className={'buttonsContainer'}>
                <button className={map === 'anavyssos' ? 'mapButtonSelected' : 'mapButton'} onClick={() => setMap('anavyssos')}>ANAVYSSOS</button>
                <button className={map === 'voula' ? 'mapButtonSelected' : 'mapButton'} onClick={() => setMap('voula')}>VOULA</button>
            </div>
            {map === 'anavyssos' && <div className={'iframeContainer'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.08563762339!2d23.94436057575251!3d37.71766767199981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1edf0c7ff5a21%3A0x970b75c7e306b8bf!2sNik.%20Dede%2034%2C%20Palea%20Fokea%20190%2013!5e0!3m2!1sen!2sgr!4v1737624311056!5m2!1sen!2sgr"
                    width="100%" height="100%" allowFullScreen loading="lazy"
                    style={{border: 0}} title={"Google Maps"}
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>}
            {map === 'voula' && <div className={'iframeContainer'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.1844630426926!2d23.773607975759276!3d37.85597407196496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a195708913feed%3A0xff59a882ed8a9a8b!2sAgamemnonos%2012%2C%20Voula%20166%2073!5e0!3m2!1sen!2sgr!4v1745594085884!5m2!1sen!2sgr"
                    width="100%" height="100%" allowFullScreen loading="lazy"
                    style={{border: 0}} title={"Google Maps"}
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>}
        </section>

        <section className="contactThird">
            <Fade>
                <div className="contactImgContainer">
                    <img src={Tiffany9} className="contactImg" alt={"contact image"}/>
                </div>
            </Fade>
        </section>
    </div>
  );
};

export default Contact;
