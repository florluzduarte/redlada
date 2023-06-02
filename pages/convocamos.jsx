//Components
import Layout from "@/components/layout/Layout";
import Hero from "@/components/general/Hero";
import News from "@/components/convocamos/News";
import MapFoodDesign from "@/components/convocamos/MapFoodDesign";
import Revista from "@/components/convocamos/Revista";
import MediaLinks from "@/components/convocamos/MediaLinks";

const bannerType = "convocamos";

const Convocamos = () => {
  return (
    <Layout color="white">
      <Hero type={bannerType} />
      <News />
      <MapFoodDesign />
      <Revista />
      <MediaLinks />
    </Layout>
  );
};

export default Convocamos;
