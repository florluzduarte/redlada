//Componentes
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import BtnMediaLinks from "@/components/convocamos/BtnMediaLinks";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import headerDescription from "../../data/somos/headerDescription.json";
import btnData from "../../data/convocamos/btnMediaLinks.json";

//Styles
import styles from "../../styles/somos/amigos/amigos.module.css";

const propsHeader = {
  titleSection: "Amigos",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "green",
  },
};

const Amigos = () => {
  return (
    <Layout>
      <div className={styles.amigos__container}>
        <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn}>
          <p>{headerDescription.amigos}</p>
        </Header>
        <div className={styles.media__container}>
          <div className={styles.mediaBtn__container}>
            {btnData.map(({ key, title, href, icon }) => (
              <BtnMediaLinks key={key} title={title} href={href} icon={icon} />
            ))}
          </div>
        </div>
        <NavigationMembers btn={propsHeader.btn} />
      </div>
    </Layout>
  );
};

export default Amigos;
