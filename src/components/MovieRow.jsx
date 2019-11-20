import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
 
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    
    return <div key={this.props.movie.id} className="row d-flex justify-content-around moviesGrid">
            <div>
              <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.release_date}</p>
            
              <button onClick={this.viewMovie.bind(this)} className="btn btn-primary">Plus</button>
            </div>   
          </div>
  }
}

export default MovieRow