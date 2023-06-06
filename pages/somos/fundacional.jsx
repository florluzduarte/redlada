//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import PeopleFundacional from "@/components/somos/fundacional/peopleFundacional";

const propsHeader = {
  titleSection: "Grupo fundacional",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "yellow",
  },
};

const Fundacional = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn} />
      <PeopleFundacional />
    </Layout>
  );
};

export default Fundacional;
