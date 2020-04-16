import React from "react";

class PostDetailComponent extends React.Component{

    render() {
        return (
            <div className="product__info__detailed">
                <div className="pro_details_nav nav justify-content-start" role="tablist">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#nav-details" role="tab">Details</a>
                    <a className="nav-item nav-link" data-toggle="tab" href="#nav-review" role="tab">Reviews</a>
                </div>
                <div className="tab__container">
                    {/*Start Single Tab Content*/}
                    <div className="pro__tab_label tab-pane fade show active" id="nav-details" role="tabpanel">
                        <div className="description__attribute">
                            <p>{this.props.post.postContent}</p>
                            <ul>
                                <li>• Two-tone gray heather hoodie.</li>
                                <li>• Drawstring-adjustable hood.</li>
                                <li>• Machine wash/dry.</li>
                            </ul>
                        </div>
                    </div>
                     {/*End Single Tab Content
                    Start Single Tab Content */}
                    <div className="pro__tab_label tab-pane fade" id="nav-review" role="tabpanel">
                        <div className="review__attribute">
                            <h1>Customer Reviews</h1>
                            <h2>Hastech</h2>
                            <div className="review__ratings__type d-flex">
                                <div className="review-ratings">
                                    <div className="rating-summary d-flex">
                                        <span>Quality</span>
                                        <ul className="rating d-flex">
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div className="rating-summary d-flex">
                                        <span>Price</span>
                                        <ul className="rating d-flex">
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="rating-summary d-flex">
                                        <span>value</span>
                                        <ul className="rating d-flex">
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="review-content">
                                    <p>Hastech</p>
                                    <p>Review by Hastech</p>
                                    <p>Posted on 11/6/2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-fieldset">
                            <h2>You're reviewing:</h2>
                            <h3>Chaz Kangeroo Hoodie</h3>
                            <div className="review-field-ratings">
                                <div className="product-review-table">
                                    <div className="review-field-rating d-flex">
                                        <span>Quality</span>
                                        <ul className="rating d-flex">
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="review-field-rating d-flex">
                                        <span>Price</span>
                                        <ul className="rating d-flex">
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="review-field-rating d-flex">
                                        <span>Value</span>
                                        <ul className="rating d-flex">
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="review_form_field">
                                <div className="input__box">
                                    <span>Nickname</span>
                                    <input id="nickname_field" type="text" name="nickname"/>
                                </div>
                                <div className="input__box">
                                    <span>Summary</span>
                                    <input id="summery_field" type="text" name="summery"/>
                                </div>
                                <div className="input__box">
                                    <span>Review</span>
                                    <textarea name="review"></textarea>
                                </div>
                                <div className="review-form-actions">
                                    <button>Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/* End Single Tab Content*/}
                </div>
            </div>
        )
    }

}

export default PostDetailComponent;