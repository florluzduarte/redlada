//Components
import Intro from "@/components/encuentros/Intro";
import IndexMemory from "@/components/encuentros/IndexMemory";

//Data
import dataEncuentro from "../../data/encuentros/2021-curitiba.json";

const Curitiba = () => {
  return (
    <>
      <Intro data={dataEncuentro} />
      <IndexMemory data={dataEncuentro} />
    </>
  );
};

export default Curitiba;
