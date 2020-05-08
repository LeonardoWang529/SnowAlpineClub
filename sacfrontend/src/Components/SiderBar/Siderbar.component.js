import React from "react";
import SiderBarCategoriesComponent from "./SiderBarCategories.Component";
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
} from 'react-switch-lang';
import en from '../../en.json';
import ch from '../../ch.json';

// Do this two lines only when setting up the application
setTranslations({ en, ch });
setDefaultLanguage('en');

// If you want to remember selected language
setLanguageCookie();

class SiderbarComponent extends React.Component{
    state = {
        categories : ["all","Snowboard", "Snowboots", "SnowClothes", "Ski", "Skiboots"]
    }

    componentDidMount(){
        //this.props.location.state.categ

        if (localStorage && localStorage.getItem('lang')) {
            let c = localStorage.getItem('lang');
            if(c!=="") {
                setLanguage(c);
            }
        }
    }

    handleCategoryClick = e => {
        this.props.handler(e);
    }

    render() {
        const { t } = this.props;
        return (
            <div className="shop__sidebar">
                <aside className="wedget__categories poroduct--cat">
                    <h3 className="wedget__title">{t('side.Categories')}</h3>
                    <hr style={{height:"1px", borderTop:"1px solid #E30425"}} />
                    <ul>
                    {this.state.categories.map((category) =>
                        <SiderBarCategoriesComponent clickhandle={this.handleCategoryClick} catname={category}/>
                    )}
                    </ul>

                    {/*<ul>
                        <li><a href="#">Snowboard <span>(3)</span></a></li>
                        <li><a href="#">Snowboots <span>(4)</span></a></li>
                        <li><a href="#">SnowClothes <span>(6)</span></a></li>
                        <li><a href="#">Ski <span>(7)</span></a></li>
                        <li><a href="#">Skiboots <span>(8)</span></a></li>
                    </ul>*/}
                </aside>
               {/* <aside className="wedget__categories pro--range">
                    <h3 className="wedget__title">Filter by price</h3>
                    <div className="content-shopby">
                        <div className="price_filter s-filter clear">
                            <form action="#" method="GET">
                                <div id="slider-range"></div>
                                <div className="slider__range--output">
                                    <div className="price__output--wrap">
                                        <div className="price--output">
                                            <span>Price :</span><input type="text" id="amount" readOnly=""/>
                                        </div>
                                        <div className="price--filter">
                                            <a href="#">Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
                <aside className="wedget__categories poroduct--compare">
                    <h3 className="wedget__title">Compare</h3>
                    <ul>
                        <li><a href="#">x</a><a href="#">Condimentum posuere</a></li>
                        <li><a href="#">x</a><a href="#">Condimentum posuere</a></li>
                        <li><a href="#">x</a><a href="#">Dignissim venenatis</a></li>
                    </ul>
                </aside>
                <aside className="wedget__categories poroduct--tag">
                    <h3 className="wedget__title">Product Tags</h3>
                    <ul>
                        <li><a href="#">Biography</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Cookbooks</a></li>
                        <li><a href="#">Health & Fitness</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Mystery</a></li>
                        <li><a href="#">Inspiration</a></li>
                        <li><a href="#">Religion</a></li>
                        <li><a href="#">Fiction</a></li>
                        <li><a href="#">Fantasy</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Toys</a></li>
                        <li><a href="#">Hoodies</a></li>
                    </ul>
                </aside>
                <aside className="wedget__categories sidebar--banner">
                    <img src="images/others/banner_left.jpg" alt="banner images"/>
                        <div className="text">
                            <h2>new products</h2>
                            <h6>save up to <br /> <strong>40%</strong>off</h6>
                        </div>
                </aside>*/}
            </div>
        )
    }
}

export default translate(SiderbarComponent);