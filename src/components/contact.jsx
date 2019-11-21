import React, { Component } from "react";

import emailjs from "emailjs-com";

const templateParams = {
  name: "Bruno",
  notes: "je sais envoyer des emails"
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "Name", email: "bsrs23@gmail.com" };
  }

  handleSubmit = event => {
    const templateId = "template_id";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
    emailjs
      .send(
        "<YOUR SERVICE ID>",
        "<YOUR TEMPLATE ID>",
        templateParams,
        "<YOUR USER ID>"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };

  handleChange = (event) => {

    this.setState({ feedback: event.target.value });
  }
  

  render() {
    return (
      <div className="container">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div>
            <h3>Message</h3>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChange}
              placeholder="Votre message ici..."
              required
              value={this.state.feedback}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input type="button" value="Submit" className="btn btn-success" />
        </form>
        <div>
          <h4>Adresse: 39 rue de Paris, 78610 Le Perray en Yvelines.</h4>
          <h4>Téléphone: 06 42 12 33 94</h4>
          <div className="map"></div>
        </div>
      </div>
    );
  }



}
