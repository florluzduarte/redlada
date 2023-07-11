//Libraries
import { AiOutlinePaperClip } from "react-icons/ai";

//Components
import EncuentrosDownloadBtn from "../encuentros/EncuentrosDownloadBtn";

const CardPublicaciones = () => {
  return (
    <a href="https://ceprodide.com.ar" target="_blank">
      <AiOutlinePaperClip />
      <h2>Memorias 9no Encuentro Latinoamericano de Food Design</h2>
      <div></div>
      <div>
        <p>
          <span>Fecha de publicacion: </span>Julio 2021
        </p>
        <p>
          <span>Publicado por: </span>Red Latinoamericana de Diseño y Alimentos
        </p>
        <p>
          <span>ISBN: </span>978-9974-8752-2-7
        </p>
      </div>
      <EncuentrosDownloadBtn />
    </a>
  );
};

export default CardPublicaciones;
