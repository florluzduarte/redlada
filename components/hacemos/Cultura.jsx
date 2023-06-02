//Libraries
import Image from "next/image";

//Data
import culturaText from "../../data/hacemos/cultura.json";

//Styles
import styles from "../../styles/hacemos/Cultura.module.css";

//Images
import videoImage from "../../assets/hacemos/cultura-video.png";

const { introText, link } = culturaText;
const altTextVideo = "Portada video intravistas presentación en YouTube";

const Cultura = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cultura__text__wrapper}>
        <h2>Cultura</h2>
        <div className={styles.cultura__text__intro__wrapper}>
          <p>
            <strong>{introText.title}</strong>
            {introText.text}
          </p>
          <p>
            {link.text}{" "}
            <a
              href="mailto:alo@lafooddesign.org"
              subject="Contacto%20RedLaDA%20web"
              className={styles.cultura__link__email}
            >
              {link.email}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.cultura__video__wrapper}>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fttGBzH9Bso"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className={styles.cultura__video}
        ></iframe> */}
        <a href="https://youtu.be/fttGBzH9Bso" target="_blank">
          <Image
            src={videoImage}
            alt={altTextVideo}
            className={styles.cultura__video}
            placeholder="blur"
          />
        </a>
      </div>
    </section>
  );
};

export default Cultura;
