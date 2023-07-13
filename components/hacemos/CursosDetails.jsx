//Libraries
import Image from "next/image";

//Components
import PublicacionesDescription from "./PublicacionesDescription";

//Data
import cursosDetails from "../../data/hacemos/cursosDetails.json";

//Styles
import styles from "../../styles/hacemos/CursosDetails.module.css";

//Image
import fdxe from "../../assets/hacemos/fdxe.jpg";

const CursosDetails = () => {
  return (
    <section>
      <Image
        src={fdxe}
        alt="Food Design x Education"
        placeholder="blur"
        className={styles.image}
      />
      <PublicacionesDescription data={cursosDetails} />
    </section>
  );
};

export default CursosDetails;
