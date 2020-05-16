import React from "react";
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

class FooterComponent extends React.Component{
    componentDidMount(){
        //this.props.location.state.categ

        if (localStorage && localStorage.getItem('lang')) {
            let c = localStorage.getItem('lang');
            if(c!=="") {
                setLanguage(c);
            }
        }
    }

    render() {
        const { t } = this.props;
        return (
            <footer className="text-muted" style={{margin:"50px"}}>
                <div className="container">
                    <p className="float-right">
                        <a href="#">{t('foot.back')}</a>
                    </p>
                    <p>{t('foot.Thank')}</p>
                    <p>{t('foot.Connect')} <a href="https://getbootstrap.com/">Visit the homepage</a>
                        {t('foot.visit')}</p>
                </div>
            </footer>
        )
    }
}

export default translate(FooterComponent);