//Libraries
import Image from "next/image";

//Data
import alliances from "../../../data/alliances.json";

//Styles
import styles from "../../../styles/somos/alianzas/PeopleAlianzas.module.css";

const PeopleAlianzas = () => {
  return (
    <section className={styles.alianzas__section}>
      <div className={styles.alianzas__container}>
        {alliances.alliances.map((alianza) => (
          <div key={alianza.id}>
            <a href={alianza.website} target="_blank">
              <Image
                src={alianza.image.src}
                alt={alianza.image.alt}
                unoptimized
                width={180}
                height={140}
                className={styles.alianzas__img}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleAlianzas;
