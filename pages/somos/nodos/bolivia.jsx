//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Bolivia",
  country: "Bolivia",
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

const Bolivia = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Bolivia;
