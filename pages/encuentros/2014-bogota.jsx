//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataBogota2014 from "../../data/encuentros/2014-bogota.json";

const Bogota = () => {
  return (
    <Layout>
      <Intro data={dataBogota2014} />
      <IndexMemory data={dataBogota2014} />
    </Layout>
  );
};

export default Bogota;
