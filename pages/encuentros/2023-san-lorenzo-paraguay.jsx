//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataParaguay2023 from "../../data/encuentros/2023-paraguay.json";

const propsHeader = {
  banner: {
    title: "11vo Encuentro Latinoamericano de Diseño y Alimentos",
    image: {
      src: "/encuentros/2023-paraguay-banner.png",
      alt: "Banner encuentro Montevideo 2022",
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
    "https://drive.google.com/file/d/1JZ9T6sJ_ILzzelGJqMURegfTMPZ1a5Jl/view?usp=sharing",
};

const Paraguay = () => {
  return (
    <Layout>
      <EncuentrosBanner
        btn={propsHeader.btn}
        download={propsHeader.download}
        banner={propsHeader.banner}
      />
      <Intro data={dataParaguay2023} />
      <IndexMemory data={dataParaguay2023} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Paraguay;