//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataCochabamba2019 from "../../data/encuentros/2019-cochabamba.json";

const propsHeader = {
  banner: {
    title: "7mo Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2019-cochabamba-banner.png",
      alt: "Banner encuentro Cochabamba 2019",
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
    "https://drive.google.com/file/d/1I11z1cnGl7D0g1lidJIPNEiwx1u5Z5Vz/view?usp=sharing",
};

const Cochabamba = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        download={propsHeader.download}
        btn={propsHeader.btn}
      />
      <Intro data={dataCochabamba2019} />
      <IndexMemory data={dataCochabamba2019} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Cochabamba;
