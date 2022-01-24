// 11)  Creo mi componente de ingreso
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptos } from "../actions/index";
import { Link } from "react-router-dom";
import "../EstilosCss/Inicio.css"
import back from "./images/wallpaper.jpg"

export default function LandingPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('se ejecuta el dispatch')
    dispatch(getCryptos());
  }, []); 

  return (
      <div  style={{backgroundColor:'black' ,height:'0px', borderColor:'black'}}>
      <img class="background" src={back} alt="" />
      
  <div style={{backgroundColor:'black', height:'0px'}}>
        <Link to="/home">
          <button className='button' type="submit">ENTER</button>
        </Link>
        </div>
        
        </div>
    
      
  );
}