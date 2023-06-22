//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Colombia",
  country: "Colombia",
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

const Colombia = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Colombia;
