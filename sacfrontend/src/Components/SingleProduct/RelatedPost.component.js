import React from "react";
import book1 from "../../images/books/1.jpg";

class RelatedPostComponent extends React.Component{
    render() {
        return (
            <div className="wn__related__product pt--80 pb--50">
                <div className="section__title text-center">
                    <h2 className="title__be--2">Related Products</h2>
                </div>
                <div className="row mt--60">
                    <div className="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html">
                                    <img src={book1} alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html">
                                    <img src="../../images/books/2.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">BEST SALLER</span>
                                </div>
                            </div>
                            <div className="product__content content--center">
                                <h4><a href="single-product.html">robin parrish</a></h4>
                                <ul className="prize d-flex">
                                    <li>$35.00</li>
                                    <li className="old_prize">$35.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html">
                                                <i className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/3.jpg"
                                                                                          alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img
                                    src="images/books/4.jpg" alt="product image"/></a>
                                <div className="hot__box color--2">
                                    <span className="hot-label">HOT</span>
                                </div>
                            </div>
                            <div className="product__content content--center">
                                <h4><a href="single-product.html">The Remainng</a></h4>
                                <ul className="prize d-flex">
                                    <li>$35.00</li>
                                    <li className="old_prize">$35.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i
                                                className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/7.jpg"
                                                                                          alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img
                                    src="images/books/8.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">HOT</span>
                                </div>
                            </div>
                            <div className="product__content content--center">
                                <h4><a href="single-product.html">Lando</a></h4>
                                <ul className="prize d-flex">
                                    <li>$35.00</li>
                                    <li className="old_prize">$50.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i
                                                className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/9.jpg"
                                                                                          alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img
                                    src="images/books/10.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">HOT</span>
                                </div>
                            </div>
                            <div className="product__content content--center">
                                <h4><a href="single-product.html">Doctor Wldo</a></h4>
                                <ul className="prize d-flex">
                                    <li>$35.00</li>
                                    <li className="old_prize">$35.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i
                                                className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/11.jpg"
                                                                                          alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img
                                    src="images/books/2.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">BEST SALER</span>
                                </div>
                            </div>
                            <div className="product__content content--center content--center">
                                <h4><a href="single-product.html">Animals Life</a></h4>
                                <ul className="prize d-flex">
                                    <li>$50.00</li>
                                    <li className="old_prize">$35.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i
                                                className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*Start Single Product */}
                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/1.jpg"
                                                                                          alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img
                                    src="images/books/6.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">BEST SALER</span>
                                </div>
                            </div>
                            <div className="product__content content--center content--center">
                                <h4><a href="single-product.html">Olio Madu</a></h4>
                                <ul className="prize d-flex">
                                    <li>$50.00</li>
                                    <li className="old_prize">$35.00</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i
                                                className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i
                                                className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a>
                                            </li>
                                            <li><a data-toggle="modal" title="Quick View"
                                                   className="quickview modal-view detail-link" href="#productmodal"><i
                                                className="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default RelatedPostComponent;