//Libraries
import Image from "next/image";

//Components
import Button from "../general/Button";
import EncuentrosDownloadBtn from "./EncuentrosDownloadBtn";

//Styles
import styles from "../../styles/encuentros/EncuentrosBanner.module.css";

//Image
import ImageBanner from "../../public/encuentros/2022-montevideo-banner.png";

const EncuentrosBanner = ({ banner, btn, download }) => {
  return (
    <header className={styles.banner__section}>
      <h1>10mo encuentro latinoamericano de diseño y alimentos</h1>
      <Image
        src={ImageBanner}
        alt="Banner del encuentro"
        placeholder="blur"
        className={styles.banner__image}
      />
      <div className={styles.banner__btn__container}>
        <EncuentrosDownloadBtn href={download} />
        <Button
          color={btn.color}
          href={btn.href}
          icon={btn.icon}
          title={btn.titleBtn}
        />
      </div>
    </header>
  );
};

export default EncuentrosBanner;
