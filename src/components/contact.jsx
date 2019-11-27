import React, { Component } from "react";
import emailjs from "emailjs-com";
import $ from 'jquery';
import GoogleMap from "./googleMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',   
      message: ''
    }
    
  } 

  handleSubmit(e) { 

    e.preventDefault();
 
  
  const { nom, email, message } = this.state;

    let templateParams = {
      from_name: nom,
      from_email: email, 
      content: message
     }
    emailjs
      .send(
        '141223',
        '141223',
        templateParams,  
        'user_JOxyjUqz5YZ07KzrmxOPL'      
      
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
          this.resetForm();
        
        },
        err => {
          console.log("FAILED...", err);
        }
      );
      
  };

 resetForm = () =>{
  alert($("#nom").val() + ": Votre message à été envoyé avec success!");
   $("#nom").val("");
   $("#email").val("");
   $("#content").val("");
   
 }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  


  render() {
    return (
      <div>
        <div className="container" style={{marginTop:100}}>
          <form className="form-group" onSubmit={this.handleSubmit.bind(this)} method="post">
            <div>
              <label>Votre nom</label>
              <input type="text" name="nom" id="nom" className="form-control" placeholder="Non" onChange={this.handleChange.bind(this, 'nom')} required/>
              <label>Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="votre.email@email.com" onChange={this.handleChange.bind(this, 'email')} required/>
              <label>Message</label>
              <textarea
                id="content"
                name="message"         
                placeholder="Votre message ici..."
                onChange={this.handleChange.bind(this, 'message')}
                required         
                style={{ width: "100%", height: "150px" }}
                className="form-control"

              />
            </div>
              <input type="submit" value="Summetre" className="btn btn-success" />
            </form>
            <h5><FontAwesomeIcon icon={faAddressCard} size="2x"></FontAwesomeIcon>&nbsp;&nbsp;Adresse: 39 rue de Paris, 78610 Le Perray en Yvelines.</h5> 
          </div>
          <div className="container-fluid">                
            <div>
              <GoogleMap/>
            </div>
          </div>    
      </div>
    );
  }



}
