import React, { Component } from 'react';
import SubHeaderComponent from '../SubHeader.component';
import SideMenuAccount from './SideMenuAccount';
import AuthService from '../auth/authService';
import setAuthToken from '../../utils/setAuthToken';

class AccountSummary extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},

      user: {
        username: '',
        email: '',
        register_date: '',
      },
    };
  }

  componentDidMount() {
    const auth = AuthService.getCurrentUser();

    if (Object.keys(auth).length === 0) {
      //console.log('jump to login');
      this.props.history.push('/login');
    }

    this.setState({
      user: auth.user,
    });
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    this.props.history.push('/Shop');
  };

  render() {
    return (
      <div>
        <SubHeaderComponent />
        <div style={{ height: '75vh', width: '80%' }} className='container'>
          <div className='row'>
            <div className='col m4 l3 '>
              <SideMenuAccount />
            </div>

            <div className='col m8 l9 '>
              <h3>Your Account Information</h3>
              <div className='row text-align: right'></div>
              <table className='striped bordered'>
                <tbody>
                  <tr>
                    <td>
                      <b>Username</b>
                    </td>
                    <td>{this.state.user.username}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>Email</b>
                    </td>
                    <td>{this.state.user.email}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>Account Since</b>
                    </td>
                    <td>{this.state.user.register_date.split('T')[0]}</td>
                  </tr>
                </tbody>
              </table>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                }}
                onClick={this.onLogoutClick}
                className='btn btn-primary waves-effect waves-light hoverable blue accent-3'>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
