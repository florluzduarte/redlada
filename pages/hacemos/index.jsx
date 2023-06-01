//Components
import Layout from "@/components/layout/Layout";
import Hero from "@/components/general/Hero";
import EncuentrosText from "@/components/hacemos/EncuentrosText";
import EncuentrosCards from "@/components/hacemos/EncuentrosCards";
import Educacion from "@/components/hacemos/Educacion";
import Cultura from "@/components/hacemos/Cultura";
import CulturaMemorias from "@/components/hacemos/CulturaMemorias";

//Data
import heroData from "../../data/general/hero.json";

const { type } = heroData.hacemos;

const Hacemos = () => {
  return (
    <Layout>
      <Hero type={type} />
      <EncuentrosText />
      <EncuentrosCards />
      <Educacion />
      <Cultura />
      <CulturaMemorias />
    </Layout>
  );
};

export default Hacemos;
