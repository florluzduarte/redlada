// Components
import Layout from "@/components/layout/Layout";
import Hero from "@/components/general/Hero";
import FoodDesign from "@/components/home/FoodDesign";
// import Navigation from "@/components/home/Navigation";
// import Vision from "@/components/home/Vision";
// import Objetivos from "@/components/home/Objetivos";
// import Valores from "@/components/home/Valores";
import News from "@/components/convocamos/News";
import MediaLinks from "@/components/convocamos/MediaLinks";

const bannerType = "home";

export default function Home() {
  return (
    <Layout color="white">
      {/* <Hero type={bannerType} /> */}
      <Hero type="convocamos" />
      {/* <TeaserPage /> */}
      <News />
      {/* <FoodDesign /> */}
      {/* <Navigation />
      <Vision />
      <Objetivos />
      <Valores /> */}
      <MediaLinks />
    </Layout>
  );
}
