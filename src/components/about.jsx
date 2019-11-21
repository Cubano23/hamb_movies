import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="container">
            <h1>&Agrave; propos</h1>
            <div className="about">
            <h2>Projet Finale</h2>
            <h2>Formation développeur front end</h2>
            <p>Greta 92 - APP Boulogne</p>
            <p>Adresse: 30 Rue de l'Ancienne Mairie, 92100 Boulogne-Billancourt</p>
            <p>Téléphone : 01 41 10 00 38</p>
            <p>Réalisé par</p>
            <p>Bruno Soares</p>
            <h2>REMERCIEMENTS</h2>
            <p>Tout d’abord, nous tenons à remercier tout particulièrement et à témoigner toute ma
reconnaissance aux personnes suivantes, pour leur dévouement et leur soutient dans la
concrétisation de ce projet.</p>
            <ul>
                <li>Formateur Enseignant‎ React-js, monsieur Malik </li>
                <li>Formateur Enseignant Javascript, monsieur Paul</li>
                <li>Formateur Enseignant Algorithimes,HTML,CSS, monsieur Florian</li>
                <li>Coordenatrice Greta, madame Nouel</li>
                <li></li>
                <li>&Agrave; tous et &agrave; toutes colegues de salle.</li>
           
            </ul>
            <h3> <Link className="btn btn-warning" to="/code_source">Télécharger le code source</Link></h3>
            </div>

        </div>
     );
}
 
export default About;