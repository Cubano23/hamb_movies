import React,{Component} from 'react';
import {performSearch} from "../service/movieService"
import {Link} from "react-router-dom"


class Gallery extends Component {

    state={
      rows:[]
    }

    componentDidMount() {
      performSearch(this.props.default , (result) => {
        this.setState({rows :  result.results})
      } )
    }
  
    searchChangeHandler = (event) => {
      this.props.update(event.target.value)
      performSearch(event.target.value , (result) => {
        this.setState({rows :  result.results})
      } )
    }
  
    render() {
      //console.log(this.state.rows)
      return (
        <div className="fluid">
            <input id="recherche" 
              onChange={this.searchChangeHandler} 
              placeholder="Rechercher pour un film..."/>
            <div className="moviesGrid">
              {this.state.rows.map((film, i) => {
               return( 
              <article key={i}>
                 <Link to={`/filmDetail/${film.id}`}>
                  {(() => {
                      switch (film.poster_path) {
                        case null:   return <img src="/no_image.png" alt="no_image" style={{borderRadius:10,height:320}}/>;                     
                        default:      return <img src={`https://image.tmdb.org/t/p/w185${film.poster_path}`} alt="" className="img-thumbnail" style={{borderRadius:10,height:320}}/> ;
                      }
                    })()}                
                 </Link> 
                 <small style={{color:"#fff"}}>{film.title}</small> 
                 <p style={{color:"#fff"}}>{film.release_date}</p>              
              </article>)
              })}
            </div>
        </div>
      );
    }
  }
  
  export default Gallery;
  