//Components
import Layout from "@/components/layout/Layout";
import Header from "@/components/general/Header";
import NavigationMembers from "@/components/general/NavigationMembers";
import PeopleNodos from "@/components/somos/nodos/PeopleNodos";

const LayoutNodos = ({ propsHeader }) => {
  return (
    <Layout>
      <Header btn={propsHeader.btn} titleSection={propsHeader.titleSection} />
      <PeopleNodos country={propsHeader.country} />
      <NavigationMembers btn={propsHeader.btn} />
    </Layout>
  );
};

export default LayoutNodos;
