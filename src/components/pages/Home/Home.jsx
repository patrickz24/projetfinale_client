import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {

  return (
   <Router>
  < About />
  < Services />
  < Contact/>
   </Router>
  );
}
