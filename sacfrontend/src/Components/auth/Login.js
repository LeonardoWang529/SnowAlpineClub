import React, { Component } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SubHeaderComponent from '../SubHeader.component';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from './authService';

class Login extends Component {
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
      this.props.history.push('/login');
    } else {
      this.props.history.push('/Shop');
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
      .post('https://snow-alpine.com/users/login', userData)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        this.props.history.push('/Shop');
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
      <div>
        <SubHeaderComponent />
        <div className='container'>
          <div style={{ marginTop: '4rem' }} className='row'>
            <div className='col s8 offset-s2'>
              <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                <h4>
                  <b>Login</b> below
                </h4>
                <p className='grey-text text-darken-1'>
                  Don't have an account? <Link to='/register'>Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id='email'
                    type='email'
                    className={classnames('', {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                  />
                  <label htmlFor='email'>Email</label>
                  <span className='red-text'>
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id='password'
                    type='password'
                    className={classnames('', {
                      invalid: errors.password || errors.passwordincorrect,
                    })}
                  />
                  <label htmlFor='password'>Password</label>
                  <span className='red-text'>
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                  <button
                    style={{
                      width: '150px',
                      borderRadius: '3px',
                      letterSpacing: '1.5px',
                      marginTop: '1rem',
                    }}
                    type='submit'
                    className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default withRouter(Login);
