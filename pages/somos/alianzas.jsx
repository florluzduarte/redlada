//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import NavigationMembers from "@/components/general/NavigationMembers";
import PeopleAlianzas from "@/components/somos/alianzas/PeopleAlianzas";

//Data
import headerDescription from "../../data/somos/headerDescription.json";

//Styles
import styles from "../../styles/somos/alianzas/alianzas.module.css";

const propsHeader = {
  titleSection: "Alianzas",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "violet",
  },
};

const Alianzas = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn}>
        <p>
          {headerDescription.alianzas}{" "}
          <a
            href="mailto:alo@lafooddesign.org"
            subject="Contacto%20RedLaDA%20alianzas"
            className={styles.alianzas__email__link}
          >
            alo@lafooddesign.org
          </a>
        </p>
      </Header>
      <PeopleAlianzas />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Alianzas;
