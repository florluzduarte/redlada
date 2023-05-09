// Components
import Layout from "@/components/layout/Layout";
import Valores from "@/components/home/Valores";
import Objetivos from "@/components/home/Objetivos";
import Vision from "@/components/home/Vision";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
