//Components
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

//Styles
import styles from "../../styles/convocamos/BtnMediaLinks.module.css";

const BtnMediaLinks = ({ title, href, icon }) => {
  return (
    <a href={href} target="_blank" className={styles.button}>
      {icon === "instagram" && (
        <AiOutlineInstagram className={styles.button__icon} />
      )}
      {icon === "youtube" && (
        <AiOutlineYoutube className={styles.button__icon} />
      )}
      {icon === "facebook" && (
        <AiOutlineFacebook className={styles.button__icon} />
      )}
      <p className={styles.button__title}>{title}</p>
    </a>
  );
};

export default BtnMediaLinks;
