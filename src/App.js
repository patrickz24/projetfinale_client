import React from 'react';
import './sass/base.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Routes from './components/Routes';
import Footer from './components/organisms/Footer/Footer';

import reducer from "./components/molecules/Reducer";

export const AuthContext = React.createContext({
  state: "",
  dispatch:()=>{},
});
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export default function App() {const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
    value={{
      state,
      dispatch,
    }}
  >
    <Router>
     <Header/>
      <Routes />
    <Footer/>
         </Router> </AuthContext.Provider>
  );
}
