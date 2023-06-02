//Data
import encuentrosText from "../../data/hacemos/encuentrosText.json";

//Styles
import styles from "../../styles/hacemos/EncuentrosText.module.css";

const EncuentrosText = () => {
  return (
    <section className={styles.section}>
      <h2>Encuentros</h2>
      <div className={styles.paragraphs}>
        {encuentrosText.texts.map((text) => (
          <div key={text.key} className={styles.paragraph}>
            {text.paragraph.map(({ key, title, text }) => (
              <p key={key}>
                <strong>{title}</strong>
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EncuentrosText;
