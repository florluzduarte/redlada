//Libraries
import Image from "next/image";

//Data
import foodDesign from "../../data/home/foodDesign.json";

//Images
import foodDesignImage from "../../public/foodDesign.jpg";

//Styles
import styles from "../../styles/home/FoodDesign.module.css";

const imgAlt = "Gráfico explicativo ¿Qué es diseño y alimentos?";

const FoodDesign = () => {
  return (
    <section className={styles.section}>
      <div className={styles.food}>
        <h2>¿Qué es Diseño y Alimentos?</h2>
        <div className={styles.food__text__wrapper}>
          {foodDesign.texts.map((text) => (
            <div key={text.key} className={styles.food__paragraph__wrapper}>
              {text.paragraph.map(({ title, text, key }) => (
                <p key={key}>
                  <strong>{title}</strong>
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Image
        src={foodDesignImage}
        alt={imgAlt}
        placeholder="blur"
        className={styles.food__image}
      />
    </section>
  );
};

export default FoodDesign;
