//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataCuritiba2021 from "../../data/encuentros/2021-curitiba.json";

const Curitiba = () => {
  return (
    <Layout>
      <Intro data={dataCuritiba2021} />
      <IndexMemory data={dataCuritiba2021} />
    </Layout>
  );
};

export default Curitiba;
