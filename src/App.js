import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Gallery from "./components/gallery";
import {Route} from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import FilmDetail from "./components/filmDetail";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component { 

  render() {
    return (
      <div className="fluid">
        <Header/>             

        <Route exact path = "/films" render={() => <Gallery  /> } />

        <Route exact path = "/about" render={() => <About  /> } />

        <Route exact path = "/contact" render={() => <Contact  /> } />


        <Route path='/code_source' component={() => { 
        window.location.href = 'https://github.com/Cubano23/hamb_movies'; 
        return null;
    }}/>

        
        <Route exact path = "/filmDetail" render={() => <FilmDetail  /> } />


        <Route exact path = "/" render={() => <Home /> } />        

        <Footer />     

      </div>
    );
  }
}

export default App;
