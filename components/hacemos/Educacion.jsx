//Components
import Button from "../general/Button";

//Data
import textEducacion from "../../data/hacemos/educacion.json";

//Styles
import styles from "../../styles/hacemos/Educacion.module.css";

const testingButton = {
  href: "/",
  title: "Probando botón",
  icon: {
    position: "right",
    type: "regular",
  },
  color: "orange",
};

const Educacion = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.educacion__text__wrapper}>
          <h2>Educación</h2>
          <p>
            <strong>{textEducacion.title}</strong>
            {textEducacion.text}
          </p>
        </div>
        <div>
          <Button
            href={testingButton.href}
            title={testingButton.title}
            icon={testingButton.icon}
            color={testingButton.color}
          />
        </div>
      </div>
    </section>
  );
};

export default Educacion;
