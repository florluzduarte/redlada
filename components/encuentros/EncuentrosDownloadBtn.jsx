//Libraries
import { AiOutlineCloudDownload } from "react-icons/ai";

//Styles
import styles from "../../styles/encuentros/EncuentrosDownloadBtn.module.css";

const EncuentrosDownloadBtn = ({ href }) => {
  return (
    <a href={href} className={styles.btn} target="_blank">
      <AiOutlineCloudDownload className={styles.btn__icon} />
      <p className={styles.btn__title}>Descargar memoria completa</p>
    </a>
  );
};

export default EncuentrosDownloadBtn;
