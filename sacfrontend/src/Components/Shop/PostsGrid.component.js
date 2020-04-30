import React from "react";
import axios from "axios";
import PostComponent from "./Post.component";

class PostsGridComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
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
                {this.state.posts.map(p => <PostComponent key={p._id} post={p}/>)}
            </div>
        )
    }

}

export default PostsGridComponent;