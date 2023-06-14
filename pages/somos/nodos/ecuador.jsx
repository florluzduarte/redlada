//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Ecuador",
  country: "Ecuador",
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

const Ecuador = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Ecuador;
