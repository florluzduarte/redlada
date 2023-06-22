//Componentes
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";

const propsHeader = {
  titleSection: "Amigos",
  btn: {
    titleBtn: "Volver a Somos",
    href: "/somos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "green",
  },
};

const Amigos = () => {
  return (
    <Layout>
      <Header titleSection={propsHeader.titleSection} btn={propsHeader.btn}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          officia atque reprehenderit eius minima animi at quos eligendi totam
          iusto tenetur, ratione hic amet? Praesentium iste tempora, magnam
          minus mollitia iusto impedit sint quae quam similique, animi veritatis
          alias repudiandae facere aut numquam? Quis quisquam odio iure
          explicabo debitis accusamus?
        </p>
      </Header>
    </Layout>
  );
};

export default Amigos;
