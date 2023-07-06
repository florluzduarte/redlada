//Libraries
import Image from "next/image";

//Components
import Button from "../general/Button";
import EncuentrosDownloadBtn from "./EncuentrosDownloadBtn";

//Styles
import styles from "../../styles/encuentros/EncuentrosBanner.module.css";

const EncuentrosBanner = ({ banner, btn, download }) => {
  return (
    <header className={styles.banner__section}>
      <h1>{banner.title}</h1>
      <Image
        src={banner.image.src}
        alt={banner.image.src}
        width={1000}
        height={485}
        className={styles.banner__image}
        priority
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
