//Components
import Layout from "@/components/layout/Layout";
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataUruguay2022 from "../../data/encuentros/2022-montevideo.json";

const Montevideo = () => {
  return (
    <Layout>
      <Intro data={dataUruguay2022} />
      <IndexMemory data={dataUruguay2022} />
    </Layout>
  );
};

export default Montevideo;
