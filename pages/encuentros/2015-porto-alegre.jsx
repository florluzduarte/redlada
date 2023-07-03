//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataPortoAlegre2015 from "../../data/encuentros/2015-porto-alegre.json";

const PortoAlegre = () => {
  return (
    <Layout>
      <Intro data={dataPortoAlegre2015} />
      <IndexMemory data={dataPortoAlegre2015} />
    </Layout>
  );
};

export default PortoAlegre;
