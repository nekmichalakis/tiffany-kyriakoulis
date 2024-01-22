import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import Tiffany9 from "../assets/Tiffany-9.jpg";

import "./Contact.css";

const Contact = () => {
  const [t] = useTranslation("global");

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
        </Fade>
      </section>

      <section className="contactThird">
        <Fade>
          <div className="contactImgContainer">
            <img src={Tiffany9} className="contactImg" />
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Contact;
