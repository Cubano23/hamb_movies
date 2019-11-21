import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Gallery from "./components/gallery";
import {Route} from "react-router-dom";
import Home from "./components/home"
import Footer from "./components/footer";

class App extends Component { 

  render() {
    return (
      <div className="fluid">
        <Header/>       

        <Route exact path = "/films" render={() => <Gallery  /> } />

        <Route exact path = "/" render={() => <Home /> } />

        <Footer />
       
       

      </div>
    );
  }
}

export default App;
