//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataUruguay2022 from "../../data/encuentros/2022-montevideo.json";

const propsHeader = {
  btn: {
    titleBtn: "Ver otros encuentros",
    href: "/hacemos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "green",
  },
  download: {
    href: "https://drive.google.com/file/d/16F10VZYJreMXgVijClPKkXl4gTd2E9XR/view?usp=sharing",
  },
};

const Montevideo = () => {
  return (
    <Layout>
      <EncuentrosBanner
        btn={propsHeader.btn}
        download={propsHeader.download.href}
      />
      <Intro data={dataUruguay2022} />
      <IndexMemory data={dataUruguay2022} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Montevideo;
