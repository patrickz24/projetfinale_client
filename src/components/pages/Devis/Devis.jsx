import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

require("./_devis.scss");

export default function Devis() {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    field: "",
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
    <div className="devis-container">
      <div className="photo">PHOTO</div>
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Devis</h1>

            <label htmlFor="field">
              <input
                type="text"
                value={inputs.field}
                onChange={handleInputChange}
                name="field"
                id="field"
                placeholder="Domaine"
              />
            </label>

            <label htmlFor="city">
              <input
                type="text"
                value={inputs.city}
                onChange={handleInputChange}
                name="city"
                id="city"
                placeholder="Ville"
              />
            </label>

            <label htmlFor="description">
              <input
                type="text"
                value={inputs.description}
                onChange={handleInputChange}
                name="description"
                id="description"
                placeholder="Description"
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
