import React, { useEffect } from "react";
import "./sass/base.scss";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import reducer from "./components/molecules/Reducer";
import Axios from "axios";
require("./sass/config/_variable.scss");


 
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
 

 


export const AuthContext = React.createContext({
  state: "",
  dispatch: () => {},
});
const initialState = {
  isAuthenticated: false,
  isAdmin:null,
  isLoading:true,
  user: null,
  token: null,
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useEffect(() => {
  
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
    
      if (token) {
        try{
        const result = await Axios(`http://localhost:8060/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result.data);
        dispatch({
          type: "LOAD_USER",
          payload: result.data,
        });
      }catch(error){
        dispatch({
          type:"LOGOUT",
        })
      }
      }else {
        dispatch({
          type: "NO_USER", 
        })
      }
    };
    fetchUser();
  }, []);
  console.log(state, "Apppppppppppp statte")
  return (

  <AlertProvider template={AlertTemplate} {...options}>
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
         <Routes />
        <Header />
        <Footer />
      </Router>
    </AuthContext.Provider>
    </AlertProvider>
  );
}
