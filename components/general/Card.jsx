//Libraries
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

//Components
import { BsArrowRightCircle } from "react-icons/bs";

//Styles
import styles from "../../styles/general/Card.module.css";

const Card = ({
  title,
  children,
  href,
  hrefExternal,
  color,
  type,
  imageSrc,
  alt,
}) => {
  const underlineStyle = {
    borderBottom: `2px solid var(--${color})`,
  };

  return (
    <div
      className={`${styles.card} ${
        type === "presentation" ? styles.presentation : styles.regular
      }`}
    >
      {imageSrc && (
        <div>
          <Image
            src={imageSrc}
            alt={alt}
            placeholder="blur"
            className={styles.card__image}
          />
        </div>
      )}
      <div className={styles.card__title__wrapper} style={underlineStyle}>
        <div className={styles.card__title__wrapper}>
          <BsArrowRightCircle className={`${styles.card__icon} ${color}`} />
          <p className={styles.card__title}>{title}</p>
        </div>
      </div>
      <div className={styles.card__children__wrapper}>{children}</div>
      {href && (
        <Link href={href} className={`${styles.card__link} ${color}`}>
          + info
        </Link>
      )}
      {hrefExternal && (
        <a
          href={hrefExternal}
          target="_blank"
          className={`${styles.card__link} ${color}`}
        >
          + info
        </a>
      )}
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  hrefExternal: PropTypes.string,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imagSrc: PropTypes.object,
  alt: PropTypes.string,
};
