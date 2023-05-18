//Libraries
import Image from "next/image";

//Data
import revistaData from "../../data/convocamos/revista.json";

//Styles
import styles from "../../styles/convocamos/Revista.module.css";

//Images
import revistaImage from "../../assets/convocamos/revista.png";

const { introText, link } = revistaData;
const imageAlt = "Portada de la revista Food Design";

const Revista = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.revista__texts__wrapper}>
          <h2>Revista</h2>
          <div className={styles.revista__paragraph__wrapper}>
            <p>
              <strong>{introText.title}</strong>
              {introText.text}
            </p>
            <p>
              {link.text}{" "}
              <a
                href={link.href}
                className={styles.revista__link}
                target="_blank"
              >
                {link.link}
              </a>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={revistaImage}
            alt={imageAlt}
            className={styles.revista__image}
          />
        </div>
      </div>
    </section>
  );
};

export default Revista;
