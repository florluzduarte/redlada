//Components
import Button from "../general/Button";

//Data
import textEducacion from "../../data/hacemos/educacion.json";
import navigationButtons from "../../data/hacemos/navigationButtons.json";

//Styles
import styles from "../../styles/hacemos/Educacion.module.css";

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
        <div className={styles.educacion__buttons__wrapper}>
          {navigationButtons.map(({ title, key, color, href, icon }) => (
            <Button
              key={key}
              title={title}
              color={color}
              href={href}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacion;
