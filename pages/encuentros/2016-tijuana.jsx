//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataTijuana2016 from "../../data/encuentros/2016-tijuana.json";

const propsHeader = {
  banner: {
    title: "4to Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2016-tijuana-banner.png",
      alt: "Banner encuentro Ensenada 2016",
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
    "https://drive.google.com/file/d/1AujIjXiIxVC5clG1lpGFvfArKP534omb/view?usp=sharing",
};

const Tijuana = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataTijuana2016} />
      <IndexMemory data={dataTijuana2016} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Tijuana;
