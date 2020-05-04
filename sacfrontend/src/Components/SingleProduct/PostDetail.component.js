import React from "react";

class PostDetailComponent extends React.Component{

    render() {
        return (
            <div className="product__info__detailed">
                <div className="pro_details_nav nav justify-content-start" role="tablist">
                    <a className="nav-item nav-link" data-toggle="tab" href="#nav-review" role="tab">Comments</a>
                </div>
                <div className="tab__container">

                </div>
            </div>
        )
    }

}

export default PostDetailComponent;