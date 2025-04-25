import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

import './Footer.css'

const Footer = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <div className="footerContainer">
        <Fade>
          <h2 className="footerTitle">{t("footer.name")}</h2>
        </Fade>
        <Fade>
          <h3 className="footerTitle">{t("footer.credentials")}</h3>
        </Fade>
        <Fade delay={300}>
          <p>{t("footer.email")}</p>
          <p className='credits'>{t("footer.phone")}</p>
          <p>{t("footer.location")}</p>
          <p>{t("footer.secondLocation")}</p>
        </Fade>
        <Fade delay={300}>
          <a href="https://www.onlinetherapy.com" target="_blank" rel="noreferrer"><img
              src="https://www.onlinetherapy.com/wp-content/uploads/2021/01/black-background-member.png?x75948"
              width="200" alt="Online Therapy"/></a>
        </Fade>
      </div>
    </>
  );
}

export default Footer
