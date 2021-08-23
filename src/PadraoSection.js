import React from "react";
import "./padraoSection.css";
// import { ? } from "./styles";

function PadraoSection({
  mainheader,
  mainsubtitle,
  maindescription,
  maintext,
  titulo,
  subtitulo,
  descricao,
  texto,
  complemento,
}) {
  return (
    <>
      <div>
        <h1 classname='mainheader'>{titulo}</h1>
        <div classname={mainsubtitle}>
          <h2>{subtitulo}</h2>
        </div>
        <div className={maindescription}>
          <p> {descricao} </p>
        </div>
        <div className={maintext}>
          <p>{texto}</p>
        </div>
      </div>
    </>
  );
}

export default PadraoSection;