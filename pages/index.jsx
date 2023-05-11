// Components
import Layout from "@/components/layout/Layout";
import FoodDesign from "@/components/home/FoodDesign";
import Navigation from "@/components/home/Navigation";
import Vision from "@/components/home/Vision";
import Objetivos from "@/components/home/Objetivos";
import Valores from "@/components/home/Valores";

export default function Home() {
  return (
    <Layout>
      <FoodDesign />
      <Navigation />
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
