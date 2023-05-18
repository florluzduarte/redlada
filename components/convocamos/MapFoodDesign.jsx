//Libraries
import Image from "next/image";

//Components
import MapButton from "./MapButton";

//Data
import mapData from "../../data/convocamos/mapFoodDesign.json";

//Styles
import styles from "../../styles/convocamos/MapFoodDesign.module.css";

//Image
import mapImage from "../../assets/convocamos/mapafooddesign.jpg";

const altText = "Imagen del mapa del food design";

const MapFoodDesign = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.map__texts__wrapper}>
          <h2>Mapa del Food Design</h2>
          <p>
            <strong>{mapData.text.title}</strong>
            {mapData.text.text}
          </p>
          <div className={styles.map__button__wrapper}>
            {mapData.links.map(({ title, key, href }) => (
              <MapButton key={key} title={title} href={href} />
            ))}
          </div>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/d/viewer?mid=1_5jkkEztaJ3ZjcySSLD62sH68VA-Othg&ll=-30.993271113922344%2C-38.02357252022492&z=3"
            target="_blank"
          >
            <Image
              src={mapImage}
              alt={altText}
              placeholder="blur"
              className={styles.map__image}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapFoodDesign;
