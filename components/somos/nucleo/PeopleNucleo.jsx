//Components
import CardMembersComplete from "../fundacional/CardMembersComplete";

//Styles
import styles from "../../../styles/somos/nucleo/PeopleNucleo.module.css";

const modelo = {
  id: "malena-pasin",
  name: "Malena Pasin",
  country: "Argentina",
  flag: {
    code: "ar",
    alt: "Bandera de Argentina",
  },
  email: "malena.pasin@gmail.com",
  bio: [
    {
      text: "Soy Diseñadora Industrial y Especialista en Metodología de la Investigación Científica, docente e investigadora en grado y posgrado en áreas de Metodología de la investigación. Actualmente, estoy a cargo del CEPRODIDE, centro de investigación en diseño de la Facultad de Arquitectura, Diseño y Urbanismo de la UBA (Argentina) que desarrolla temáticas vinculadas a diseño y desarrollo. El food design, además de atravesar mi vida cotidiana y personal, se involucra con mis experiencias docentes, donde observo y difundo casos sobre Diseño y Alimentos enfocando en los actores involucrados, el momento de aplicación del diseño en la cadena de valor y qué estrategias proyectuales se habilitan, de acuerdo a cada marco conceptual. Participo en la RedLaFD desde el año 2013 y desde 2018, soy Líder de Nodos.",
      key: 1,
    },
  ],
  website: [
    {
      href: "https://www.instagram.com/metodo_uba/",
      title: "@metodo__uba",
      key: 1,
    },
  ],
  photo:
    "https://res.cloudinary.com/dgixc3e9z/image/upload/v1678460224/redlada/core/Malena_Pasin_pwbkky.webp",
  active: true,
  spokesman: true,
  type: "nucleo",
};

const PeopleNucleo = () => {
  return (
    <div>
      <CardMembersComplete member={modelo} type="nucleo" />
    </div>
  );
};

export default PeopleNucleo;
