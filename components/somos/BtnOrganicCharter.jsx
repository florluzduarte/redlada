//Libraries
import { CircleFlag } from "react-circle-flags";

//Styles
import styles from "../../styles/somos/BtnOrganicCharter.module.css";

const BtnOrganicCharter = ({ href, title, countryCode }) => {
  return (
    <a href={href} target="_blank" className={styles.btn}>
      <div className={styles.btn__wrapper}>
        <CircleFlag countryCode={countryCode} height="35" />
        <p className={styles.btn__title}>{title}</p>
      </div>
    </a>
  );
};

export default BtnOrganicCharter;
