//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataPortoAlegre2015 from "../../data/encuentros/2015-porto-alegre.json";

const propsHeader = {
  banner: {
    title: "3er Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2015-porto-alegre-banner.png",
      alt: "Banner encuentro Porto Alegre 2015",
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
    "https://drive.google.com/file/d/1OGgKzLsKQ0G2nEp2ePJT1BCcE0ntnTZx/view?usp=sharing",
};

const PortoAlegre = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataPortoAlegre2015} />
      <IndexMemory data={dataPortoAlegre2015} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default PortoAlegre;
