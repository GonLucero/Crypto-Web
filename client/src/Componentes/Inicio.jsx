import { getCryptos } from "../actions/index";
import { Link } from "react-router-dom";
import "../EstilosCss/Inicio.css"
import back from "./images/wallpaper.jpg"

export default function LandingPage() {
 

  return (
      <div  style={{backgroundColor:'black' ,height:'0px', borderColor:'black'}}>
      <img class="backk" src={back} alt="" />

  <div style={{backgroundColor:'black', height:'0px'}}>
        <Link to="/home">
          <button className='button' type="submit">ENTER</button>
        </Link>
        </div>

        </div>


  );
}