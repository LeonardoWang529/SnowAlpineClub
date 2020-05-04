import React from "react";

class PostInforComponent extends React.Component{

    render() {
        return (
            <div className="product__info__main">
                <h1>{this.props.post.postTitle}</h1>
                <div className="price-box">
                    <span>$ {this.props.post.price}</span>
                </div>
                <div className="product__overview">
                    <p>{this.props.post.postContent}</p>
                </div>


                <div className="product_meta">
                    <p>Categories: {this.props.post.postCategories}</p>
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