import React from "react";
import {Link} from "react-router-dom";
import loginImg from "../images/icons/icon_setting.png"

class NavbarComponent extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">SnowAlpineCompany</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="Shop">Shop</Link>
                        <Link className="nav-item nav-link" to="SinglePost">SinglePost</Link>
                    </div>
                </div>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                <div className="nav-item">
                    <button className={"loginbutton"} onClick={this}><img src={loginImg} alt="login image"/></button>
                </div>

            </nav>
        )
    }


}

export default NavbarComponent;