//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Costa Rica",
  country: "Costa Rica",
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

const CostaRica = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default CostaRica;
