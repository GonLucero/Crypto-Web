import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../EstilosCss/Navbar.css"
import nintendo from "../Componentes/images/nintendo.png"
import {filtradoXGenero, search} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

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
            dispatch(search(nombre))

        }
        
    }

    return (
        <div className="navBar">
            <div >               
                <Link to="/">
                <img className="imagen" src={nintendo} />
                </Link>
            </div>
            <div >
                <Link to="/home">
                    <h3 className="home">Videogames</h3>
                </Link>
            </div>
            <div className="create">
                <Link to="/create">
                <h3>Create</h3>
                </Link>
            </div>
            <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e)}> 
                    <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    
                    type="search"
                    ></input>
                    {/* <NavLink to={`/results/${nombre}`}> */}
                        <button name="name" type="submit" onClick={() => buscar()}>Search</button>
                    {/* </NavLink> */}
                </form>
            </div>
         
        </div>
    );
}


export default NavBar;