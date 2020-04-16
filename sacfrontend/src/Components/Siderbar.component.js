import React from "react";

class SiderbarComponent extends React.Component{

    render() {
        return (
            <div className="shop__sidebar">
                <aside className="wedget__categories poroduct--cat">
                    <h3 className="wedget__title">Product Categories</h3>
                    <ul>
                        <li><a href="#">Biography <span>(3)</span></a></li>
                        <li><a href="#">Business <span>(4)</span></a></li>
                        <li><a href="#">Cookbooks <span>(6)</span></a></li>
                        <li><a href="#">Health & Fitness <span>(7)</span></a></li>
                        <li><a href="#">History <span>(8)</span></a></li>
                        <li><a href="#">Mystery <span>(9)</span></a></li>
                        <li><a href="#">Inspiration <span>(13)</span></a></li>
                        <li><a href="#">Romance <span>(20)</span></a></li>
                        <li><a href="#">Fiction/Fantasy <span>(22)</span></a></li>
                        <li><a href="#">Self-Improvement <span>(13)</span></a></li>
                        <li><a href="#">Humor Books <span>(17)</span></a></li>
                        <li><a href="#">Harry Potter <span>(20)</span></a></li>
                        <li><a href="#">Land of Stories <span>(34)</span></a></li>
                        <li><a href="#">Kids' Music <span>(60)</span></a></li>
                        <li><a href="#">Toys & Games <span>(3)</span></a></li>
                        <li><a href="#">hoodies <span>(3)</span></a></li>
                    </ul>
                </aside>
                <aside className="wedget__categories pro--range">
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
                </aside>
            </div>
        )
    }
}

export default SiderbarComponent;