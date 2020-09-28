import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';


import reducer from './molecules/Reducer';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};


export default function Routes() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/signin">
          <div>{!state.isAuthenticated ? <Signin /> : <Home />}</div>
        </Route>
       
       

       

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}
