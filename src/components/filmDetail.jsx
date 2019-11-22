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
       const {original_title , poster_path , overview} = this.state.film;
       console.log(this.state.film)
        return ( 
            <div>
                
                <div className="filmDetail">                    
                    <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="poster" /> 
                    <p>{overview}</p>
                </div>
          </div>
         );
    }
}
 
export default FilmDetail;