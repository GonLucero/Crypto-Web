// ACA hago la conexion entre el front y el back
import axios from 'axios';
import Search from './../Componentes/BarradeBusqueda';

// 12)
// el componente Principal: va a hacer un get para todos los videojuegos:

// export function getVideojuegos() {
//     return function (dispatch) {
//       // le pongo la ruta que me trae todos los personajes
//       return fetch(`http://localhost:3001/videogames`)
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: "GET_VIDEOJUEGOS", payload: json });
//         });
//     };
//   }

// Importo todas las monedas
export function getCryptos(){
  return async function(dispatch){
    try{
      var json = await axios.get("https://api2.binance.com/api/v3/ticker/24hr") // LLAMO A LA API
      const cryptos =json.data //ME TRAIGO TODAS LAS MONEDAS
      
      // ME QUEDO SOLAMENTE CON LAS CRYPTOS QUE TIENEN UN PRECIO DISTINTO DE 0
      const cryptosok = cryptos.filter((f) => f.lastPrice != "0.00000000") 

      // // FILTRO SOLO LOS QUE ESTAN EN USDT
      // const usdt = cryptosok.filter((f)=> f.symbol.lastIndexOf('USDT')> 2  )
      //   // ACA BUSCO LA MANERA DE LIMPIAR Y QUEDARME SOLO CON USD
      // const usd = cryptosok.filter((f)=> f.symbol.lastIndexOf('USD')> 2 )
      // const usdr = usd.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDT')> 2)
      // const usdok = usdr.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDC')> 2)
      // // usdokk son las cryptos en USD
      // const usdokk = usdok.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDP')> 2)
      //   // ACA ME TRAIGO LOS DEMÁS TIPOS DE CAMBIO QUE HAY
      // const btc = cryptosok.filter((f) => f.symbol.lastIndexOf('BTC') > 2)
      // const eth = cryptosok.filter((f) => f.symbol.lastIndexOf('ETH') > 2)
      // const bnb = cryptosok.filter((f) => f.symbol.lastIndexOf('BNB') > 2)
      return dispatch({
        type:  "GET_CRYPTOS",        
        name: cryptosok,
        name2:cryptos
      })
    }catch(err){
      console.log(err)
    }
  }
}

// QUE ME TRAE LA MONEDA?

// {
//  X"symbol": "ETHBTC",   ----> SIMBOLO DE LA MONEDA
//   "priceChange": "-0.00452900", -----> CAMBIO DEL PRECIO DURANTE LAS ULTIMAS 24 HS
//  X"priceChangePercent": "-6.195", ---> PORCENTAJE DEL CAMBIO DEL PRECIO, EN LAS ULTIMAS 24 HS
//   "weightedAvgPrice": "0.07018839",----> PRECIO PROMEDIO PONDERADO = RELACION ENTRE VALOR Y VOLUMEN
//   "prevClosePrice": "0.07311300", ---> PRECIO DE CIERRE ANTERIOR
//  X"lastPrice": "0.06858400",---> ULTIMO PRECIO
//   "lastQty": "0.04460000",
//   "bidPrice": "0.06858800",---> PRECIO DE OFERTA--Bid es el precio más alto que el comprador está dispuesto a pagar
//   "bidQty": "0.31870000",---> CANTIDAD DE OFERTA,   la cantidad que el comprador está ofertando para comprar
//   "askPrice": "0.06858900",---->PRECIO DE VENTA--el precio más bajo al que el vendedor está dispuesto a vender
//   "askQty": "0.24750000",-----> CANTIDAD DE DEMANDA--> 
//  X"openPrice": "0.07311300",---> PRECIO DE APERTURA HACE 24 HS
//  X"highPrice": "0.07336300",---> PRECIO MAS ALTO DURANTE LAS ULTIMAS 24HS
//  X"lowPrice": "0.06760000",----> PRECIO MAS BAJO DURANTE LAS ULTIMAS 24 HS
//   "volume": "173068.90780000",----> VOLUMEN TOTAL DURANTE LAS ULTIMAS 24 HS
//   "quoteVolume": "12147.42857589",
//   "openTime": 1642779616266,-->tiempo de apertura
//   "closeTime": 1642866016266,-->tiempo de cierre, diferencia son 24 hs
//   "firstId": 320737343,--> CANTIDAD DE TRANSACCIONES HACE 24 HORAS
//   "lastId": 321096672,---> CANTIDAD DE TRANSACCIONES ACTUALES
//   "count": 359330-----> NUMERO DE TRANSACCIONES DURANTE LAS ULTIMAS 24 HS
//   },

// DIFERENCIA ENTRE BIDPRICE Y ASKPRICE , SE LLAMA DIFERENCIA O MARGE DE COMPRAVENTA--> SPREAD
//La cantidad total de oferta es el número total de acciones que tienen órdenes de compra pendientes. 
//La cantidad total solicitada o cantidad total ofertada es el número total de acciones pendientes de vender. 
//Verá que el precio de oferta siempre será más bajo que el precio de venta. Una vez que el precio de oferta y demanda coincida, se ejecuta la orden y esta cantidad se eliminará de la cantidad total de oferta y demanda.

export function getVideojuegos(){
  return async function(dispatch){
    try{
      var json = await axios.get("http://localhost:3001/videogames")
      return dispatch({
        type:  "GET_VIDEOJUEGOS",
        payload: json.data
      })
    }catch(err){
      console.log(err)
    }
  }
}
//   20)CREO UNA ACCION PARA EL FILTRADO SEGUN DB / API O CREADO
  
  export const ordenXCreado = (source) => (dispatch, getState) => {
    const videojuegos = getState().videojuegos.filter(function (v) { // filtro los juegos que solo tienen el source que me llega x payload
        return v.source === source
      });
    dispatch({
      type: "ORDEN_X_CREADO",
      payload: {
        videojuegos,
        source,
      },
    });
  };

//   21)
export const ordenAsc = (type) => (dispatch, getState) => {
    const filtrado = getState().videojuegosFiltrados; // me traigo el estado 
    let videojuegosOrden = [] // declaro array vacio
  
    // si el type que me pasan es asc_nombre
      if (type === "asc_nombre") {
        // agarro todos los juegos filtrados y los ordeno según el nombre
        videojuegosOrden = filtrado.sort((a, b) => { // sort compara 2 name, y los pone antes o despues del array
          if (a.symbol > b.symbol) return 1;
          if (a.symbol < b.symbol) return -1;
          return 0;
        });
        // si el type es asc rating
      } else if (type === "asc_rating") { // sort compara 2 rating, y los pone antes o despues del array
        
        videojuegosOrden = filtrado.sort(
          (a, b) => a.lastPrice - b.lastPrice // dependiendo si es negativo o positivo el resultado, pone uno adelante y otro atrás
        );
        
      }
      dispatch({
        type: "ORDEN_ASC_RATING",
        payload: {
          videojuegosOrden,
          name: type,
        },
      });
  }
  
  
  export const ordenDesc = (type) => (dispatch, getState) => {
    const filtrado = getState().videojuegosFiltrados;
    let videojuegosOrden = []
      
      if (type === "desc_nombre") {
        
        videojuegosOrden = filtrado.sort((a, b) => { // ordenamelo, pero en el sentido contrario
          if (a.symbol < b.symbol) return 1;
          if (a.symbol > b.symbol) return -1;
          return 0;
        });
      } else if (type === "desc_rating") { 
        console.log('llego a esta action')  
        videojuegosOrden = filtrado.sort( // sort compara 2 rating, y los pone antes o despues del array
          (a, b) => b.lastPrice - a.lastPrice
        );
      }
      dispatch({
        type: "ORDEN_DESC_RATING",
        payload: {
          videojuegosOrden,
          name: type,
        },
      });
  }

//23)
  export function buscarVideojuegos(name) { // pongo nombre en vez de payload, nombre es lo que el usuario escriba en la barra de busqueda
    return (dispatch) =>
      fetch(`http://localhost:3001/videogames?name=${name}`) // le paso lo que me llega x payload
        .then((resp) => resp.json())
        .then((json) => {
          return({
            type: "BUSCAR_VIDEOJUEGOS",
            payload: json, // json es lo que me devuelve la ruta, una vez que se le asigna el nombre
          });
        });
  }

  // export function buscarVideojuegos(name) {
  //   return (dispatch)=>
  //     axios.get(`http://localhost:3001/videogames?name=${name}`)
  //     .then((response) =>{
  //       return ({type: "BUSCAR_VIDEOJUEGOS",
  //               payload:json})
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
    
  // }




  //26)


  export function crearVideojuego(obj) {
    return (dispatch) =>
      fetch("http://localhost:3001/videogame", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "CREAR_VIDEOGAME",
            payload: json,
          });
        });
  }


  //30)
  export function getVideojuegoXId(id) {
    console.log(id)
    return (dispatch) =>
      fetch(`http://localhost:3001/videogame/${id}`)
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "GET_VIDEOJUEGO_X_ID",
            payload: json,
          });
        });
  }
  export const search = (nombre) => (dispatch, getState) => {
    let Search = null
    console.log('se disparo', nombre)
    const all = getState().cryptosok;
    // console.log(all, 'all')
    
    Search = all.filter((f) => f.symbol.includes(nombre.toUpperCase()))
     console.log('devolucion',Search)
      dispatch({
        type: "SEARCH_COIN",
        payload:Search,
      });
  }

  export const getCoin = (id) => (dispatch, getState) => {
    console.log('id',id)
    let Detail = null
    const all = getState().cryptosok;
    // console.log(all, 'all')
    
    Detail = all.filter((f) => f.symbol.includes(id.toUpperCase()))
     console.log('devolucion',Detail)
      dispatch({
        type: "DETAIL_COIN",
        payload:Detail,
      });
  }


  // acá recibo el genero seleccionado
  export const filtradoXGenero = (generos) => (dispatch, getState) => {
    let juegosFiltrados = null;
    // si el genero esta en all, me traigo todos los juegos y lo pongo en juegosfiltrados
    // if (generos === "All") {
    //   juegosFiltrados = getState().videojuegos;
    // } else { // si esta en otra posicion que no sea all, filtrame los juegos segun el genero
    //   juegosFiltrados = getState().videojuegos.filter((v) =>
    //     (v.genres).includes(generos)
    //   )
    // };
    console.log('se ejecuta esto:',generos)
    const cryptosok = getState().cryptosok
    if(generos === "usd"){
      console.log('llego acáaaa')
     
        // ACA BUSCO LA MANERA DE LIMPIAR Y QUEDARME SOLO CON USD
        const usd = cryptosok.filter((f)=> f.symbol.lastIndexOf('USD')> 2 )
        const usdr = usd.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDT')> 2)
        const usdok = usdr.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDC')> 2)
        // usdokk son las cryptos en USD
        juegosFiltrados = usdok.filter((f) => f.symbol.lastIndexOf('USD')> 2 != f.symbol.lastIndexOf('USDP')> 2)
        console.log('juegos', juegosFiltrados)
    }
    if(generos === "btc"){
      console.log('aqui estaaa btc')
      juegosFiltrados = cryptosok.filter((f) => f.symbol.lastIndexOf('BTC') > 2)
    }
    if(generos === "eth"){
      console.log('aqui estaaa etc')
      juegosFiltrados = cryptosok.filter((f) => f.symbol.lastIndexOf('ETH') > 2)
    }
    if(generos === "bnb"){
      console.log('aqui estaaa bnb')
      juegosFiltrados = cryptosok.filter((f) => f.symbol.lastIndexOf('BNB') > 2)
    }
    if(generos === "usdt"){
      console.log('aqui estaaa usdt')
    juegosFiltrados = cryptosok.filter((f)=> f.symbol.lastIndexOf('USDT')> 2  )
  }
    dispatch({
      type: "FILTRADO_X_GENERO",
      payload: {
        generos,
        videojuegoGenero: juegosFiltrados,
      },
    });
  };


  export const resetTodo = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};

// acción que me trae todos los generos
export function getGeneros() {
  return (dispatch) =>
    fetch(`http://localhost:3001/genres`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_GENEROS",
          payload: json,
        });
      });
}

  // export function crearVideojuego(obj) { // el payload es lo que me llega desde el front
  //   return (dispatch) =>
  //     fetch("http://localhost:3001/videogame", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(obj),
  //     })
  //       .then((resp) => resp.json())
  //       .then((json) => {
  //         dispatch({
  //           type: "CREAR_VIDEOJUEGO",
  //           payload: json,
  //         });
  //       });
  // }



    // con async:
//   export function buscarVideojuegos(name){ // pongo nombre en vez de payload, nombre es lo que el usuario escriba en la barra de busqueda
//     return async function (dispatch){
//         try{
//             var json = await axios.get("http://localhost:3001/videogames?name=" + name) // le paso lo que me llega x payload
//             return dispatch ({
//                 type: "BUSCAR_VIDEOJUEGOS",
//                 payload: json // json.data es lo que me devuelve la ruta, una vez que se le asigna el nombre
//             })
//         } catch(error){ // mando un error si llega a fallar
//             console.log(error)
//         }
//     }
// }
