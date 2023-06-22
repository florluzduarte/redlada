//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Chile",
  country: "Chile",
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

const Chile = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Chile;
