import React from "react";

class CommentComponent extends React.Component{



    render() {
        return <div className={"container"}>
            <p>{this.props.comment.commentContent}</p>
        </div>
    }

}

export default CommentComponent;