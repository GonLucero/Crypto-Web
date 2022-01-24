//32)
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../actions/index";
import "../EstilosCss/Detalle.css";
import NavBar from "./Navbar";
import image from "./images/bold-preloader.gif"
import bit from "./images/Bitcoin-Logo.png"
import busd from "./images/busd.png"
import btc from "./images/Bitcoin-Logo.png"
import eth from "./images/ethereum.png"
import bnb from "./images/bnb.png"
import tether from "./images/tether.png"


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

  let flecha = 'hola';
	var isbackgroundRed = true	
	if(videojuego[0]?.priceChangePercent > 0){
	isbackgroundRed = false
	flecha = '▲';
	}else{
		isbackgroundRed = true
		flecha = '▼'
	}
	let coin = ''
	if(videojuego[0]?.symbol.lastIndexOf('BUSD') > 2){
		coin = busd
	}
	if(videojuego[0]?.symbol.lastIndexOf('BTC') > 2){
		coin = btc
	}
	if(videojuego[0]?.symbol.lastIndexOf('ETH') > 2){
		coin = eth
	}
	if(videojuego[0]?.symbol.lastIndexOf('USDT') > 2){
		coin = tether
	} 
	if(videojuego[0]?.symbol.lastIndexOf('BNB') > 2){
		coin = bnb
	}

  return (    
    
    
    <div className="containerr">
      
      {videojuego[0]? // si me llego la informacion, renderizame todo
      
        <>
      <div className="info">
      
     
        <div className="image">
        <div className="names">
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:'-5vw'}}>
            <img className="imagennn" src={coin} alt="" />
          <b>{videojuego[0].symbol} </b>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
          <b className="lastprice">${parseFloat(videojuego[0].lastPrice).toFixed(4)} </b>
          <b className="porcent" style={{backgroundColor:isbackgroundRed ? '#ea3943' : '#16c784'}}>{flecha}{parseFloat(videojuego[0].priceChangePercent).toFixed(3)}%</b>
          </div>
                </div>
          
        </div>
        
      </div>
      <div className="sep"></div>
      <div className="bottom">
        <div className="bottom1">
        <div className="titleee" style={{fontSize:'35px', fontWeight:700,}}>PRICE</div>
        <div >
        <p>Weighted Average Price:</p>
        <b>{parseFloat(videojuego[0].weightedAvgPrice).toFixed(3)}%</b>
        </div>
        <div>
        <p>Previus Close Price:</p>
        <b>${parseFloat(videojuego[0].prevClosePrice).toFixed(3)}</b>
        </div>
        <div>
        <p>Open Price:</p>
        <b>${parseFloat(videojuego[0].openPrice).toFixed(3)}</b>
        </div>
        <div>
        <p>High Price:</p>
        <b>${parseFloat(videojuego[0].highPrice).toFixed(3)}</b>
        </div>
        </div>
        <div style={{backgroundColor: 'black', width:'0.3vw'}}></div>
        <div className="bottom2">
          <div className="titleee" style={{fontSize:'35px', fontWeight:700}}>VOLUME</div>
        <div>
        <p>Volume:</p>
        <b>{parseFloat(videojuego[0].volume).toFixed(5)}</b>
        </div>
        <div>
        <p>Quote Volume:</p>
        <b>{parseFloat(videojuego[0].quoteVolume).toFixed(5)}</b>
        </div>
        <div>
        <p>Last Quantity:</p>
        <b>{parseFloat(videojuego[0].lastQty).toFixed(5)}</b>
        </div>
        <div>
        <p>Count:</p>
        <b>{(videojuego[0].count)}</b>
        </div>
        </div>
        <div style={{backgroundColor: 'black', width:'0.3vw'}}></div>
        <div className="bottom3">
        <div className="titleee" style={{fontSize:'35px', fontWeight:700}}>SPREAD</div>
        <div>
        <p>Bid Price:</p>
        <b>${parseFloat(videojuego[0].bidPrice).toFixed(3)}</b>
        </div>
        <div>
        <p>Bid Quatity:</p>
        <b>{parseFloat(videojuego[0].bidQty).toFixed(3)}</b>
        </div>
        <div>
        <p>Ask Price:</p>
        <b>${parseFloat(videojuego[0].askPrice).toFixed(3)}</b>
        </div>
        <div>
        <p>Ask Quantity:</p>
        <b>{parseFloat(videojuego[0].askQty).toFixed(3)}</b>
        </div>
        </div>
      </div>
      </> // si todavia no llego pongo un loading
      : <img className = "img2" src={image} alt="Link caido"/>
    }
    </div>    
  );
}

export default GameDetail;