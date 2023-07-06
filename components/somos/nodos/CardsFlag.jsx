//Components
import CardCountryFlag from "./CardCountryFlag";

//Data
import cardCountryFlagData from "../../../data/somos/nodos/cardCountryFlagData.json";

//Styles
import styles from "../../../styles/somos/nodos/CardsFlag.module.css";

const CardsFlag = () => {
  return (
    <section className={styles.cards__section}>
      <div className={styles.cards__wrapper}>
        {cardCountryFlagData.cardCountryFlagData.map(
          ({ link, title, flag }) => (
            <CardCountryFlag
              key={title}
              flag={flag}
              link={link}
              title={title}
            />
          )
        )}
      </div>
    </section>
  );
};

export default CardsFlag;
