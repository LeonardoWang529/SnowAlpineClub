import React from "react";

class PostInforComponent extends React.Component{

    render() {
        return (
            <div className="product__info__main">
                <h1>{this.props.post.postTitle}</h1>
                <div className="product-reviews-summary d-flex">
                    <ul className="rating-summary d-flex">
                        <li><i className="zmdi zmdi-star-outline"></i></li>
                        <li><i className="zmdi zmdi-star-outline"></i></li>
                        <li><i className="zmdi zmdi-star-outline"></i></li>
                        <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                        <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                    </ul>
                </div>
                <div className="price-box">
                    <span>$ {this.props.post.price}</span>
                </div>
                <div className="product__overview">
                    <p>{this.props.post.postContent}</p>
                </div>
                <div className="box-tocart d-flex">
                    <span>Qty</span>
                    <input id="qty" className="input-text qty" name="qty" min="1" value="1" title="Qty"
                           type="number"/>
                    <div className="addtocart__actions">
                        <button className="tocart" type="submit" title="Add to Cart">Add to Cart
                        </button>
                    </div>
                    <div className="product-addto-links clearfix">
                        <a className="wishlist" href="#"></a>
                        <a className="compare" href="#"></a>
                    </div>
                </div>
                <div className="product_meta">
											<span className="posted_in">Categories:
												<a href="#">Adventure</a>,
												<a href="#">Kids' Music</a>
											</span>
                </div>
                <div className="product-share">
                    <ul>
                        <li className="categories-title">Share :</li>
                        <li>
                            <a href="#">
                                <i className="icon-social-twitter icons"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-social-tumblr icons"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-social-facebook icons"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-social-linkedin icons"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default PostInforComponent;