//Components
import CardMembersComplete from "../fundacional/CardMembersComplete";

//Data
import members from "../../../data/members.json";

//Styles
import styles from "../../../styles/somos/nucleo/PeopleNucleo.module.css";

const type = "nucleo";

const PeopleNucleo = () => {
  return (
    <div className={styles.people__container}>
      {members.core.map((member) => (
        <CardMembersComplete member={member} key={member.id} type={type} />
      ))}
    </div>
  );
};

export default PeopleNucleo;
