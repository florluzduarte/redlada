//Components
import Card from "../general/Card";

//Data
import cardsData from "../../data/home/navigationCards.json";

//Styles
import styles from "../../styles/home/Navigation.module.css";

//Images
import somos from "../../public/navigation-home-somos.png";
import hacemos from "../../public/navigation-home-hacemos.png";
import convocamos from "../../public/navigation-home-convocamos.png";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card__wrapper}>
        {cardsData.map(
          ({ title, text, href, color, type, alt, key, imageSrc }) => (
            <Card
              key={key}
              title={title}
              href={href}
              color={color}
              type={type}
              alt={alt}
              // imageSrc={imageSrc}
            >
              <p>{text}</p>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Navigation;
