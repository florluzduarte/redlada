//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import CursosDetails from "@/components/hacemos/CursosDetails";
import NavigationMembers from "@/components/general/NavigationMembers";

const propsHeader = {
  titleSection: "Cursos",
  btn: {
    titleBtn: "Volver a Hacemos",
    href: "/hacemos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "violet",
  },
};

const Cursos = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn} />
      <CursosDetails />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Cursos;
