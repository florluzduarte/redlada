//Components
import Layout from "@/components/layout/Layout";
import EncuentrosBanner from "@/components/encuentros/EncuentrosBanner";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";
import NavigationMembers from "@/components/general/NavigationMembers";

//Data
import dataSantiago2018 from "../../data/encuentros/2018-santiago.json";

const propsHeader = {
  banner: {
    title: "6to Encuentro Latinoamericano de Food Design",
    image: {
      src: "/encuentros/2018-santiago-banner.png",
      alt: "Banner encuentro Santiago de Chile 2018",
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
    "https://drive.google.com/file/d/1p356ClCu3IL5TVic0GYeJWxohMrZgckU/view?usp=sharing",
};

const Santiago = () => {
  return (
    <Layout>
      <EncuentrosBanner
        banner={propsHeader.banner}
        btn={propsHeader.btn}
        download={propsHeader.download}
      />
      <Intro data={dataSantiago2018} />
      <IndexMemory data={dataSantiago2018} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default Santiago;
