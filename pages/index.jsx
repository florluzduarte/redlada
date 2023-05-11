// Components
import Layout from "@/components/layout/Layout";
import Navigation from "@/components/home/Navigation";
import Vision from "@/components/home/Vision";
import Objetivos from "@/components/home/Objetivos";
import Valores from "@/components/home/Valores";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Navigation />
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
