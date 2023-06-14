//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Brasil",
  country: "Brasil",
  btn: {
    titleBtn: "Volver a Nodos",
    href: "/somos/nodos",
    icon: {
      position: "left",
      type: "regular",
    },
    color: "pink",
  },
};

const Brasil = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Brasil;
