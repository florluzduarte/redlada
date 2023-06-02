//Components
import BtnMediaLinks from "./BtnMediaLinks";

//Data
import mediaText from "../../data/convocamos/mediaLinks.json";
import btnData from "../../data/convocamos/btnMediaLinks.json";

//Styles
import styles from "../../styles/convocamos/MediaLinks.module.css";

const MediaLinks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.media__text__wrapper}>
          <h2>Sumate a la Red</h2>
          <p>{mediaText.text}</p>
        </div>
        <div className={styles.media__buttons__wrapper}>
          {btnData.map(({ key, title, href, icon }) => (
            <BtnMediaLinks key={key} title={title} href={href} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLinks;
