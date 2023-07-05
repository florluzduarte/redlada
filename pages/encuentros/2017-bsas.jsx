//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataBsas2017 from "../../data/encuentros/2017-bsas.json";

const propsHeader = {
  banner: {
    title: "5to Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2017-bsas-banner.png",
      alt: "Banner encuentro Buenos Aires 2017",
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
    "https://drive.google.com/file/d/1tGTH9_60D-BJCZdW2nieWApy_1zUJgpC/view?usp=sharing",
};

const BuenosAires = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataBsas2017} />
      <IndexMemory data={dataBsas2017} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default BuenosAires;
