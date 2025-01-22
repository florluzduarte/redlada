//Components
import Card from "../general/Card";

//Data
import cardsData from "../../data/hacemos/cardEncuentros.json";

//Styles
import styles from "../../styles/hacemos/EncuentrosCards.module.css";

//Images
import ecuador from "../../public/encuentros/2024-ecuador.png";
import paraguay from "../../public/encuentros/2023-paraguay.png";
import montevideo from "../../public/encuentros/2022-montevideo.png";
import curitiba from "../../public/encuentros/2021-curitiba.png";
import virtual from "../../public/encuentros/2020-virtual.png";
import cochabamba from "../../public/encuentros/2019-cochabamba.png";
import santiago from "../../public/encuentros/2018-santiago.png";
import bsas from "../../public/encuentros/2017-bsas.png";
import tijuana from "../../public/encuentros/2016-tijuana.png";
import porto from "../../public/encuentros/2015-porto.png";
import bogota from "../../public/encuentros/2014-bogota.png";
import montevideoTrece from "../../public/encuentros/2013-montevideo.png";

const EncuentrosCards = () => {
  const images = [
    ecuador,
    paraguay,
    montevideo,
    curitiba,
    virtual,
    cochabamba,
    santiago,
    bsas,
    tijuana,
    porto,
    bogota,
    montevideoTrece,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.encuentros__cards__wrapper}>
        {cardsData.map(
          ({ title, sede, concepto, href, color, alt, key, type }, index) => (
            <Card
              key={key}
              title={title}
              color={color}
              href={href}
              alt={alt}
              type={type}
              imageSrc={images[index]}
            >
              <div className={styles.encuentros__cards__content}>
                <p>
                  <strong>Sede: </strong>
                  {sede}
                </p>
                <p>
                  <strong>Concepto: </strong>
                  {concepto}
                </p>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default EncuentrosCards;
