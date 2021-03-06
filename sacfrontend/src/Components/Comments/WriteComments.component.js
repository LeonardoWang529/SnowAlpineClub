import React from "react";
import {Button, Form} from "react-bootstrap";
import Axios from "axios";

class WriteCommentsComponent extends React.Component{
    state = {
        commentText:""
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const comment ={
            postId: this.props.pId,
            commentTime: new Date(),
            commentContent: this.state.commentText
        }

        Axios.post('https://snow-alpine.com/comments/create', comment)
            .then(res => {

            })
            .then(err => {
                console.log(err);
            })

        window.location.reload();
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return <div className={"container"}>
            <h3 className="my-4">Create My Comment</h3>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId={"commentText"}>
                    <Form.Control as="textarea" rows="5"
                                  type={"text"}
                                  onChange={this.handleChange}
                                  value={this.state.commentText}
                                  name={"commentText"}
                    />
                </Form.Group>

                <Button className={'postSubmit'} variant="primary" type="submit">
                    Just Gonna Send It
                </Button>
            </Form>
        </div>
    }

}

export default WriteCommentsComponent;
