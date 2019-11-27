import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
    return ( 
        <header>
            <div className="container-fluid">        
                <nav className="navbar navbar-dark primary-color lighten-4 mb-4">     
                <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faCameraRetro} size="5x" color="#fff"></FontAwesomeIcon>&nbsp;&nbsp;<h1>Hamb movies</h1></Link>       
                <button className="navbar-toggler toggler-example blue darken-3" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> 

                   
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent41">          
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>&nbsp;&nbsp;Accueil<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Films"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>&nbsp;&nbsp;Films</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>&nbsp;&nbsp;&Agrave; propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>&nbsp;&nbsp;Contact</Link>
                    </li>
                    </ul>
                </div>
                </nav>          
            </div>
        </header>
     );
  };
  
  export default Header;