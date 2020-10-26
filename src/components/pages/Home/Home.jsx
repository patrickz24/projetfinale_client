import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

export default function Home() {

  return (
   <Router>
    
    < Services />
  < About />
 
  < Contact/>
   </Router>
  );
}
