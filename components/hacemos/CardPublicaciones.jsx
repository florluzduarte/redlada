//Libraries
import { AiOutlinePaperClip, AiOutlineCloudDownload } from "react-icons/ai";

//Styles
import styles from "../../styles/hacemos/CardPublicaciones.module.css";

const CardPublicaciones = ({ cardData }) => {
  return (
    <a href={cardData.href} target="_blank">
      <div className={styles.card}>
        <div className={`${styles.card__icon__container} ${cardData.bkg}`}>
          <AiOutlinePaperClip className={styles.card__icon} />
        </div>
        <h2 className={styles.card__title}>{cardData.title}</h2>
        <div className={`${styles.card__line} ${cardData.bkg}`}></div>
        <div className={styles.card__details__container}>
          <p>
            <span className={styles.card__details__title}>
              Fecha de publicacion:{" "}
            </span>
            {cardData.date}
          </p>
          <p>
            <span className={styles.card__details__title}>Publicado por: </span>
            {cardData.author}
          </p>
          <p>
            <span className={styles.card__details__title}>ISBN: </span>
            {cardData.isbn}
          </p>
        </div>
        <div className={`${styles.card__button} ${cardData.color}`}>
          <AiOutlineCloudDownload className={styles.card__button__icon} />
          <p>Descargar</p>
        </div>
      </div>
    </a>
  );
};

export default CardPublicaciones;
