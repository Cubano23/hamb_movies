import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/MovieRow'
import $ from 'jquery'
import Header from "./components/header"

class App extends Component {

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
       
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
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
        <Header/>
      
        <input id="recherche" onChange={this.searchChangeHandler.bind(this)} placeholder="Rechercher pour un filme..."/>


        {this.state.rows}

      </div>
    );
  }
}

export default App;
