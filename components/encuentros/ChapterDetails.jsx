//Components
import PaperDetails from "./PaperDetails";

//Styles
import styles from "../../styles/encuentros/ChapterDetails.module.css";

const ChapterDetails = ({ chapter }) => {
  return (
    <div className={styles.chapter__container}>
      <h3 className={styles.chapter__title}>{chapter.title}</h3>
      <p className={styles.chapter__subtitle}>{chapter.subtitle}</p>
      {chapter.papers && (
        <div className={styles.chapter__papers__container}>
          {chapter.papers.map((paper) => (
            <PaperDetails paper={paper} key={paper.key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterDetails;
