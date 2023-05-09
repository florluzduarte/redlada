//Libraries
import Link from "next/link";
import PropTypes from "prop-types";

//Components
import { BsArrowRightCircle } from "react-icons/bs";

//Styles
import styles from "../../styles/general/CardBody.module.css";
import Image from "next/image";

const CardBody = ({ title, children, href, hrefExternal, color }) => {
  const borderStyle = {
    borderBottom: `2px solid ${color}`,
  };

  return (
    <div className={styles.cardbody}>
      <div className={styles.cardbody__title__wrapper} style={borderStyle}>
        <div className={styles.cardbody__title__wrapper}>
          <BsArrowRightCircle className={`${styles.cardbody__icon} ${color}`} />
          <p className={styles.cardbody__title}>{title}</p>
        </div>
      </div>
      <div className={styles.cardbody__children__wrapper}>{children}</div>
      {href && (
        <Link href={href} className={`${styles.cardbody__link} ${color}`}>
          + info
        </Link>
      )}
      {hrefExternal && (
        <a
          href={hrefExternal}
          target="_blank"
          className={`${styles.cardbody__link} ${color}`}
        >
          + info
        </a>
      )}
    </div>
  );
};

export default CardBody;

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  hrefExternal: PropTypes.string,
  color: PropTypes.string.isRequired,
  // image: PropTypes.string,
};
