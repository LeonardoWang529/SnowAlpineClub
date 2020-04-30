import React from "react";
import logo from '../../logo.svg';
import '../../App.css';
import axios from "axios";

class PostImageComponent extends React.Component{

    state = {
        source: null
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/postimages/'+this.props.post.postImageId)
            .then(res => {
                axios.get("http://localhost:5000/uploadPostImage/image/" + res.data.PostImage1,
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
            <img className="card-img-top" style={{ width:"100%",height:200}} src= {this.state.source}/>
        )
    }
}

export default PostImageComponent;