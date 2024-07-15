//Libraries
import Image from "next/image";

//Data
import newsText from "../../data/convocamos/news.json";

//Styles
import styles from "../../styles/convocamos/News.module.css";

//Image
import newsImage from "../../assets/convocamos/territorios-gastronomicos-web.jpg";

const altImage =
  "Flyer doceavo encuentro latinoamericano de Diseño y Alimentos";

const News = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.news__text__wrapper}>
          {newsText.introText.map(({ title, text, key }) => (
            <p key={key}>
              <strong>{title}</strong>
              {text}
            </p>
          ))}
          <p>
            {newsText.link.text}{" "}
            <a
              href={newsText.link.href}
              className={styles.news__link}
              target="_blank"
            >
              {newsText.link.link}
            </a>
          </p>
        </div>
        <div className={styles.news__title__image__wrapper}>
          <h2 className={styles.news__title}>
            12° Encuentro Latinoamericano de Diseño y Alimentos (2024 - Ecuador)
          </h2>
          <Image
            src={newsImage}
            alt={altImage}
            className={styles.news__image}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
