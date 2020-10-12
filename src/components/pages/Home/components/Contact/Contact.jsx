import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
require('./_contact.scss');

export default function Contact() { const history = useHistory();

  const [inputs, setInputs] = useState({
    domaine: "",
    city: "",
    description: "",
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
    const token = localStorage.getItem("token");
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "http://localhost:8060/api/devis",
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

            <label htmlFor="domaine">
              <input
                type="text"
                value={inputs.domaine}
                onChange={handleInputChange}
                name="domaine"
                id="domaine"
                placeholder="NAME"
              />
            </label>

            <label htmlFor="city">
              <input
                type="text"
                value={inputs.last_name}
                onChange={handleInputChange}
                name="city"
                id="city"
                placeholder="EMAIL"
              />
            </label>

            <label htmlFor="description">
              <input
                type="text"
                value={inputs.email}
                onChange={handleInputChange}
                name="description"
                id="description"
                placeholder="Message"
              />
            </label>

            <button
              type="submit"
              // onClick={() => {
              //   history.push(`./`);
              // }}
            >
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  }
