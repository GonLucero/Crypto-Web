// 16)
import React from "react";
import Carta from "../Componentes/Carta";
import "../EstilosCss/Videojuegos.css"

export default function Videojuegos({cryptos}) {
  return (
    <div className="showing">
      {cryptos?.map((data) => (<Carta data={data} />))} // mapeo la info y renderizo Carta  
    </div>
  );
};

