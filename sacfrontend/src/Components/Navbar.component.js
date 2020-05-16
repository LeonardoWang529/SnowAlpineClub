import React from "react";
import {Link} from "react-router-dom";
import loginImg from "../images/icons/icon_setting.png"
import {Button, Form, FormControl, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import PropTypes from 'prop-types';
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
} from 'react-switch-lang';
import en from '../en.json';
import ch from '../ch.json';


// Do this two lines only when setting up the application
setTranslations({ en, ch });
setDefaultLanguage('en');

// If you want to remember selected language
setLanguageCookie();

class NavbarComponent extends React.Component{

    handleSetLanguage = (key) => () => {
        localStorage.setItem('lang', key);
        setLanguage(key);
    };

    render() {
        const { t } = this.props;
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">{t('title')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-item nav-link" to="Shop">{t('nav.shop')}</Link>
                        <Link className="nav-item nav-link" to="CreatePost">{t('nav.CreatePost')}</Link>
                        <NavDropdown title={t('nav.Dropdown')} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleSetLanguage('ch')}>{t('nav.Action')}</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleSetLanguage('en')}>{t('nav.Another')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <form className='form-inline my-2 my-lg-0'>
                        <input
                            className='form-control mr-sm-2'
                            type='search'
                            placeholder={t('nav.Search')}
                            aria-label='Search'
                        />
                        <button
                            className='btn btn-outline-success my-2 my-sm-0'
                            type='submit'>
                            {t('nav.Search')}
                        </button>
                    </form>

                    <div className='nav-item'>
                        <Link className='nav-item nav-link' to='/account/summary'>
                            <button className={'loginbutton'}>
                                <img src={loginImg} alt='login image' />
                            </button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>


        )
    }


}

export default translate(NavbarComponent)