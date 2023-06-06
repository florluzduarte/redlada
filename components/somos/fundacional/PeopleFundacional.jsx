//Library
import Image from "next/image";
import { CircleFlag } from "react-circle-flags";

//Data
import members from "../../../data/members.json";

//Styles
import styles from "../../../styles/somos/fundacional/PeopleFundacional.module.css";

const PeopleFundacional = () => {
  return (
    <section className={styles.fundacional}>
      <div className={styles.fundacional__people__container}>
        {members.foundational.map(({ id, country, flag, name, photo }) => (
          <div key={id} className={styles.fundacional__people}>
            <Image
              src={photo}
              alt={name}
              width={120}
              height={120}
              unoptimized
              className={styles.fundacional__people__img}
            />
            <div className={styles.fundacional__people__text__wrapper}>
              <p className={styles.fundacional__people__name}>{name}</p>
              {id === "beatriz-galan" && <small>Q.E.P.D.</small>}
              <div className={styles.fundacional__people__country}>
                <CircleFlag
                  countryCode={flag.code}
                  width={28}
                  height={28}
                  className={styles.fundacional__people__flag}
                />
                <p>{country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleFundacional;
