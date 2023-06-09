//Components
import CardMemberHeader from "./CardMemberHeader";

//Style
import styles from "../../../styles/somos/fundacional/CardMembersComplete.module.css";

const CardMembersComplete = ({ member, type }) => {
  return (
    <div className={styles.card__container}>
      <CardMemberHeader
        id={member.id}
        country={member.country}
        email={member.email}
        flag={member.flag}
        key={member.id}
        name={member.name}
        photo={member.photo}
        spokesman={member.spokesman}
        type={type}
        website={member.website}
      />
      <div>
        {member.bio.map((paragraph) => (
          <p key={paragraph.key}>{paragraph.text}</p>
        ))}
      </div>
    </div>
  );
};

export default CardMembersComplete;
