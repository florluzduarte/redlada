//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataSantiago2018 from "../../data/encuentros/2018-santiago.json";

const Santiago = () => {
  return (
    <Layout>
      <Intro data={dataSantiago2018} />
      <IndexMemory data={dataSantiago2018} />
    </Layout>
  );
};

export default Santiago;
