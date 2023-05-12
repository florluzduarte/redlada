//Libraries
import Image from "next/image";

//Components
import Card from "../general/Card";

//Data
import participantes from "../../data/somos/participantes.json";
import cardsData from "../../data/somos/cardsParticipantes.json";

//Styles
import styles from "../../styles/somos/Participantes.module.css";

//Images
import celula from "../../public/celula-somos.png";

const Participantes = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.members__text__wrapper}>
          <h2 className={styles.members__title}>Participantes</h2>
          <p>{participantes.text}</p>
          <Image
            src={celula}
            alt={""}
            placeholder="blur"
            className={styles.members__image}
          />
        </div>
        <div className={styles.members__cards__wrapper}>
          {cardsData.map(({ title, text, href, color, type, key }) => (
            <Card key={key} title={title} href={href} color={color} type={type}>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participantes;
