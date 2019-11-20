import React from "react";
import { Link } from "react-router-dom";




const Header = () => {
    return ( 
        <header>
            <div className="container-fluid">        
                <nav className="navbar navbar-light purple lighten-4 mb-4">     
                <Link className="navbar-brand" to="#">Hamb movies</Link>       
                <button className="navbar-toggler toggler-example purple darken-3" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false"
                    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> 

                   
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent41">          
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Accueil<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">A propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact</Link>
                    </li>
                    </ul>
                </div>
                </nav>          
            </div>
        </header>
     );
  };
  
  export default Header;