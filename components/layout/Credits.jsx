//Styles
import styles from "../../styles/Layout/Credits.module.css";

const Credits = () => {
  return (
    <div className={styles.credits}>
      <div className={styles.credits__wrapper}>
        <p className={styles.credits__font}>Coordinación de proyecto:</p>
        <a
          href="https://www.linkedin.com/in/malena-pasin-868a6820/"
          target="_blank"
          className={styles.credits__link}
        >
          Malena Pasin
        </a>
      </div>
      <div className={styles.credits__wrapper}>
        <p className={styles.credits__font}>Diseño y Desarrollo Web:</p>
        <a
          href="https://www.linkedin.com/in/florluzduarte/"
          target="_blank"
          className={styles.credits__link}
        >
          Flor Luz Duarte
        </a>
      </div>
    </div>
  );
};

export default Credits;
