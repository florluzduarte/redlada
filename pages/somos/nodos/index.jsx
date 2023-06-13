//Components
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/general/Header";
import NavigationMembers from "@/components/general/NavigationMembers";
import CardCountryFlag from "@/components/somos/nodos/CardCountryFlag";

const propsHeader = {
  titleSection: "Nodos",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "pink",
  },
};

const Nodos = () => {
  return (
    <Layout>
      <Header btn={propsHeader.btn} titleSection={propsHeader.titleSection} />
      <CardCountryFlag />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Nodos;
