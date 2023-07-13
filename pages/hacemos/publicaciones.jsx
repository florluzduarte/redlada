//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import PublicacionesDescription from "@/components/hacemos/PublicacionesDescription";
import PublicacionesPapers from "@/components/hacemos/PublicacionesPapers";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import publicacionesDescription from "../../data/hacemos/publicacionesDescription.json";

const propsHeader = {
  titleSection: "Publicaciones",
  btn: {
    titleBtn: "Volver a Hacemos",
    href: "/hacemos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "orange",
  },
};

const Publicaciones = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn} />
      <PublicacionesDescription data={publicacionesDescription} />
      <PublicacionesPapers />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Publicaciones;
