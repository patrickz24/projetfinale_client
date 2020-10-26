import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useHistory} from "react-router-dom";   
import {AuthContext} from "../../../../App";


require("./_infosperso.scss");

export default function Infosperso() {  
    const history = useHistory();
 
    const id = localStorage.getItem("user");

  
   const {state}= useContext(AuthContext);



    const initialState = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      isSubmitting: false,
      errorMessage: null,
    };
    const [data, setData] = React.useState(initialState);

console.log(state);
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
        method: "put",
        headers: { "Content-Type": "application/json" },
        url: `http://localhost:8060/api/user/${id}`,
        data: data,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
      
            history.push("/profil/infosperso");
           
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
      <div className="infosperso-container">
    
        <div className="card">
          <div className="container">
            <form onSubmit={handleFormSubmit}>
              <h3>Informations personnelles</h3>
             {/* <h3>Si vous voulez modifier vos informtions personnelles</h3>
   */}
              <label htmlFor="first_name">
                <input
                  type="text"
                  value={data.first_name}
                  onChange={handleInputChange}
                  name="first_name"
                  id="first_name"
                  placeholder='Prénom'
                />
              </label>
  
              <label htmlFor="last_name">
                <input
                  type="text"
                  value={data.last_name}
                  onChange={handleInputChange}
                  name="last_name"
                  id="last_name"
                  placeholder='Nom'
                />
              </label>
  
              <label htmlFor="email">
                <input
                  type="text"
                  value={data.email}
                  onChange={handleInputChange}
                  name="email"
                  id="email"
                  placeholder='email'
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
                <span className="form-error">{data.errorMessage.data.description}</span>
              )}
{data.isSubmitting && (
                <span className="form-validation">Modification de vos informations personnelles a bien été effectuée</span>
              )}
              <button disabled={data.isSubmitting}>
                {data.isSubmitting ? "Envoyé" : "Modifier"}
              </button>
           
            </form>
          </div>
        </div>
      </div>
    );
  }