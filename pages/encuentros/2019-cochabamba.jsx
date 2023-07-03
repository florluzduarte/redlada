//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataCochabamba2019 from "../../data/encuentros/2019-cochabamba.json";

const Cochabamba = () => {
  return (
    <Layout>
      <Intro data={dataCochabamba2019} />
      <IndexMemory data={dataCochabamba2019} />
    </Layout>
  );
};

export default Cochabamba;
