import React from "react";
import SiderbarComponent from "../Siderbar.component";
import PostInforComponent from "./PostInfor.component";
import PostDetailComponent from "./PostDetail.component"
import PostImageComponent from "./PostImage.component";
import axios from 'axios';

class SinglePostComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/5e94f2f104bcab221f1fff9e/')
            .then(res => {
                console.log(res.data);
                this.setState({
                    post: res.data
                })

            })
    }


    render() {
        return (
            <div className={"container"}>
            <div className="row">
                <div className="col-lg-9 col-12">
                        <div className="wn__single__product">
                            <div className={"row"}>
                            <div className="col-lg-6 col-12">
                                <PostImageComponent />
                            </div>
                            <div className="col-lg-6 col-12">
                                <PostInforComponent key={this.state.post.id} post={this.state.post}/>
                            </div>
                        </div>


                    </div>
                    <div className="product__info__detailed">
                        <PostDetailComponent key={this.state.post.id} post={this.state.post}/>
                    </div>
                    {/*<RelatedPostComponent />*/}

                </div>

                <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
                    <SiderbarComponent />
                </div>
            </div>
            </div>
        )
    }

}

export default SinglePostComponent;