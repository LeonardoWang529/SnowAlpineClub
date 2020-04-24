import React from 'react';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavbarComponent from "./Components/Navbar.component";
import ShopComponent from "./Components/Shop/Shop.Component";
import SubHeaderComponent from "./Components/SubHeader.component";
import FooterComponent from "./Components/Footer.component";
import SinglePostComponent from "./Components/SingleProduct/SinglePost.component";
import LandingComponent from "./Components/Landing.component";

function App() {
  return (
    <Router>
        <div>
      <NavbarComponent />
      <Route path={"/"} exact component= {LandingComponent}/>
      <Route path={"/Shop"} exact component = {ShopComponent}/>
      <Route path={"/SinglePost"} exact component = {SinglePostComponent}/>
      <FooterComponent />
        </div>
    </Router>
  );
}

export default App;
