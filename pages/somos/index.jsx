//Components
import Layout from "@/components/layout/Layout";
import Contexto from "@/components/somos/Contexto";
import Participantes from "@/components/somos/Participantes";
import Hero from "@/components/general/Hero";

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
