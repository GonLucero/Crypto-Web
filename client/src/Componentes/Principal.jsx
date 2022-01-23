// 14)

import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptos, resetTodo, ordenDesc, filtradoXGenero, ordenAsc } from "../actions/index";
import Videojuegos from "../Componentes/Videojuegos";
import { Paginacion } from "../Componentes/Paginado";
import Filtro from "../Componentes/Filtro.jsx";
import "../EstilosCss/Principal.css";
import NavBar from "./Navbar";

export default function Home() {
  const dispatch = useDispatch();

  const videojuegosFiltrados = useSelector((state) => state.videojuegosFiltrados);
  const filtrado = useSelector((state) => state.filtrado);
  const orden = useSelector((state) => state.orden);
  const cryptos = useSelector((state) => state.cryptosok);
  const cryptosss = useSelector((state) => state.cryptos);

  //apenas inicie me traigo todos los juegos y reseteo los filtros/ordenamientos y los videojuegos 
  useEffect(() => {
    dispatch(resetTodo());
    dispatch(getCryptos());
  
    
   
  }, []); 
  
  useEffect(() => {

    console.log('inicio acá')
    // dispatch(filtradoXGenero("btc"));
    dispatch(filtradoXGenero("usd"));
    dispatch(ordenDesc("desc_rating"));

    
   
  }, [cryptosss]); 



  

  // Filtrado y Ordenado

  
  // orden === "Select"
     let todosJuegos = videojuegosFiltrados // muestro todos los videojuegos si no hay filtro/ordenamientos
 // si hay, muestro los videojuegos filtrados

  // Paginacion
  function paginado(e, num) {
    e.preventDefault();
    setPagina(num);
  }

  const [pagina, setPagina] = useState(1); // seteo el estado pagina, que empieza en 1
  const [videojuegosXPag] = useState(30); // acá pongo el max de juegos que voy a mostrar

  let ultimaCardPag = pagina * videojuegosXPag; // la ultima card 
  let primerCardPag = ultimaCardPag - videojuegosXPag; // la primera card
  let juegosPagActual = todosJuegos.slice(primerCardPag, ultimaCardPag); // acá muestro solo 15 videojuegos segun el numero del paginado


  return (
    <div className="home">
      <div className="gg2"><NavBar/></div>
      <div>
      <Filtro paginado={paginado} /> 
      </div>
      <Paginacion
      videojuegosXPag={videojuegosXPag}
      totalVideojuegos={todosJuegos.length}
      paginado={paginado}
    />
    
  
    <div>  <Videojuegos cryptos={juegosPagActual} /></div>
    <Paginacion
      videojuegosXPag={videojuegosXPag}
      totalVideojuegos={todosJuegos.length}
      paginado={paginado}
    />
   
  </div>
  );
};