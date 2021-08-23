import React from "react";
import "./PadraoSection.css";

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
      <div className="flex-box">
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