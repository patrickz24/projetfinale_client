import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAlert} from 'react-alert';

require('./_contact.scss');

export default function Contact() { 
  const history = useHistory();
  const alert = useAlert();
  const [inputs, setInputs] = useState({
    subject: "",
    message:"",
    fisrt_name:"",
    last_name:"",
    email:"",
     
    
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    })); 
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
       
      },
      url: "http://localhost:8060/api/contact",
      data: inputs,
      
    }) 
alert.show('Message Envoyé!');
    history.push("/");
  };
  
  return (
    <div className="contact-container">
      <div className="photo">PHOTO</div>
      <div className="card">
        <div className="container">
    <form onSubmit={handleFormSubmit}>
            <h1>Contactez-nous</h1>

            <label htmlFor="first_name">
              <input
                type="text"
                value={inputs.first_name}
                onChange={handleInputChange}
                name="first_name"
                id="first_name"
                placeholder="Prénom"
                required
              />
            </label>

            <label htmlFor="last_name">
              <input
                type="text"
                value={inputs.last_name}
                onChange={handleInputChange}
                name="last_name"
                id="last_name"
                placeholder="Nom"
                required
              />
            </label>
            
            <label htmlFor="email">
              <input
                type="text"
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>

            <label htmlFor="subject">
              <input
                type="text"
                value={inputs.subject}
                onChange={handleInputChange}
                name="subject"
                id="subject"
                placeholder="Objet"
                required
              />
            </label>

        

            <label htmlFor="message">
              <input
                type="text"
                value={inputs.text}
                onChange={handleInputChange}
                name="message"
                id="messsage"
                placeholder="Message"
                required
              />
            </label>

            <button
              type="submit"
         
            >
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  }
