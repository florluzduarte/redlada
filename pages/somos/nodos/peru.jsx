//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Perú",
  country: "Perú",
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

const Peru = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Peru;
