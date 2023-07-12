//Components
import CardPublicaciones from "./CardPublicaciones";

//Data
import publicacionesDetails from "../../data/hacemos/publicacionesDetails.json";

//Styles
import styles from "../../styles/hacemos/PublicacionesPapers.module.css";

const PublicacionesPapers = () => {
  return (
    <section className={styles.papers__section}>
      <div className={styles.papers__list__container}>
        {publicacionesDetails.papers.map((paper) => (
          <CardPublicaciones key={paper.key} cardData={paper} />
        ))}
      </div>
    </section>
  );
};

export default PublicacionesPapers;
