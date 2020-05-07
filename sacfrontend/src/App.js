import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import './App.css';

import NavbarComponent from './Components/Navbar.component';
import ShopComponent from './Components/Shop/Shop.Component';
import FooterComponent from './Components/Footer.component';
import SinglePostComponent from './Components/SingleProduct/SinglePost.component';
import LandingComponent from './Components/Landing.component';
import CreatePostComponent from './Components/CreatePost/CreatePost.component';

import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import LoginBootstrap from './Components/LoginBootstrap';
import RegisterBootstrap from './Components/RegisterBootstrap';
import AccountSummary from './Components/user/AccountSummary';
import EditProfile from './Components/user/EditProfile';
import ChangePassword from './Components/user/ChangePassword';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Route path={'/'} exact component={LandingComponent} />
        <Route path={'/Shop'} exact component={ShopComponent} />
        <Route path={'/SinglePost'} exact component={SinglePostComponent} />
        <Route path={'/CreatePost'} exact component={CreatePostComponent} />
        {/* <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} /> */}
        <Route exact path='/login' component={LoginBootstrap} />
        <Route exact path='/register' component={RegisterBootstrap} />
        <Switch>
          <Route exact path='/account/summary' component={AccountSummary} />
          <Route exact path='/account/edit' component={EditProfile} />
          <Route
            exact
            path='/account/changepassword'
            component={ChangePassword}
          />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
