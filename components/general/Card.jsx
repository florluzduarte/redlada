//Libraries
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

//Components
import { BsArrowRightCircle } from "react-icons/bs";

//Styles
import styles from "../../styles/general/Card.module.css";

const Card = ({ title, children, href, color, type, imageSrc, alt }) => {
  const underlineStyle = {
    borderBottom: `2px solid var(--${color})`,
  };

  return (
    <Link
      href={href}
      className={`${styles.card} ${
        type === "withBorder" ? styles.with__border : styles.regular
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
      <p className={`${styles.card__link} ${color}`}>+ info</p>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imagSrc: PropTypes.object,
  alt: PropTypes.string,
};
