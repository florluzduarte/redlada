//Components
import Layout from "@/components/layout/Layout";
import Contexto from "@/components/somos/Contexto";
import Participantes from "@/components/somos/Participantes";
import Hero from "@/components/general/Hero";

//Data
import heroData from "../../data/general/hero.json";

const { type } = heroData.somos;

const Somos = () => {
  return (
    <Layout color="white">
      <Hero type={type} />
      <Contexto />
      <Participantes />
    </Layout>
  );
};

export default Somos;
