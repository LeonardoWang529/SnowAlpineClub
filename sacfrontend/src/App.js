import React from 'react';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import './App.css';

import NavbarComponent from "./Components/Navbar.component";
import ShopComponent from "./Components/Shop/Shop.Component";
import FooterComponent from "./Components/Footer.component";
import SinglePostComponent from "./Components/SingleProduct/SinglePost.component";
import LandingComponent from "./Components/Landing.component";
import CreatePostComponent from "./Components/CreatePost/CreatePost.component";

function App() {
  return (
    <Router>
        <div>
      <NavbarComponent />
      <Route path={"/"} exact component= {LandingComponent}/>
      <Route path={"/Shop"} exact component = {ShopComponent}/>
      <Route path={"/SinglePost"} exact component = {SinglePostComponent}/>
      <Route path={"/CreatePost"} exact component = {CreatePostComponent}/>
      <FooterComponent />
        </div>
    </Router>
  );
}

export default App;
