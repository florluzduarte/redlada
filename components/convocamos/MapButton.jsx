//Libraries
import { BsArrowUpRightCircle } from "react-icons/bs";

//Styles
import styles from "../../styles/convocamos/MapButton.module.css";

const MapButton = ({ title, href }) => {
  return (
    <a href={href} target="_blank" className={styles.map__button}>
      <p className={styles.map__button__title}>{title}</p>
      <BsArrowUpRightCircle className={styles.map__button__icon} />
    </a>
  );
};

export default MapButton;
