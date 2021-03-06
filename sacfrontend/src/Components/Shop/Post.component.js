import React from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

class PostComponent extends React.Component {
    state = {
        source: null
    }

    componentDidMount(){
        axios.get('https://snow-alpine.com/postimages/'+this.props.post.postImageId)
            .then(res => {
                axios.get("https://snow-alpine.com/uploadPostImage/image/" + res.data.postImage1,
                    { responseType: 'arraybuffer' },)
                    .then(response => {
                        const base64 = btoa(
                            new Uint8Array(response.data).reduce(
                                (data, byte) => data + String.fromCharCode(byte),
                                '',
                            ),
                        );
                        this.setState({ source: "data:;base64," + base64 });
                    })
            })

    }

    render() {
        return (
            /*<div className="col-md-4" onClick={()=><Redirect to={{pathname: '/SinglePost', state: { post: this.props.post }}}/>}>*/
            <Link className="col-md-4" to={{pathname: '/SinglePost', state: { post: this.props.post}}}>
            {/*<div className="col-md-4" onClick={()=>this.props.handleChange(this.props.post)}>*/}
            <div className="card" style={{width:"100%", textAlign: "center"}}>
               {/* <img src="../../logo.svg" className="card-img-top" alt="..."/>*/}
                <img className="card-img-top" style={{width:"50%", display: "block", marginLeft: "auto",
                    marginRight: "auto"}} src= {this.state.source}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign: "center"}}>{this.props.post.postTitle}</h5>
                        <p className="card-text" style={{textAlign: "center"}}>$ {this.props.post.price}</p>
                    </div>
            </div>
                <br />
            </Link>
            /*</div>*/
        )
    }
}

export default PostComponent;
