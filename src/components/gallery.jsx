import React,{Component} from 'react';
import Films from './films';
import $ from 'jquery';

class Gallery extends Component {

    constructor(props) {
      super(props)
      this.state = {}
   
  
      this.performSearch("greta")
    }
  
    performSearch(searchTerm) {
   
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
      $.ajax({
        url: urlString,
        success: (recherche) => {  
          const results = recherche.results
          console.log(recherche);
  
          var movieRows = []
  
          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
         
            const movieRow = <Films key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })
  
          this.setState({rows: movieRows})
        },
        error: (xhr, status, err) => {
          console.error("Erreur!")
        }
      })
    }
  
    searchChangeHandler(event) {
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
    }
  
    render() {
      return (
        <div className="fluid">
            <input id="recherche" onChange={this.searchChangeHandler.bind(this)} placeholder="Rechercher pour un filme..."/>
         <div className="moviesGrid ">
             {this.state.rows}
         </div>
         
  
        </div>
      );
    }
  }
  
  export default Gallery;
  