import React from "react";
import imgDestinosdepaldea from "../assets/destinosdepaldea/logodestinosdepaldea.png";

const Categorias = () => {
  return (
    <div className="categorias">
      <p className="categoria categoria--selecionada"><img src={imgDestinosdepaldea} /></p>
      <p className="categoria">Coroa Estelar</p>
      <p className="categoria">Evoluções Prismáticas</p>
    </div>
  );
};

export default Categorias;
