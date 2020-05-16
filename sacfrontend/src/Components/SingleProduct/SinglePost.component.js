import React from "react";
import SiderbarComponent from "../SiderBar/Siderbar.component";
import PostInforComponent from "./PostInfor.component";
import PostDetailComponent from "./PostDetail.component"
import PostImageComponent from "./PostImage.component";
import axios from 'axios';
import SubHeaderComponent from "../SubHeader.component";
import CommentListComponent from "../Comments/CommentList.component";

class SinglePostComponent extends React.Component{
    state = {
        categ: "all"
    }

    handleCatMove =(c) => {
        localStorage.setItem('cate', c);
        this.props.history.replace("/Shop")


        /*this.props.history.push({
            pathname:"/Shop",
            state:{
                categ:c
            }
        });*/
    }


    render() {
        return (
            <div>
                <SubHeaderComponent />
                <div className="container">
            <div className="row">
                <div className="col-lg-9 col-12">
                        <div className="wn__single__product">
                            <div className={"row"}>
                            <div className="col-lg-6 col-12">
                                <PostImageComponent post={this.props.location.state.post}/>
                            </div>
                            <div className="col-lg-6 col-12">
                                <PostInforComponent  post={this.props.location.state.post}/>
                            </div>
                        </div>


                    </div>
                    {/*<div className="product__info__detailed">
                        <PostDetailComponent post={this.props.location.state.post}/>
                    </div>*/}
                    {/*<RelatedPostComponent />*/}
                    <CommentListComponent post={this.props.location.state.post}/>

                </div>

                <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
                    <SiderbarComponent cate={this.state.categ} handler={this.handleCatMove}/>
                </div>
            </div>
                </div>
            </div>
        )
    }

}

export default SinglePostComponent;