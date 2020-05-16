import React from 'react';
import bimg from '../images/maintop.jpg';
import classnames from 'classnames';

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import AuthService from './auth/authService';

const homepageStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${bimg})`,
  backgroundSize: 'cover',
};
class LoginBootstrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    console.log(this.props);
  }

  componentWillMount() {
    const auth = AuthService.getCurrentUser();
    if (Object.keys(auth).length === 0) {
      //console.log('jump to login');
      //this.props.history.push('/login');
    } else {
      //this.props.history.push('/account/summary');
      // this.props.history.push('/shop');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('http://localhost:5000/users/login', userData)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        console.log(res.data.userId);
        // Set token to Auth header
        setAuthToken(token);
        this.props.history.push('/account/summary');
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
        });
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <div class='background-img' resizeMode='cover' style={homepageStyle}>
        <div class='container-login'>
          <div class='d-flex justify-content-center h-100'>
            <div class='card-login'>
              <div class='card-header'>
                <h3>Sign In</h3>
                <div class='d-flex justify-content-end social_icon'></div>
              </div>

              <div class='card-body'>
                <form onSubmit={this.onSubmit}>
                  <div className='input-group form-group'>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      placeholder='username or email'
                      id='email'
                      type='email'
                      className={classnames('form-control', {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <span className='red-text'>
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>

                  <div className='"input-group form-group"'>
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
                  Don't have an account? <a href='/register'>Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBootstrap;
