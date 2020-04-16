import React from "react";

class PostComponent extends React.Component {

    render() {
        return (
            <div className="col-md-4" onClick={()=>this.props.handleChange(this.props.post)}>
            <div className="card" style={{width: "18rem"}}>
                <img src="../../logo.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.postTitle}</h5>
                        <p className="card-text">{this.props.post.postContent}</p>
                    </div>
            </div>
            </div>
        )
    }
}

export default PostComponent;