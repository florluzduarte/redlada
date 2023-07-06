//Libraries
import { FaUsers } from "react-icons/fa";

//Styles
import styles from "../../../styles/somos/nodos/Spokesman.module.css";

const Spokesman = () => {
  return (
    <div className={styles.spokesman__container}>
      <FaUsers className={styles.spokesman__icon} />
      <p>Portavoz</p>
    </div>
  );
};

export default Spokesman;
