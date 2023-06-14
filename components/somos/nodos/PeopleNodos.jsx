//Libraries
import PropTypes from "prop-types";

//Components
import CardMembersComplete from "../fundacional/CardMembersComplete";

//Data
import members from "../../../data/members.json";

//Styles
import styles from "../../../styles/somos/nucleo/PeopleNucleo.module.css";

const type = "nodos";

const PeopleNodos = ({ country }) => {
  const numberMembers = members.community.filter(
    (member) => member.country === country
  ).length;

  return (
    <section className={styles.people__container}>
      {members.community.map(
        (member) =>
          member.country === country && (
            <CardMembersComplete member={member} type={type} key={member.id} />
          )
      )}
      {numberMembers === 0 && (
        <div className={styles.people__not__found}>
          <h2>No se encontraron miembros activos en tu país.</h2>
          <p>
            Para más información sobre la actividad de la Red en tu ubicación
            contáctanos a:{" "}
            <a
              href="mailto:alo@lafooddesign.com"
              className={styles.people__not__found__email}
            >
              alo@lafooddesign.com
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default PeopleNodos;

PeopleNodos.propTypes = {
  country: PropTypes.string.isRequired,
};
