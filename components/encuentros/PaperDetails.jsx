//Styles
import styles from "../../styles/encuentros/PaperDetails.module.css";

const PaperDetails = ({ paper }) => {
  return (
    <div>
      <p className={styles.paper__title}>{paper.title}</p>
      <p>{paper.author}</p>
    </div>
  );
};

export default PaperDetails;
