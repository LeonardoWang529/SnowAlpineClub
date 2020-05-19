import React from "react";
import logo from '../../logo.svg';
import '../../App.css';
import axios from "axios";

class PostImageComponent extends React.Component{

    state = {
        source: null
    }

    componentDidMount = () => {
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
            <img className="card-img-top" style={{width:"50%", display: "block", marginLeft: "auto",
                marginRight: "auto"}} src= {this.state.source}/>
        )
    }
}

export default PostImageComponent;
