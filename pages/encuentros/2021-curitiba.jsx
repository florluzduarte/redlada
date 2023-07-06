//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataCuritiba2021 from "../../data/encuentros/2021-curitiba.json";

const propsHeader = {
  banner: {
    title: "9no Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2021-curitiba-banner.png",
      alt: "Banner encuentro Curitiba 2022",
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
    "https://drive.google.com/file/d/1gm9p8IuoSjjrlpfmpEg8tMBEzoXXiR-x/view?usp=sharing",
};

const Curitiba = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        download={propsHeader.download}
        btn={propsHeader.btn}
      />
      <Intro data={dataCuritiba2021} />
      <IndexMemory data={dataCuritiba2021} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Curitiba;
