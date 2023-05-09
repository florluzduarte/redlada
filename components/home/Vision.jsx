//Libraries
import Image from "next/image";

//Data
import visionData from "../../data/home/vision.json";

//Images
import imgVision from "../../public/vision-home.png";

//Styles
import styles from "../../styles/home/Vision.module.css";

const { title, text } = visionData;

const Vision = () => {
  return (
    <section className={styles.vision}>
      <div className={styles.vision__text}>
        <h2>Visión</h2>
        <p>
          <strong>{title}</strong>
          {text}
        </p>
      </div>
      <div className={styles.vision__img}>
        <Image
          src={imgVision}
          alt="Conferencia RedLaDA"
          placeholder="blur"
          fill={true}
        />
      </div>
    </section>
  );
};

export default Vision;
