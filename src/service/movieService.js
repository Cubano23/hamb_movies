import $ from 'jquery';

export function performSearch(searchTerm , callback) {
 
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    
    $.ajax({
      url: urlString,
      success: callback,
      error: (xhr, status, err) => {
        console.error("Erreur!")
      }
    })   
  }