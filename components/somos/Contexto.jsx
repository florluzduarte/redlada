//Libraries
import Image from "next/image";

//Data
import contexto from "../../data/somos/contexto.json";

//Styles
import styles from "../../styles/somos/Contexto.module.css";

//Images
import imgContexto from "../../public/contexto-somos.png";

const imgAlt = "Collage de imágenes de encuentros de la Red";

const Contexto = () => {
  return (
    <section className={styles.contexto}>
      <div className={styles.contexto__text__container}>
        <h2>Contexto</h2>
        <div className={styles.contexto__text__wrapper}>
          {contexto.map(({ key, title, text }) => (
            <p key={key}>
              <strong>{title}</strong>
              {text}
            </p>
          ))}
        </div>
      </div>
      <Image
        src={imgContexto}
        alt={imgAlt}
        placeholder="blur"
        className={styles.contexto__image}
      />
    </section>
  );
};

export default Contexto;
