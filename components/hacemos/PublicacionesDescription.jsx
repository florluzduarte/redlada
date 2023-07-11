//Styles
import styles from "../../styles/hacemos/PublicacionesDescription.module.css";

const PublicacionesDescription = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.paragraphs}>
        {data.texts.map((text) => (
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

export default PublicacionesDescription;
