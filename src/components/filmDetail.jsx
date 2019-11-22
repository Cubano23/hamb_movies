import React, { Component } from 'react';
import {performSearch} from "../service/movieService"


class FilmDetail extends Component {
   
    state={
        film:{}
    }

    componentDidMount() {
        
        performSearch(this.props.default , ({results}) => {

          const film = results.filter( (el) => { return el.id === Number(this.props.match.params.id) })[0]
          this.setState({film :  film})
          
        } )
    
      }
    

    render() { 
       const {title , poster_path , overview,release_date, popularity,vote_average} = this.state.film;
      
        return ( 
            <div>                
                <div className="filmDetail">
                    <div >
                        <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} className="img-thumbnail" style={{borderRadius:10}} alt="poster" />
                    </div>              
                    <div>
                        <p style={{fontSize:"2em"}}>{title}</p>
                        <p>{overview}</p>
                        <div className="detail">
                        <p>Date de sortie: {release_date}</p>
                        <p>Popularité: {popularity}</p>
                        <small>Vote moyen</small>                        
                        <p className="vote">{vote_average}%</p> 
                        </div>               
                    </div>                     
                </div>
          </div>
         );
    }
}
 
export default FilmDetail;