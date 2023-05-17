//Components
import Layout from "@/components/layout/Layout";
import EncuentrosText from "@/components/hacemos/EncuentrosText";
import EncuentrosCards from "@/components/hacemos/EncuentrosCards";
import Educacion from "@/components/hacemos/Educacion";
import Cultura from "@/components/hacemos/Cultura";
import CulturaMemorias from "@/components/hacemos/CulturaMemorias";

const Hacemos = () => {
  return (
    <Layout>
      <EncuentrosText />
      <EncuentrosCards />
      <Educacion />
      <Cultura />
      <CulturaMemorias />
    </Layout>
  );
};

export default Hacemos;
