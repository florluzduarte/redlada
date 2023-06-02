// Components
import Layout from "@/components/layout/Layout";
import Hero from "@/components/general/Hero";
import FoodDesign from "@/components/home/FoodDesign";
import Navigation from "@/components/home/Navigation";
import Vision from "@/components/home/Vision";
import Objetivos from "@/components/home/Objetivos";
import Valores from "@/components/home/Valores";

const bannerType = "home";

export default function Home() {
  return (
    <Layout>
      <Hero type={bannerType} />
      <FoodDesign />
      <Navigation />
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
