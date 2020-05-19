import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubHeaderComponent from '../SubHeader.component';
import SideMenuAccount from './SideMenuAccount';
import classnames from 'classnames';
import axios from 'axios';
import AuthService from '../auth/authService';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, errors: {} };
  }

  componentWillMount() {
    const auth = AuthService.getCurrentUser();
    if (Object.keys(auth).length === 0) {
      //console.log('jump to login');
      this.props.history.push('/login');
    } else {
      this.setState({
        user: auth.user,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.props);
    const newUserData = {
      username: this.state.user.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    //console.log(this.state);

    axios
      .post('https//snow-alpine.com/users/changepassword', newUserData)
      .catch((err) =>
        this.setState(
          {
            errors: err.response,
          },
          () => {
            console.log(err.response.data);
          }
        )
      );

    // this.props.changepassword(newuserData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <SubHeaderComponent />
        <div style={{ width: '80%' }} className='container'>
          <div className='row'>
            <div className='col m4 l3 '>
              <SideMenuAccount />
            </div>

            <div className='col m8 l9 '>
              <h3>Change Password</h3>
              <form
                className='col s12'
                onSubmit={this.onSubmit.bind(this)}
                autoComplete='off'>
                <div className='row'>
                  <div className='row'>
                    <div className='input-field col s6'>
                      <label htmlFor='password'>Password</label>
                      <br />
                      <input
                        onChange={this.onChange}
                        id='password'
                        type='password'
                        placeholder='Enter new Password'
                        className={classnames('', {
                          invalid: errors.password,
                        })}
                        error={errors.password}
                      />
                    </div>
                    <div className='input-field col s6'>
                      <label htmlFor='password2'>Confirm Password</label>
                      <span className='red-text'>{errors.password2}</span>
                      <br />
                      <input
                        onChange={this.onChange}
                        id='password2'
                        type='password'
                        placeholder='Confirm Password'
                        error={errors.password2}
                        className={classnames('', {
                          invalid: errors.password2,
                        })}
                      />
                    </div>
                  </div>
                  <button
                    style={{
                      width: '150px',
                      borderRadius: '3px',
                      letterSpacing: '1.5px',
                      marginTop: '1rem',
                    }}
                    type='submit'
                    className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
                    OK
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
ChangePassword.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  changepassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ChangePassword;
