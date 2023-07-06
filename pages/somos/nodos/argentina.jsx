//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodos - Argentina",
  country: "Argentina",
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

const Argentina = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};

export default Argentina;
