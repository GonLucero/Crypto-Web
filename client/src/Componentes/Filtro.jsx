// 18)
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtradoXGenero, ordenAsc, ordenDesc } from "../actions/index";
import "../EstilosCss/Filtro.css";
// me llega como prop una funcion paginado, que setea la numero de la pagina
export function Filter({paginado}) {
  const dispatch = useDispatch()
  // const generos = useSelector((store) => store.generos); // me traigo todos los generos
  const filtrado = useSelector((state) => state.filtrado);
  const orden = useSelector((state) => state.orden);

  // Filtrado por genero
  const handleFilter = (e) => {
    
    dispatch(filtradoXGenero(e.target.value)) // despacho la funcion fitrado x genero donde le paso( el genero seleccionado)
    paginado(e, 1); // pongo para que me muestre la pagina 1}
    if(orden === "desc_rating" || orden === "desc_nombre"){
      dispatch(ordenDesc(orden))
      console.log('aca estaaa',filtrado,orden)
    }else if((orden === "asc_rating" || orden === "asc_nombre")){
      dispatch(ordenAsc(orden))
      console.log('aca estaaaaaaaa',filtrado,orden)
    }
  };


  // Ordenado
  const handleOrder = (e) => {
    // si lo que me llega es un ordenado de ascendente
    if (e.target.value === "asc_nombre" || e.target.value === "asc_rating") {
      dispatch(ordenAsc(e.target.value)); //
    } else if (e.target.value === "desc_nombre" || e.target.value === "desc_rating" ) {
      dispatch(ordenDesc(e.target.value)); // acá le mando la opcion elegida
    }
    // }else {
    //   dispatch(filtradoXGenero(e.target.value));
    // }
  };

  

  // Filtrado por API/DB
  // const handleCreator = (e) => {
  //   if (e.target.value === "Api" || e.target.value === "Created") { // si cambio la opcion
  //     dispatch(ordenXCreado(e.target.value)); // voy a la accion y le paso lo seleccionado
  //     paginado(e, 1); // coloco la pagina en 1
  //   } else { // en el caso de ser all, me traigo todos los videojuegos
  //     dispatch(filtradoXGenero(e.target.value));
  //     paginado(e, 1); // coloco la pagina en 1
  //   }
    
  // };

  return (
    <div className="filter">
         <div>
        <div style={{color:'white', fontWeight:'530'}}>Exchange Rate</div>
        <select classname='select' onChange={(e) => handleFilter(e)}>
          <option value="busd" default>BUSD</option>
          <option value="btc" >BITCOIN</option>
          <option value="eth" >ETHEREUM</option>
          <option value="usdt" >TETHER</option>
          <option value="bnb" >BINANCE COIN</option>
        </select>
      </div>
      {/* <div>
        <div>Filter by Source</div>
        <select onChange={(e) => handleCreator(e)} >
          <option default>All</option>
          <option value="Api">From API</option>
          <option value="Created">Created</option>
        </select>
      </div> */}
       <div>
        <div style={{color:'white', fontWeight:'530'}}>Order</div>
        <select classname='select' onChange={(e) => handleOrder(e)}>
          {/* <option value="All" default>All</option> */}
          <option value="desc_rating" default>PRICE ⬆</option>
          <option value="asc_rating">PRICE ⬇</option>
          <option value="asc_nombre">(A-Z)</option>
          <option value="desc_nombre">(Z-A)</option>
          
       
        </select>
      </div>

   
     
     
    </div>
  );
}

export default Filter;