//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataBsas2017 from "../../data/encuentros/2017-bsas.json";

const BuenosAires = () => {
  return (
    <Layout>
      <Intro data={dataBsas2017} />
      <IndexMemory data={dataBsas2017} />
    </Layout>
  );
};

export default BuenosAires;
