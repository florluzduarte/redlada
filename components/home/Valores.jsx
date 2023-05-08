//Components
import { BsCheck } from "react-icons/bs";

//Data
import valores from "../../data/home/valores.JSON";

//Styles
import styles from "../../styles/home/Valores.module.css";

const Valores = () => {
  return (
    <div className={styles.valores__container}>
      <section className={styles.valores__text__container}>
        <h2 className={styles.valores__section__name}>Valores</h2>
        <ul className={styles.valores__wrapper}>
          {valores.map((valor) => (
            <li key={valor.key} className={styles.valores__valor__container}>
              <BsCheck className={styles.valores__valor__icon} />
              <p>
                <strong>{valor.title}</strong>
                {valor.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.valores__img}></div>
    </div>
  );
};

export default Valores;
