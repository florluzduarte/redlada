//Libraries
import PropTypes from "prop-types";

//Components
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";

//Styles
import styles from "../../styles/Layout/Footer.module.css";

//Data
import dataFooter from "../../data/Layout/footerdata.json";

const { instagram, youtube, facebook } = dataFooter.socialMediaLinks;
const { institution, realAdress } = dataFooter.adress;
const { email } = dataFooter.contact;

const Footer = ({ color }) => {
  return (
    <footer
      className={`${styles.footer} ${
        color === "white" ? styles.footer__bkg__white : styles.footer__bkg__gray
      }`}
    >
      <div className={styles.footer__social__container}>
        <a href={instagram} target="_blank">
          <AiOutlineInstagram className={styles.footer__social__icons} />
        </a>
        <a href={youtube} target="_blank">
          <AiOutlineYoutube className={styles.footer__social__icons} />
        </a>
        <a href={facebook} target="_blank">
          <AiOutlineFacebook className={styles.footer__social__icons} />
        </a>
      </div>

      <div className={styles.footer__adress__container}>
        <small>
          <strong>{institution}</strong>
        </small>
        <small>{realAdress}</small>
      </div>

      <div>
        <a
          href="mailto:alo@lafooddesign.org"
          subject="Contacto%20RedLaDA%20web"
          className={styles.footer__contact__container}
        >
          <BiUserPin className={styles.footer__contact__icon} />
          <p className={styles.footer__contact__email}>{email}</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  color: PropTypes.string,
};
