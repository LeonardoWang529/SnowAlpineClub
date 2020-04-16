import React from "react";
import axios from "axios";
import PostComponent from "./Post.component";

class PostsGridComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })

            })
    }


    handleChange(p) {
        window.location ="/SinglePost";
    }


    render() {
        return (
            <div className="row">
                {this.state.posts.map(p => <PostComponent key={p._id} post={p} handleChange={this.handleChange}/>)}
            </div>
        )
    }

}

export default PostsGridComponent;