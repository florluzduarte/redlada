//Libraries
import PropTypes from "prop-types";

//Components
import Button from "./Button.jsx";

//Styles
import styles from "../../styles/general/Header.module.css";

const Header = ({ titleSection, btn, children }) => {
  return (
    <header className={styles.header}>
      <div
        className={
          children
            ? styles.header__container__children
            : styles.header__container
        }
      >
        <div className={styles.header__title__container}>
          <h1 className={`${styles.header__title} ${btn.color}`}>
            {titleSection}
          </h1>
          {children && <div>{children}</div>}
        </div>
        <div className={styles.header__button}>
          <Button
            title={btn.titleBtn}
            href={btn.href}
            icon={btn.icon}
            color={btn.color}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  titleSection: PropTypes.string.isRequired,
  btn: PropTypes.object.isRequired,
};
