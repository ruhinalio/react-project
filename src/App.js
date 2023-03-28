import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import About from "./pages/About";
import Home from './pages/Home';
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
   <>
   <Header/>
   <Home/>
   <About/>
   <Footer/>
   </>
  );
}

export default App;
