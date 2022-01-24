import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../EstilosCss/Navbar.css"
import nintendo from "../Componentes/images/Bitcoin-Logo.png"
import {search} from "../actions/index";
import { useDispatch } from "react-redux";

function NavBar() {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState(""); // declaro un estado inicial nombre, inicialmente vacio
    // en nombre guardo, lo que escribo en la busqueda
    function handleSubmit(e) { // cuando se accione, reseteo el estado 
        e.preventDefault();
        setNombre(""); 
    }
    
    function buscar (){
        if(nombre != ''){
           
            dispatch(search(nombre));
            
            console.log('llego aqiii')
        }
        
    }

    return (
        <div className="navBar">
            <div >               
                <Link to="/">
                <img className="imagen" src={nintendo} />
                </Link>
            </div>
            <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e)}> 
                    <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Search..."
                    
                    type="search"
                    ></input>
                     <Link to="/home" onClick={() => buscar()}>
                        <button name="name" type="submit" >🔍︎</button>
                        </Link>
                </form>
            </div>
         
            <div >
                <Link to="/home" style={{textDecoration:'none'}}>
                    <h3 onClick={()=>window.location.reload()} className="home">Cryptos</h3>
                </Link>
            </div>
           
           
        </div>
    );
}


export default NavBar;