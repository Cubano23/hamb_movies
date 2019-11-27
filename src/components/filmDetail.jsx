import React, { Component } from 'react';
import {performSearch} from "../service/movieService"


class FilmDetail extends Component {

        state = {
            film:{}
        }
        componentDidMount() {
            performSearch(this.props.default , ({results}) => {

                const film = results.filter( (el) => {return el.id === Number(this.props.match.params.id) })[0];
                this.setState({film :  film});
                console.log(film)              
         
              } )             
        }  

    render() { 
     
        const {title , poster_path , overview,release_date, popularity,vote_average} = this.state.film;
      
        return ( 
            <div>                           
                <div className="filmDetail fluid ">
                    <div >
                        {(() => {
                        switch (poster_path) {
                            case null:   return <img src="/no_image.png" className="img-thumbnail" alt="no_image" style={{borderRadius:10}}/>;                     
                            default:      return  <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} className="img-thumbnail" style={{borderRadius:10}} alt="poster" /> ;
                        }
                        })()}                        
                    </div>              
                    <div className="splot">
                        <p style={{fontSize:"2em"}}>{title}</p>

                        <p>{overview}</p>

                        <div className="detail">

                        <p>Date de sortie: {release_date}</p>

                        <p>Popularité: {popularity}</p>
                        
                        <div className="rec">
                        <small>Recommandé:</small>                        
                        <p className="vote">{vote_average}%</p> 
                        </div>
                        </div>               
                    </div>                     
                </div>
          </div>
         );
    
    }
}

 
export default FilmDetail;