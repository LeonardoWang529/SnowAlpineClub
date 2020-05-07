import React from 'react';
import { Link } from 'react-router-dom';
import bimg from '../images/maintop.jpg';
// import 'materialize-css/dist/css/materialize.min.css';

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
        <div class='container m-auto '></div>
      </div>
    );
  }
}

export default Authentication;
