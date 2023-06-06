//Libraries
import PropTypes from "prop-types";

//Components
import BtnOrganicCharter from "../somos/BtnOrganicCharter";

//Styles
import styles from "../../styles/general/Hero.module.css";
import json from "../../data/general/hero.json";

//Data
import btnCharterData from "../../data/somos/btnOrganicCharter.json";

const Hero = ({ type }) => {
  return (
    <header className={`${styles.hero} ${styles[type]}`}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__text__wrapper}>
          <h1>
            <span className={styles.hero__title}>{json[type].title}</span>
            <span className={styles.hero__subtitle}>{json[type].subtitle}</span>
          </h1>
          <p className={styles.hero__text}>
            <strong>{json[type].textBold}</strong>
            {json[type].textRegular}
          </p>
        </div>
        {type === "somos" && (
          <div className={styles.hero__btn__charter}>
            {btnCharterData.map(({ title, href, countryCode, key }) => (
              <BtnOrganicCharter
                key={key}
                title={title}
                countryCode={countryCode}
                href={href}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;

Hero.propTypes = {
  type: PropTypes.string.isRequired,
};
