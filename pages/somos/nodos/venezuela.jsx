//Components
import LayoutNodos from "@/components/somos/nodos/LayoutNodos";

const propsHeader = {
  titleSection: "Nodo Venezuela",
  country: "Venezuela",
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

const Venezuela = () => {
  return <LayoutNodos propsHeader={propsHeader} />;
};
export default Venezuela;
