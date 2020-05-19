import React from "react";
import axios from "axios";
import PostComponent from "./Post.component";

class PostsGridComponent extends React.Component{
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://snow-alpine.com/posts/')
            .then(res => {
                this.setState({
                    posts: this.state.posts.concat(res.data)
                })

            })
    }


    render() {

        return (
            <div className="row">
                {this.state.posts.map(p => this.props.cate === "all"?
                        <PostComponent key={p._id} post={p}/> : p.postCategories === this.props.cate? <PostComponent key={p._id} post={p}/>:null
                )}
            </div>
        )
    }

}

export default PostsGridComponent;
