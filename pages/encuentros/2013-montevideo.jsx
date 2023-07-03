//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataMontevideo2013 from "../../data/encuentros/2013-montevideo.json";

const Montevideo2013 = () => {
  return (
    <Layout>
      <Intro data={dataMontevideo2013} />
      <IndexMemory data={dataMontevideo2013} />
    </Layout>
  );
};

export default Montevideo2013;
