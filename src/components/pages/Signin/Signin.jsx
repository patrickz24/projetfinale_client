import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../App";

require("./_signin.scss");

export const Signin = () => {
  const { dispatch } = useContext(AuthContext); 
  const history = useHistory();

  const initialState = {
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
      url: "http://localhost:8060/api/signin",
      data: JSON.stringify({
        email: data.email,
        password: data.password,
        errorMessage: data.errorMessage,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res;
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: "SIGNIN",
          payload: resJson,
        });
        history.push("./");
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.response.data.description,
        });
      });
  };
  console.log(data, "test");
  return (
    <div className="login-container">
      <div className="photo">PHOTO</div>
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Connexion</h1>

            <label htmlFor="email">
              <input
                type="text"
                value={data.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                placeholder="Email"
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
              />
            </label>

            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "Loading..." : "Continuer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signin;
