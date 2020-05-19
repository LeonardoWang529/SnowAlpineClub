import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubHeaderComponent from '../SubHeader.component';
import SideMenuAccount from './SideMenuAccount';
import Avatar from './Avatar';
import AuthService from '../auth/authService';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
      .post('https://snow-alpine.com/users/profile', newUserData)
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
              <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Row>
                  <Form.Group as={Col} controlId='firstname'>
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={user.firstname}
                      name={'firstname'}
                      // value={this.state.}
                      onChange={this.onChange}
                      style={{ marginRight: 100 }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='lastname'>
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='user.lastname'
                      name={'lastname'}
                      // value={this.state.postTitle}
                      onChange={this.onChange}
                      style={{ marginRight: 100 }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={user.address}
                      name={'address'}
                      // value={this.state.}
                      onChange={this.onChange}
                      style={{ marginRight: 100 }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Avatar />
                  </Form.Group>
                </Form.Row>
                <Button
                  className={'profileSubmit'}
                  variant='primary'
                  type='submit'>
                  OK
                </Button>
              </Form>
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
