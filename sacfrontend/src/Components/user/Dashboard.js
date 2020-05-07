import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SubHeaderComponent from '../layout/SubHeader';
import setAuthToken from '../../utils/setAuthToken';


class Dashboard extends Component {
  
  onLogoutClick = (e) => {
    e.preventDefault();
    // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
    this.props.history.push('/')
  };
  render() {
    return (
      <div>
        <SubHeaderComponent />
        <div style={{ height: '75vh' }} className='container valign-wrapper'>
          <div className='row'>
            <div className='col s12 center-align'>
              <h4>Dashboard</h4>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                }}
                onClick={this.onLogoutClick}
                className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default (Dashboard);
