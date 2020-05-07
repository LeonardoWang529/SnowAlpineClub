import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubHeaderComponent from '../SubHeader.component';
import SideMenuAccount from './SideMenuAccount';
import Avatar from './Avatar';
import AuthService from '../auth/authService';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      user: {
        username: '',
        email: '',
        register_date: '',
        firstname: '',
        lastname: '',
        address: '',
        avatar: '',
      },
    };
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
    this.setState({
      user: {
        ...this.state.user,
        [e.target.id]: e.target.value,
      },
    });
    // this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUserData = this.state.user;

    axios
      .post('http://localhost:5000/users/profile', newUserData)
      .then((res) => {
        console.log(res.data);
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        this.setState({
          user: AuthService.getCurrentUser(),
        });
      })
      .catch((err) =>
        this.setState({
          errors: err.response.data,
        })
      );
  };

  render() {
    const user = this.state.user;
    return (
      <div>
        <SubHeaderComponent />
        <div style={{ width: '80%' }} className='container'>
          <div className='row'>
            <div className='col m4 l3 '>
              <SideMenuAccount />
            </div>

            <div className='col m8 l9 '>
              <h3>Edit My Information</h3>
              <form
                className='col s12'
                onSubmit={this.onSubmit.bind(this)}
                autoComplete='off'>
                <div className='row'>
                  <div className='input-field col s6'>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input
                      onChange={this.onChange}
                      id='email'
                      type='text'
                      value={user.email}
                      placeholder={user.email}
                      className='validate'
                    />
                  </div>

                  <div className='input-field col s6'>
                    <label htmlFor='firstname'>Firstname</label>
                    <br />
                    <input
                      onChange={this.onChange}
                      id='firstname'
                      type='text'
                      placeholder={user.firstname}
                      className='validate'
                    />
                  </div>
                  <div className='input-field col s6'>
                    <label htmlFor='lastname'>Lastname</label>
                    <br />
                    <input
                      onChange={this.onChange}
                      id='lastname'
                      type='text'
                      placeholder={user.lastname}
                      className='validate'
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <label htmlFor='address'> Address</label>
                    <br />
                    <textarea
                      onChange={this.onChange}
                      id='address'
                      placeholder={user.address}
                      className='materialize-textarea'></textarea>
                  </div>
                </div>

                <div className='row'>
                  <Avatar />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
EditProfile.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default EditProfile;
