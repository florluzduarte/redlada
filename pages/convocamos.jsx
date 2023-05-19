//Components
import Layout from "@/components/layout/Layout";
import News from "@/components/convocamos/News";
import MapFoodDesign from "@/components/convocamos/MapFoodDesign";
import Revista from "@/components/convocamos/Revista";

const Convocamos = () => {
  return (
    <Layout color="white">
      <News />
      <MapFoodDesign />
      <Revista />
    </Layout>
  );
};

export default Convocamos;
