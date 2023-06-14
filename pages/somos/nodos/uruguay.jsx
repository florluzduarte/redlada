//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Uruguay",
  country: "Uruguay",
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

const Uruguay = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Uruguay;
