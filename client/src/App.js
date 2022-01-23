import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './Componentes/Inicio';
import Principal from './Componentes/Principal';
import Detalle from './Componentes/Detalle';
//ACÁ ABAJO LO QUE HAGO ES RENDERIZAR LOS COMPONENTES SEGUN SU RUTA
//hago el ruteo

// envuelvo todo en browserRouter
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      {/* Con el Routes envuelvo cada ruta, para moverme entre esas rutas */}
    <Routes>
      <Route exact path="/" element={<Inicio/>} />
      <Route exact path="/home" element={<Principal/>} />   
      <Route exact path="/videogames/:id" element={<Detalle/>}/>
      
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
