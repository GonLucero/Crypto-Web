// 16)
import React from "react";
import Carta from "../Componentes/Carta";
import "../EstilosCss/Videojuegos.css"

export default function Videojuegos({cryptos}) {
  return (
    <div className="showing">
      {/* mapeo la info y renderizo Carta  */}
      {cryptos?.map((data) => (<Carta data={data} />))}  
    </div>
  );
};

