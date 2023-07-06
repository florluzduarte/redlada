//Styles
import styles from "../../styles/encuentros/Intro.module.css";

const Intro = ({ data }) => {
  return (
    <section className={styles.intro__section}>
      {data.intro.map((text) => (
        <article key={text.key}>
          <h2 className={styles.intro__title}>{text.title}</h2>
          <div className={styles.intro__text__container}>
            {text.paragraphs.map(({ text, key }) => (
              <p key={key}>{text}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Intro;
