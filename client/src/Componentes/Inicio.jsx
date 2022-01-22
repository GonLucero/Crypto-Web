// 11)  Creo mi componente de ingreso
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptos } from "../actions/index";
import { Link } from "react-router-dom";
import "../EstilosCss/Inicio.css"


export default function LandingPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('se ejecuta el dispatch')
    dispatch(getCryptos());
  }, []); 

  return (
    <div class="background">
      <div class="title" >
        <h2>Welcome!</h2>
        <Link to="/home">
          <button type="submit">START</button>
        </Link>
        
        <h3>Developed by: Gonzalo Lucero</h3>
            
      </div>
      
    </div>
  );
}