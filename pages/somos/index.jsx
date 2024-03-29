//Components
import Layout from "@/components/layout/Layout";
import Hero from "@/components/general/Hero";
import Contexto from "@/components/somos/Contexto";
import Participantes from "@/components/somos/Participantes";

const bannerType = "somos";

const Somos = () => {
  return (
    <Layout color="white">
      <Hero type={bannerType} />
      <Contexto />
      <Participantes />
    </Layout>
  );
};

export default Somos;
