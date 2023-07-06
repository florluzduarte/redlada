//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Cuba",
  country: "Cuba",
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

const Cuba = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Cuba;
