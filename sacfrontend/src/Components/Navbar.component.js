import React from "react";
import {Link} from "react-router-dom";
import loginImg from "../images/icons/icon_setting.png"
import {Button, Form, FormControl, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";

class NavbarComponent extends React.Component{
/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="/">SnowAlpineCompany</a>
<button className="navbar-toggler" type="button" data-toggle="collapse"
data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true"
aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>

</button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<div className="navbar-nav">
<Link className="nav-item nav-link" to="Shop">Shop</Link>
<Link className="nav-item nav-link" to="CreatePost">CreatePost</Link>
</div>
</div>

<form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

<div className="nav-item">
<button className={"loginbutton"} onClick={this}><img src={loginImg} alt="login image"/></button>
</div>

</nav>*/


    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">SnowAlpineCompany</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-item nav-link" to="Shop">Shop</Link>
                        <Link className="nav-item nav-link" to="CreatePost">CreatePost</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        )
    }


}

export default NavbarComponent;