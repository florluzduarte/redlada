//Libraries
import PropTypes from "prop-types";

//Components
import Button from "../general/Button.jsx";

//Styles
import styles from "../../styles/general/NavigationMembers.module.css";

const NavigationMembers = ({ btn }) => {
  return (
    <div className={styles.navigation__container}>
      <div className={styles.navigation__button}>
        <Button
          title={btn.titleBtn}
          href={btn.href}
          icon={btn.icon}
          color={btn.color}
        />
      </div>
    </div>
  );
};

export default NavigationMembers;

NavigationMembers.propTypes = {
  btn: PropTypes.object.isRequired,
};
