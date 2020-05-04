import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios';
import SubHeaderComponent from "../SubHeader.component";
import ImageDisplay from "./ImageDisplay.component";
import PostComponent from "../Shop/Post.component";

class CreatePostComponent extends React.Component{
    state = {
        authorId: "",
        postTitle: "",
        saleBuyFlag: "",
        price: "",
        postTag: "",
        postCategories: "Snowboard",
        postContent: "",
        postTime:"",
        postImageId: "",
        imageList: [],
    }


    handleChange = e => {
        //console.log(e.target.value);
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    onAddImage = e =>{
        if(e.target.type === 'file' ) {
            const f = e.target.files[0];

            this.setState({
                imageList: this.state.imageList.concat(f)
            });
        }

    }

    handleSubmit = (e) =>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("image", this.state.imageList[0]);

        axios.post('http://localhost:5000/uploadPostImage/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
                this.setState({postImageId: res.data._id},
                    ()=>{
                        //create new post
                        let newPost = {
                            authorId: 1,
                            price: this.state.price,
                            postTitle: this.state.postTitle,
                            postTag: this.state.postTag,
                            postCategories: this.state.postCategories,
                            postContent: this.state.postContent,
                            postTime: new Date(),
                            postImageId: this.state.postImageId,
                            saleBuyFlag: this.state.saleBuyFlag,
                        }

                        //post post to server
                        axios.post('http://localhost:5000/posts/add',newPost)
                            .then(res=>{
                                console.log("success" + res.data)
                                this.props.history.replace("/Shop")
                            })
                            .catch(err =>{
                                console.log("Post post error" + err)
                            });

                })
            }).catch(err => {
                console.log("Image post error" + err)
        });

        //redirect to post

    }

    render() {
        return (
            <div>
                <SubHeaderComponent />
            <div className={"container"}>
                <h1 className="my-4">Create My Post</h1>
                <div className="row">
                    <div className={"container"}>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    name={"postTitle"}
                                    value={this.state.postTitle}
                                    onChange={this.handleChange}
                                    style={{marginRight: 100}}
                                />
                                {/*<Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>*/}
                            </Form.Group>

                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Buy"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                name={"saleBuyFlag"}
                                                value={"buy"}
                                                checked={this.state.saleBuyFlag === 'buy'}
                                                onChange ={this.handleChange}
                                    />
                                    <Form.Check inline label="Sell"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                name={"saleBuyFlag"}
                                                value={"sale"}
                                                checked={this.state.saleBuyFlag === 'sale'}
                                                onChange ={this.handleChange}
                                    />
                                </div>
                            ))}

                            <Form.Row>

                                    <Form.Group as={Col} controlId="formPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter price"
                                            name={"price"}
                                            value={this.state.price}
                                            onChange={this.handleChange}
                                        />
                                        {/*<Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>*/}
                                    </Form.Group>

                                <Form.Group as={Col} controlId="formTag">
                                    <Form.Label>Tag</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Tag"
                                        name={"postTag"}
                                        value={this.state.postTag}
                                        onChange={this.handleChange}
                                    />
                                    {/*<Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>*/}
                                </Form.Group>

                            <Form.Group controlId="formCate">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as="select"
                                    type={"text"}
                                    name={"postCategories"}
                                    value={this.state.postCategories}
                                    onChange={this.handleChange}
                                >
                                    <option value={"Snowboard"}>Snowboard</option>
                                    <option value={"Snowboots"}>Snowboots</option>
                                    <option value={"SnowClothes"}>SnowClothes</option>
                                </Form.Control>
                            </Form.Group>
                                </Form.Row>

                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="10"
                                              type="text"
                                              placeholder="Enter Description"
                                              name = "postContent"
                                              value={this.state.postContent}
                                              onChange={this.handleChange}
                                />
                            </Form.Group>

                            <Form.File
                                id="custom-file"
                                label="Custom file input"
                                accept="image/*"
                                onChange={this.onAddImage}
                                style={{marginBottom:10}}
                                custom
                            />

                            <Container style={{margin:10}}>
                                <Row>
                                    <Col xs={6} md={4}>
                                        {this.state.imageList.map(i => <ImageDisplay key={i.id} fs={i}/>)}
                                    </Col>
                                </Row>
                            </Container>

                            <Button variant="primary" type="submit">
                                Just Gonna Send It
                            </Button>

                        </Form>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CreatePostComponent;