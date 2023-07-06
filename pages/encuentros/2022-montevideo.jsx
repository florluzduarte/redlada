//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataUruguay2022 from "../../data/encuentros/2022-montevideo.json";

const propsHeader = {
  banner: {
    title: "10mo Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2022-montevideo-banner.png",
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
    "https://drive.google.com/file/d/16F10VZYJreMXgVijClPKkXl4gTd2E9XR/view?usp=sharing",
};

const Montevideo = () => {
  return (
    <Layout>
      <EncuentrosBanner
        btn={propsHeader.btn}
        download={propsHeader.download}
        banner={propsHeader.banner}
      />
      <Intro data={dataUruguay2022} />
      <IndexMemory data={dataUruguay2022} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Montevideo;
