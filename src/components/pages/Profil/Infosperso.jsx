import React from "react";
import axios from "axios";
import { useParams} from "react-router-dom";   
// import { AuthContext } from "../../Routes";

require("./_infosperso.scss");

export default function Infosperso() {  
    // const history = useHistory();
    const {id}= useParams();
    // const { dispatch } = useContext(AuthContext);
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
        method: "patch",
        headers: { "Content-Type": "application/json" },
        url: `http://localhost:8060/api/user/${id}`,
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
            return res;
          }
          // history.push("/");
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
              <h1>Informations Personnelles</h1>
  
              <label htmlFor="first_name">
                <input
                  type="text"
                  value={data.first_name}
                  onChange={handleInputChange}
                  name="first_name"
                  id="first_name"
                  placeholder={data.first_name}
                />
              </label>
  
              <label htmlFor="last_name">
                <input
                  type="text"
                  value={data.last_name}
                  onChange={handleInputChange}
                  name="last_name"
                  id="last_name"
                  placeholder={data.last_name}
                />
              </label>
  
              <label htmlFor="email">
                <input
                  type="text"
                  value={data.email}
                  onChange={handleInputChange}
                  name="email"
                  id="email"
                  placeholder={data.email}
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
  
              <button disabled={data.isSubmitting}>
                {data.isSubmitting ? "Loading..." : "Continuer"}
              </button>
           
            </form>
          </div>
        </div>
      </div>
    );
  }