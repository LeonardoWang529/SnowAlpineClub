import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import 'materialize-css/dist/css/materialize.min.css';
import classnames from 'classnames';
import SubHeaderComponent from '../SubHeader.component';
import axios from 'axios';
import AuthService from './authService';

class Register extends Component {
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
    return (
      <div>
        <SubHeaderComponent />
        <div className='container'>
          <div className='row'>
            <div className='col s8 offset-s2'>
              <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                <h4>
                  <b>Register</b> below
                </h4>
                <p className='grey-text text-darken-1'>
                  Already have an account? <Link to='/login'>Log in</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.username}
                    error={this.state.errors.username}
                    id='username'
                    type='text'
                    className={classnames('', {
                      invalid: this.state.errors.username,
                    })}
                  />
                  <label htmlFor='username'>Name</label>
                </div>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={this.state.errors.email}
                    id='email'
                    type='email'
                    className={classnames('', {
                      invalid: this.state.errors.email,
                    })}
                  />
                  <label htmlFor='email'>Email</label>
                  <span className='red-text'>{this.state.errors.email}</span>
                </div>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={this.state.errors.password}
                    id='password'
                    type='password'
                    className={classnames('', {
                      invalid: this.state.errors.password,
                    })}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='input-field col s12'>
                  <br />
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={this.state.errors.password2}
                    id='password2'
                    type='password'
                    className={classnames('', {
                      invalid: this.state.errors.password2,
                    })}
                  />
                  <label htmlFor='password2'>Confirm Password</label>
                  <span className='red-text'>
                    {this.state.errors.password2}
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
                    Sign up
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
Register.propTypes = {
  errors: PropTypes.object.isRequired,
};
export default withRouter(Register);
