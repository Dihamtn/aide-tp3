import '../css/Banner.css';
import * as React from "react";
import { Link } from "react-router-dom";

function Banner(){
return<div className='banner'>
    <h1>Aide</h1>
    <div className=''>
        <Link to='/'>
            <h4>Accueil</h4>
        </Link>
        <Link to='/Condition'>
            <h4 >Condition</h4>
        </Link>
        <Link to='/AffichageBoucle'>
            <h4> Boucle </h4>
        </Link>
    </div>

</div> 
}

export default Banner;