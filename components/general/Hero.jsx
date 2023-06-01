//Styles
import styles from "../../styles/general/Hero.module.css";
import json from "../../data/general/hero.json";

const Hero = ({ children, type }) => {
  return (
    <header className={`${styles.hero} ${styles[type]}`}>
      <div>
        <div className={styles.hero__text__wrapper}>
          <h1>
            <span>{json[type].title}</span>
            <span>{json[type].subtitle}</span>
          </h1>
          <p>
            <strong>{json[type].textBold}</strong>
            {json[type].textRegular}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
};

export default Hero;
