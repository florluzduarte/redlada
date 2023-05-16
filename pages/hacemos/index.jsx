//Components
import Layout from "@/components/layout/Layout";
import EncuentrosText from "@/components/hacemos/EncuentrosText";
import EncuentrosCards from "@/components/hacemos/EncuentrosCards";
import Educacion from "@/components/hacemos/Educacion";

const Hacemos = () => {
  return (
    <Layout>
      <EncuentrosText />
      <EncuentrosCards />
      <Educacion />
    </Layout>
  );
};

export default Hacemos;
