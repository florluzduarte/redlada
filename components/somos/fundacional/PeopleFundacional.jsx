//Data
import members from "../../../data/members.json";

//Components
import CardMemberHeader from "./CardMemberHeader";

//Styles
import styles from "../../../styles/somos/fundacional/PeopleFundacional.module.css";

const PeopleFundacional = () => {
  return (
    <section className={styles.fundacional}>
      <div className={styles.fundacional__people__container}>
        {members.foundational.map(({ id, country, flag, name, photo }) => (
          <CardMemberHeader
            key={id}
            country={country}
            id={id}
            flag={flag}
            name={name}
            photo={photo}
            type="fundacional"
          />
        ))}
      </div>
    </section>
  );
};

export default PeopleFundacional;
