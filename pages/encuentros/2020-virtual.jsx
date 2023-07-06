//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataVirtual2020 from "../../data/encuentros/2020-virtual.json";

const propsHeader = {
  banner: {
    title: "8vo Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2020-virtual-banner.png",
      alt: "Banner encuentro Montevideo virtual 2020",
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
    "https://drive.google.com/file/d/1PbmZi9wl_rK9TsnerfPQundsEsAjZ6Rk/view?usp=sharing",
};

const Virtual = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataVirtual2020} />
      <IndexMemory data={dataVirtual2020} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Virtual;
