// 15)

import React from 'react';
import {Link} from 'react-router-dom';
import '../EstilosCss/Carta.css';


function Card({data}) { // acá recibo ya la info mapeada de todos los videogamea mostrar
	// console.log('aca llega data', data)
	var isbackgroundRed = true	
	if(data.priceChangePercent > 0){
	isbackgroundRed = false
	}else{
		isbackgroundRed = true
	}
	
	return (
		<div className='card' style={{borderColor: isbackgroundRed ? 'rgb(246, 70, 93)' : 'rgb(14, 203, 129)'}}>
			{/* Acá permito que al tocar la carta, pueda entrar al detalle */}
			<Link to={`/videogames/${data.symbol}`}> 
			{/* En el caso de no haber imagen, muestro la siguiente foto */}				

		<a className='img' >{data.symbol}</a>
			
				
			</Link>
			<div className='textCard'>
				<div className='nameGenres'>
					{/* Renderizo toda la info, que quiero mostrar: */}
					<div className='name'>{parseFloat(data.lastPrice)}</div>
					<div className='genres'>Open 24H:{parseFloat(data.openPrice).toFixed(4)}</div>
					<div className='genres'>High 24H:{parseFloat(data.highPrice).toFixed(4)}</div>
					<div className='genres'>Low 24H:{parseFloat(data.lowPrice).toFixed(4)}</div>
					{/* <div className=''>PriceChange:{data.priceChange}</div> */}
					{/* <div className='%'></div> */}
				</div>
				
			</div>
			<div className='divRating' style={{backgroundColor: isbackgroundRed? 'rgb(246, 70, 93)' : 'rgb(14, 203, 129)'}}>
					<div  className='rating'>DAY:{data.priceChangePercent}%</div>
				</div>
		</div>
	);
}

export default Card;

