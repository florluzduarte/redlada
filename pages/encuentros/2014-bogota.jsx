//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataBogota2014 from "../../data/encuentros/2014-bogota.json";

const propsHeader = {
  banner: {
    title: "2do Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2014-bogota-banner.png",
      alt: "Banner encuentro Bogotá 2014",
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
    "https://drive.google.com/file/d/1okdu07NDZh85abrCdMUJFxxkRIbCM2Re/view?usp=sharing",
};

const Bogota = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        download={propsHeader.download}
        btn={propsHeader.btn}
      />
      <Intro data={dataBogota2014} />
      <IndexMemory data={dataBogota2014} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Bogota;
