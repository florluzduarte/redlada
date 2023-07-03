//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataVirtual2020 from "../../data/encuentros/2020-virtual.json";

const Virtual = () => {
  return (
    <Layout>
      <Intro data={dataVirtual2020} />
      <IndexMemory data={dataVirtual2020} />
    </Layout>
  );
};

export default Virtual;
