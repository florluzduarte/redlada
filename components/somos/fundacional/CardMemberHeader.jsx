//Libraries
import Image from "next/image";
import { CircleFlag } from "react-circle-flags";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import PropTypes from "prop-types";

//Components
import Spokesman from "../nodos/Spokesman";

//Styles
import styles from "../../../styles/somos/fundacional/CardMemberHeader.module.css";

const CardMemberHeader = ({
  id,
  photo,
  name,
  flag,
  country,
  type,
  spokesman,
  email,
  website,
}) => {
  return (
    <div
      key={id}
      className={
        type === "fundacional"
          ? styles.card__container__fundacional
          : styles.card__container__regular
      }
    >
      <Image
        src={photo}
        alt={name}
        width={120}
        height={120}
        unoptimized
        className={`${styles.card__img} ${
          type === "fundacional" && styles.card__img__fundacional
        } ${type === "nucleo" && styles.card__img__nucleo} ${
          type === "nodos" && styles.card__img__nodos
        }`}
      />
      <div className={styles.card__personaldata__wrapper}>
        <div className={styles.card__name__wrapper}>
          <p
            className={
              type === "fundacional"
                ? styles.card__name
                : styles.card__name__regular
            }
          >
            {name} {id === "beatriz-galan" && <small> (Q.E.P.D.)</small>}
          </p>
          {spokesman === true && <Spokesman />}
        </div>
        <div className={styles.card__country}>
          <CircleFlag
            countryCode={flag.code}
            width={28}
            height={28}
            alt={flag.alt}
            className={styles.card__flag}
          />
          <p>{country}</p>
        </div>
        {email && (
          <div className={styles.card__email__wrapper}>
            <HiOutlineMail className={styles.card__email__icon} />
            <a href={`mailto:${email}`} className={styles.card__email__link}>
              {email}
            </a>
          </div>
        )}
        {website && (
          <div>
            {website.map(({ href, title, key }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className={styles.card__website__link}
              >
                <TbWorld className={styles.card__website__icon} />
                <p>{title}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMemberHeader;

CardMemberHeader.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flag: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  spokesman: PropTypes.bool,
  email: PropTypes.string,
  website: PropTypes.array,
};
