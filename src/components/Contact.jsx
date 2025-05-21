import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";

import tiffProfile from "../assets/tiffProfile.jpg";


import "./Contact.css";
import {useState} from "react";

const Contact = () => {
  const [t] = useTranslation("global");

  const [map, setMap] = useState("anavyssos");
  const [imageHeight, setImageHeight] = useState(0);

    const handleImageLoad = (event) => {
        const height = event.target.offsetHeight;
        setImageHeight(height);
    }

  const galleryImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
  ];

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

            <div className={'buttonsContainer'}>
                <button className={map === 'anavyssos' ? 'mapButtonSelected' : 'mapButton'} onClick={() => setMap('anavyssos')}>{t("contact.anavyssos")}</button>
                <button className={map === 'voula' ? 'mapButtonSelected' : 'mapButton'} onClick={() => setMap('voula')}>{t("contact.voula")}</button>
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
                <div className="carouselContainer">
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={5000}>
                        {galleryImages.map(image =>
                            (<div key={image.id}>
                                <img src={image}
                                     onLoad={handleImageLoad}
                                     className="contactImg"
                                     alt={"contact image"}
                                />
                            </div>)
                        )}
                        <div className={'profileContainer'}>
                            <img src={tiffProfile}
                                 style={{
                                    maxHeight: imageHeight,
                                 }}
                                 className="tiffProfile"
                                 alt={"contact image"}
                            />
                        </div>
                    </Carousel>
                </div>
            </Fade>
        </section>
    </div>
  );
};

export default Contact;
