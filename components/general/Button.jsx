//Libraries
import Link from "next/link";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowDownCircle,
} from "react-icons/bs";
import PropTypes from "prop-types";

//Styles
import styles from "../../styles/general/Button.module.css";

const Button = ({ title, color, icon, href }) => {
  const borderStyle = {
    border: `2px solid var(--${color})`,
  };

  return (
    <Link href={href} className={styles.button} style={borderStyle}>
      <div className={styles.button__wrapper}>
        {icon.position === "left" && icon.type === "download" && (
          <BsArrowDownCircle className={`${styles.button__icon} ${color}`} />
        )}

        {icon.position === "left" && icon.type === "regular" && (
          <BsArrowLeftCircle className={`${styles.button__icon} ${color}`} />
        )}

        <p className={styles.button__title}>{title}</p>

        {icon.position === "right" && icon.type === "download" && (
          <BsArrowDownCircle className={`${styles.button__icon} ${color}`} />
        )}

        {icon.position === "right" && icon.type === "regular" && (
          <BsArrowRightCircle className={`${styles.button__icon} ${color}`} />
        )}
      </div>
    </Link>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
