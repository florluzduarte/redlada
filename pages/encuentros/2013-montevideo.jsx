//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataMontevideo2013 from "../../data/encuentros/2013-montevideo.json";

const propsHeader = {
  banner: {
    title: "1er Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2013-montevideo-banner.png",
      alt: "Banner encuentro Montevideo 2013",
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
    "https://drive.google.com/file/d/14-LbHZhl6nSaqnCUo3aowqDwk0zK5hWS/view?usp=sharing",
};

const Montevideo2013 = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataMontevideo2013} />
      <IndexMemory data={dataMontevideo2013} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Montevideo2013;
