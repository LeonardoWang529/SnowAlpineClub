import React from "react";
import Axios from "axios";
import CommentComponent from "./Comment.component";
import WriteCommentsComponent from "./WriteComments.component";

class CommentListComponent extends React.Component{
    state = {
        comments: []
    }

    componentDidMount =()=> {

        Axios.get('http://localhost:5000/comments/' + this.props.post._id)
            .then(res => {
                this.setState({comments : res.data})
            }).then(err =>{
              console.log(err);
        })
    }


    render() {
        return (
            <div>
                <div className={"container"}>
                    <h3 className="my-4">Comments</h3>
                {this.state.comments.map(com => <CommentComponent id={com._id} comment={com}/>)}
                </div>
                <WriteCommentsComponent pId = {this.props.post._id}/>
            </div>
        )
    }

}

export default CommentListComponent;