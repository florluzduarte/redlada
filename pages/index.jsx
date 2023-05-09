// Components
import Layout from "@/components/layout/Layout";
import Navigation from "@/components/home/Navigation";
import Vision from "@/components/home/Vision";
import Objetivos from "@/components/home/Objetivos";
import Valores from "@/components/home/Valores";
import CardBody from "@/components/general/CardBody";

const testingCard = {
  title: "Hola",
  href: "/test",
  text: "Soy flor testeando este componente",
  color: "orange",
  image: "/vision-home.png",
};

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Navigation />
      <CardBody
        title={testingCard.title}
        href={testingCard.href}
        color={testingCard.color}
      >
        <p>{testingCard.text}</p>
      </CardBody>
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
