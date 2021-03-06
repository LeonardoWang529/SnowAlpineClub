import React from "react";
import SiderbarComponent from "../SiderBar/Siderbar.component";
import PostsGridComponent from "./PostsGrid.component";
import axios from "axios";
import SubHeaderComponent from "../SubHeader.component";

class ShopComponent extends React.Component{
    state = {
        cat: "all"
    }

    componentDidMount(){
        //this.props.location.state.categ

        if (localStorage && localStorage.getItem('cate')) {
            let c = localStorage.getItem('cate');
            if(c!=="") {
                this.setState({cat: c})
                localStorage.setItem('cate', "");
            }
        }
    }

    handleCatMove =(c) => {
        this.setState({cat:c})
    }

    render() {
        return (
            <div>
            <SubHeaderComponent />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                                <SiderbarComponent cate={this.state.cat} handler={this.handleCatMove}/>
                            </div>

                            <div className="col-lg-9 col-12 order-1 order-lg-2">
                                <PostsGridComponent cate={this.state.cat}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShopComponent;