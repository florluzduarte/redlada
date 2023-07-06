//Components
import ChapterDetails from "./ChapterDetails";

//Styles
import styles from "../../styles/encuentros/Intro.module.css";

const IndexMemory = ({ data }) => {
  return (
    <section className={styles.intro__section}>
      <h2 className={styles.intro__title}>Índice de esta memoria</h2>
      <div className={styles.intro__text__container__index}>
        {data.indice.map((chapter) => (
          <ChapterDetails chapter={chapter} key={chapter.key} />
        ))}
      </div>
    </section>
  );
};

export default IndexMemory;
