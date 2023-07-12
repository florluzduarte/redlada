//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import PublicacionesDescription from "@/components/hacemos/PublicacionesDescription";
import CardPublicaciones from "@/components/hacemos/CardPublicaciones";
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

const card = {
  title:
    "Memorias del 9no Encuentro Latinoamericano de Food Design. Replantar.",
  href: "https://drive.google.com/file/d/1gm9p8IuoSjjrlpfmpEg8tMBEzoXXiR-x/view?usp=sharing",
  date: "Julio 2021",
  author: "Red Latinoamericana de Diseño y Alimentos",
  isbn: "978-9974-8752-2-7",
  color: "orange",
  bkg: "bkg__orange",
};

const Publicaciones = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn} />
      <PublicacionesDescription data={publicacionesDescription} />
      <CardPublicaciones cardData={card} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Publicaciones;
