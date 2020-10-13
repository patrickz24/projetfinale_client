import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
require('./_contact.scss');

export default function Contact() { const history = useHistory();

  const [inputs, setInputs] = useState({
    subject: "",
    text:"",
     
    
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
      
    });
    history.push("/");
  };
  
  return (
    <div className="contact-container">
      <div className="photo">PHOTO</div>
      <div className="card">
        <div className="container">
    <form onSubmit={handleFormSubmit}>
            <h1>Contactez-nous</h1>

            <label htmlFor="subject">
              <input
                type="text"
                value={inputs.subject}
                onChange={handleInputChange}
                name="subject"
                id="subject"
                placeholder="SUJET"
              />
            </label>

        

            <label htmlFor="text">
              <input
                type="text"
                value={inputs.text}
                onChange={handleInputChange}
                name="text"
                id="text"
                placeholder="Message"
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
