import React from 'react';
import { Link } from 'react-router-dom';
import bimg from '../images/maintop.jpg';
// import 'materialize-css/dist/css/materialize.min.css';

class Authentication extends React.Component {
  render() {
    return (
        <div className={"landingImgContianer"} >
          <section className="jumbotron text-center"
                   style={{width:'100%', height: '900px', backgroundImage: 'url(' + bimg + ')', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '50% 70%'}}/>
        </div>
    );
  }
}

export default Authentication;
