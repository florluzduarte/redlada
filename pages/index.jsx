// Components
import Layout from "@/components/layout/Layout";
import Navigation from "@/components/home/Navigation";
import Vision from "@/components/home/Vision";
import Objetivos from "@/components/home/Objetivos";
import Valores from "@/components/home/Valores";
import Card from "@/components/general/Card";

import visionHome from "../public/vision-home.png";

const testingCard = {
  title: "Hola",
  href: "/test",
  text: "Soy flor testeando este componente",
  color: "orange",
  type: "presentation",
  imageSrc: visionHome,
  alt: "Cualquier cosa que sea la imagen",
};

const { title, href, text, color, imageSrc, alt, type } = testingCard;

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Navigation />
      <Card
        title={title}
        href={href}
        color={color}
        imageSrc={imageSrc}
        alt={alt}
        type={type}
      >
        <p>{text}</p>
      </Card>
      <Vision />
      <Objetivos />
      <Valores />
    </Layout>
  );
}
