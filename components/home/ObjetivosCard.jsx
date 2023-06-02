//Libraries
import PropTypes from "prop-types";

//Styles
import styles from "../../styles/home/ObjetivosCard.module.css";

const ObjetivosCard = ({ title, text, number, color }) => {
  const numberColor = {
    color: color,
  };

  return (
    <div className={styles.objetivos__container}>
      <h3 className={styles.objetivos__number} style={numberColor}>
        {number}
      </h3>
      <p>
        <strong>{title}</strong>
        {text}
      </p>
    </div>
  );
};

export default ObjetivosCard;

ObjetivosCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
