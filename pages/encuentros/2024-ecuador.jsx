//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataEcuador2024 from "../../data/encuentros/2024-ecuador.json";

const propsHeader = {
  banner: {
    title: "12vo Encuentro Latinoamericano de Diseño y Alimentos",
    image: {
      src: "/encuentros/2024-ecuador-banner.png",
      alt: "Banner encuentro Ecuador 2024",
    },
  },
  btn: {
    titleBtn: "Ver otros encuentros",
    href: "/hacemos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "green",
  },
  download:
    "https://www.disuda.net/disenoyalimentos2024/",
};

const Ecuador = () => {
  return (
    <Layout>
      <EncuentrosBanner
        btn={propsHeader.btn}
        download={propsHeader.download}
        banner={propsHeader.banner}
      />
      <Intro data={dataEcuador2024} />
      <IndexMemory data={dataEcuador2024} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Ecuador;