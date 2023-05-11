//Components
import ObjetivosCard from "./ObjetivosCard";

//Data
import objetivos from "../../data/home/objetivos.json";

//Styles
import styles from "../../styles/home/Objetivos.module.css";

const Objetivos = () => {
  return (
    <section className={styles.objetivos}>
      <h2 className={styles.objetivos__title}>Objetivos</h2>
      <div className={styles.objetivos__cards__container}>
        {objetivos.map((objetivo) => (
          <ObjetivosCard
            key={objetivo.number}
            number={objetivo.number}
            title={objetivo.title}
            text={objetivo.text}
            color={objetivo.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Objetivos;
