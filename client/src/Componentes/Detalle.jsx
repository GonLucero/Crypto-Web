//32)
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../actions/index";
import "../EstilosCss/Detalle.css";
import NavBar from "./Navbar";

function GameDetail(props) {
  console.log(props)
  const dispatch = useDispatch();
  // me traigo la info del videojuego
  const videojuego = useSelector((store) => store.buscarVideojuegoXId);
  // me traigo la id, que queda escrita en la url
  const {id} = useParams();

  useEffect(() => {
    dispatch(getCoin(id)); // apenas entre a la pagina, mandame la info
  }, []); 
  // console.log('llego',videojuego[0].symbol)
  return (    
    
    
    <div className="containerr">
      
      {videojuego[0]? // si me llego la informacion, renderizame todo
      
        <>
       <div><NavBar/></div>
      <div className="info">
      
     
        <div className="image">
        <div className="names"><p>{videojuego[0].symbol} <p className="genress">{videojuego[0].lastPrice}</p></p>
        
          
        <div >
            <span className="ratingg">{videojuego.rating}</span>
              </div>
                </div>
                <div>

<h5 className="sub">Released Date: {videojuego.released} |  Platforms: {videojuego.platforms}</h5>
</div>
{/* <div className="imgrating">
        {videojuego.symbol === null || !videojuego.symbol ?
              <img className = "img" src="https://www.alpha-editorial.com/images/loading.gif" alt="Link caido"/>
              : <img className="hola" src={videojuego.symbol} alt={videojuego.symbol} /> }
              <div className="text">
            <h2>Detail:</h2>
            <p>{videojuego.description}</p>
          </div>
        </div> */}
        </div>
       
      </div>
      </> // si todavia no llego pongo un loading
      : <img className = "img2" src="https://www.alpha-editorial.com/images/loading.gif" alt="Link caido"/>
    }
     
    </div>    
  );
}

export default GameDetail;