//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataTijuana2016 from "../../data/encuentros/2016-tijuana.json";

const Tijuana = () => {
  return (
    <Layout>
      <Intro data={dataTijuana2016} />
      <IndexMemory data={dataTijuana2016} />
    </Layout>
  );
};

export default Tijuana;
