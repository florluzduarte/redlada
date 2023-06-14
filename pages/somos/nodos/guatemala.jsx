//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Guatemala",
  country: "Guatemala",
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

const Guatemala = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Guatemala;
