import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import 'materialize-css/dist/css/materialize.min.css';
import classnames from 'classnames';

import axios from 'axios';
import AuthService from './auth/authService';
import bimg from '../images/maintop.jpg';

const homepageStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${bimg})`,
  backgroundSize: 'cover',
};

class RegisterBootstrap extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentDidMount() {
    const auth = AuthService.getCurrentUser();
    if (Object.keys(auth).length !== 0) {
      this.props.history.push('/Shop');
      // this.props.history.push('/shop');
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    axios
      .post('https://snow-alpine.com/users/register', newUser)
      .then((res) => this.props.history.push('/login')) // re-direct to login on successful register
      .catch((err) =>
        // this.state.errors = err.response.data;
        this.setState({
          errors: err.response.data,
        })
      );
    console.log(this.state);
  };

  render() {
    const { errors } = this.state;
    return (
      <div class='background-img' resizeMode='cover' style={homepageStyle}>
        <div class='container-login'>
          <div class='d-flex justify-content-center h-100'>
            <div class='card-register'>
              <div class='card-header'>
                <h3>Sign Up Now</h3>
                <div class='d-flex justify-content-end social_icon'></div>
              </div>

              <div class='card-body'>
                <form onSubmit={this.onSubmit}>
                  <div className='input-group form-group'>
                    <input
                      onChange={this.onChange}
                      value={this.state.username}
                      error={this.state.errors.username}
                      placeholder='username'
                      id='username'
                      type='text'
                      className={classnames('form-control', {
                        invalid: this.state.errors.username,
                      })}
                    />
                  </div>

                  <div className='input-group form-group'>
                    {/* <label htmlFor='password'>Password</label> */}
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={this.state.errors.email}
                      placeholder='email address'
                      id='email'
                      type='email'
                      className={classnames('form-control', {
                        invalid: this.state.errors.email,
                      })}
                    />

                    <span className='red-text'>
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>

                  <div className='input-group form-group'>
                    {/* <label htmlFor='password'>Password</label> */}
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      placeholder='password'
                      id='password'
                      type='password'
                      className={classnames('form-control', {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />

                    <span className='red-text'>
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>

                  <div className='input-group form-group'>
                    {/* <label htmlFor='password'>Password</label> */}
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={this.state.errors.password2}
                      placeholder='confirm password'
                      id='password2'
                      type='password'
                      className={classnames('form-control', {
                        invalid: this.state.errors.password2,
                      })}
                    />

                    <span className='red-text'>
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div
                    className='form-group'
                    style={{ paddingTop: '40.250px' }}>
                    <button type='submit' className='btn float-right login_btn'>
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div class='card-footer'>
                <div class='d-flex links text-white'>
                  Already have an account? <a href='/login'>Sign In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
RegisterBootstrap.propTypes = {
  errors: PropTypes.object.isRequired,
};
export default withRouter(RegisterBootstrap);
