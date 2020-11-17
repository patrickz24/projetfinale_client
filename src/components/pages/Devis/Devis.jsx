import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAlert} from 'react-alert';
require("./_devis.scss");

export default function Devis() {
  const history = useHistory();
  const alert = useAlert();
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
    alert.show('Votre demande de devis a bien été envoyé!');
    history.push("/");
    // location.reload();
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
                placeholder="Secteur d'activité"
                required
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
                required
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
                required
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
