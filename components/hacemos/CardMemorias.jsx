//Libraries
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";

//Styles
import styles from "../../styles/hacemos/CardsMemorias.module.css";

const CardMemorias = ({ hrefExternal, title, imageSrc, alt }) => {
  return (
    <a href={hrefExternal} target="_blank" className={styles.card}>
      <Image
        src={imageSrc}
        alt={alt}
        placeholder="blur"
        className={styles.cards__image}
      />
      <div className={styles.cards__text__wrapper}>
        <BsArrowUpRightCircle className={styles.cards__icon} />
        <p className={styles.cards__title}>{title}</p>
      </div>
    </a>
  );
};

export default CardMemorias;
