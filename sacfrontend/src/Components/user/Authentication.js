import React from 'react';
import { Link } from 'react-router-dom';
import bimg from '../images/maintop.jpg';

const homepageStyle = {
  width: '100%',
  height: '900px',
  backgroundImage: `url(${bimg})`,
  backgroundSize: 'cover',
};

class Authentication extends React.Component {
  render() {
    return (
      <div class='background_img' resizeMode='cover' style={homepageStyle}>
        <div class='container m-auto '>
          <div class='row'>
            <div class='col-md-5 py-md-5 mt-5 white-text text-right '>
              <Link
                to='/register'
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
                class='btn btn-outline-light btn-secondery btn-lg'>
                Register
              </Link>
            </div>
            <div class='col-md-6 py-md-5 mt-5 white-text text-center '>
              <Link
                to='/login'
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
                class='btn btn-outline-light btn-secondery btn-lg'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;
