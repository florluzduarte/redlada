//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Paraguay",
  country: "Paraguay",
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

const Paraguay = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Paraguay;
