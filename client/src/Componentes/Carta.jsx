// 15)

import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import '../EstilosCss/Carta.css';
import busd from "./images/busd.png"
import btc from "./images/Bitcoin-Logo.png"
import eth from "./images/ethereum.png"
import bnb from "./images/bnb.png"
import tether from "./images/tether.png"


function Card({data}) { // acá recibo ya la info mapeada de todos los videogamea mostrar
	// console.log('aca llega data', data)
	let flecha = 'hola';
	var isbackgroundRed = true	
	if(data.priceChangePercent > 0){
	isbackgroundRed = false
	flecha = '▲';
	}else{
		isbackgroundRed = true
		flecha = '▼'
	}
	let coin = ''
	if(data.symbol.lastIndexOf('BUSD') > 2){
		coin = busd
	}
	if(data.symbol.lastIndexOf('BTC') > 2){
		coin = btc
	}
	if(data.symbol.lastIndexOf('ETH') > 2){
		coin = eth
	}
	if(data.symbol.lastIndexOf('USDT') > 2){
		coin = tether
	}
	if(data.symbol.lastIndexOf('BNB') > 2){
		coin = bnb
	}
	
	return (
		<Link to={`/cryptos/${data.symbol}`} style={{textDecoration:'none'}}> 
		{/* <div className='card' style={{backgroundColor:'black', borderColor: isbackgroundRed ? 'rgb(246, 70, 93)' : 'rgb(14, 203, 129)'}}> */}
			{/* Acá permito que al tocar la carta, pueda entrar al detalle */}
			
			{/* En el caso de no haber imagen, muestro la siguiente foto */}				
			<div className='card'>
						<img src={coin} alt="" style={{width:'4vw'}}/>
						<b style={{color:'white', fontSize:'20px'}}>{data.symbol} </b>
						<b style={{color:'white',fontSize:'20px'}}>$ {parseFloat(data.lastPrice).toFixed(4)}</b>
						<b style={{fontSize:'19px', color:isbackgroundRed ? '#ea3943' : '#16c784'}}>{flecha}                                 {data.priceChangePercent}%</b>

						<a>High 24h:                              {'$'+parseFloat(data.highPrice).toFixed(4)}</a>
						<a>Low 24h:                               {'$'+parseFloat(data.lowPrice).toFixed(4)}</a>
					<a>Open 24h:                              {'$'+parseFloat(data.openPrice).toFixed(4)}</a>
			</div>
			
		{/* </div> */}
		</Link>
	);
}

export default Card;

