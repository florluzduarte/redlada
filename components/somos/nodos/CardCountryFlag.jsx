//Libraries
import Link from "next/link";
import { CircleFlag } from "react-circle-flags";
import PropTypes from "prop-types";

//Styles
import styles from "../../../styles/somos/nodos/CardCountryFlag.module.css";

const CardCountryFlag = ({ link, title, flag }) => {
  return (
    <Link href={link}>
      <div className={styles.card__data__wrapper}>
        <CircleFlag
          countryCode={flag.code}
          alt={flag.alt}
          width={112}
          height={112}
          className={styles.card__flag}
        />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default CardCountryFlag;

CardCountryFlag.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  flag: PropTypes.object.isRequired,
};
