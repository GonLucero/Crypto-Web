const initialState = { //hago un estado inicial
  buscarVideojuegoXId: [],
  videojuegosFiltrados: [],
  orden: "desc_rating",
  filtrado: "usd",
  cryptos:[],
  cryptosok:[],
  search:[]
};

// 13)
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CRYPTOS": // igual que el get de las actions
        return {
          ...state,// copio el estado anterior, para no modificarlo
          // acá le digo que en mi estado CRYPTOS, que inicialmente es un estado vacio:
          // se mandá todo lo que te mande la accion 
          cryptos: action.name2,
          cryptosok:action.name
        }
        //19)

    //22)
    case "ORDEN_ASC_NOMBRE":
        case "ORDEN_ASC_RATING":
        case "ORDEN_DESC_NOMBRE":
        case "ORDEN_DESC_RATING":
          return {
            ...state,
            videojuegosFiltrados: action.payload.videojuegosOrden, // entonces en videojuegos filtrados pongo, la info ordenada
            orden: action.payload.name, // en orden me guardo, la opcion seleccionada
          };
          

          //24)
            case "SEARCH_COIN":
              console.log('asd',action.payload)
              return {
                ...state,                
                videojuegosFiltrados: action.payload, //en buscarvideojuegoxnombre meteme el action.payload
              };
                        case "DETAIL_COIN":
                          return {
                            ...state,
                            buscarVideojuegoXId: action.payload,
                          };
                        case "RESET":
                            return {
                              ...state,
                              cryptosok: [],
                              videojuegosFiltrados: [],
                              orden: "desc_rating",
                              filtrado: "usd"
                              // filtrado: "All",
                            }
                            case "FILTRADO_X_GENERO":
                                return {
                                  ...state,
                                  videojuegosFiltrados: action.payload.videojuegoGenero,
                                  filtrado: action.payload.generos,
                                };
              
        default:
            return state;



    }
}
