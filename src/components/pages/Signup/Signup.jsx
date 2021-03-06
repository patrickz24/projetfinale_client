import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAlert} from 'react-alert';



require("./_signup.scss");

export default function Signup() {
  const history = useHistory();
  const alert = useAlert();
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8060/api/signup",
      data: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        errorMessage: data.errorMessage,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert.show(`Vous êtes bien inscrit ${data.first_name} ${data.last_name}!`);
          history.push("/signin");
          return res;
        }
        throw res;
      })
   
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.response,
        });
      });
  };
  console.log(data);

  return (
    <div className="signup-container">
      <div className="photo"></div>
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>INSCRIPTION</h1>

            <label htmlFor="first_name">
              <input
                type="text"
                value={data.first_name}
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
                value={data.last_name}
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
                value={data.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
              />
            </label>
            {data.errorMessage && (
              <span className="form-error">
                {data.errorMessage.data.description}
              </span>
            )}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "Loading..." : "Continuer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
