// 15)

import React from 'react';
import {Link} from 'react-router-dom';
import '../EstilosCss/Carta.css';


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
	
	return (
		<Link to={`/cryptos/${data.symbol}`} style={{textDecoration:'none'}}> 
		{/* <div className='card' style={{backgroundColor:'black', borderColor: isbackgroundRed ? 'rgb(246, 70, 93)' : 'rgb(14, 203, 129)'}}> */}
			{/* Acá permito que al tocar la carta, pueda entrar al detalle */}
			
			{/* En el caso de no haber imagen, muestro la siguiente foto */}				
			<div className='card'>
	
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

