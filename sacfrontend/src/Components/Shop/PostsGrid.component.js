import React from "react";
import axios from "axios";
import PostComponent from "./Post.component";

class PostsGridComponent extends React.Component{
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(res => {
                console.log(res.data);
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