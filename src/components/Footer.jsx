import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

import './Footer.css'

const Footer = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <div className="footerContainer">
        <Fade>
          <div className="footerTitle">{t("footer.nameCredentials")}</div>
        </Fade>
        <Fade delay={300}>
          <p>{t("footer.email")}</p>
          <p>{t("footer.phone")}</p>
        </Fade>
      </div>
      <p className="credits">{t("footer.footNote")}</p>
    </>
  );
}

export default Footer