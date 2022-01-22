// 15)

import React from 'react';
import {Link} from 'react-router-dom';
import '../EstilosCss/Carta.css';

function Card({data}) { // acá recibo ya la info mapeada de todos los videogamea mostrar
	console.log('aca llega data', data)
	return (
		<div className='card'>
			{/* Acá permito que al tocar la carta, pueda entrar al detalle */}
			{/* <Link to={`/videogames/${data.id}`}>  */}
			{/* En el caso de no haber imagen, muestro la siguiente foto */}				

		<a className='img' >{data.symbol}</a>
			
				
			{/* </Link> */}
			<div className='textCard'>
				<div className='nameGenres'>
					{/* Renderizo toda la info, que quiero mostrar: */}
					<div className='name'>Last Price:${data.lastPrice}</div>
					<div className='genres'>Volume:{data.volume}</div>
					<div className=''>PriceChange:{data.priceChange}</div>
					{/* <div className='%'></div> */}
				</div>
				
			</div>
			<div className='divRating'>
					<div className='rating'>{data.priceChangePercent}%</div>
				</div>
		</div>
	);
}

export default Card;

