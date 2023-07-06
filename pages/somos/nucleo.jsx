//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import PeopleNucleo from "@/components/somos/nucleo/PeopleNucleo";
import NavigationMembers from "@/components/general/NavigationMembers";

const propsHeader = {
  titleSection: "Núcleo",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "orange",
  },
};

const Nucleo = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn} />
      <PeopleNucleo />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Nucleo;
