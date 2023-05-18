//Components
import CardMemorias from "./CardMemorias";

//Data
import cardsData from "../../data/hacemos/cardsCulturaMemorias.json";

//Styles
import styles from "../../styles/hacemos/CulturaMemorias.module.css";

//Images
import culturaVeinte from "../../public/cultura/cultura-2020.png";
import culturaDiecinueve from "../../public/cultura/cultura-2019.png";
import culturaDieciocho from "../../public/cultura/cultura-2018.png";
import culturaDiecisiete from "../../public/cultura/cultura-2017.png";
import culturaDieciseis from "../../public/cultura/cultura-2016.png";

const CulturaMemorias = () => {
  const images = [
    culturaVeinte,
    culturaDiecinueve,
    culturaDieciocho,
    culturaDiecisiete,
    culturaDieciseis,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.memorias__cards__wrapper}>
        {cardsData.map(({ key, title, hrefExternal, alt }, index) => (
          <CardMemorias
            key={key}
            title={title}
            hrefExternal={hrefExternal}
            alt={alt}
            imageSrc={images[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default CulturaMemorias;
