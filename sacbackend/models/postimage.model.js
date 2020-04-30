const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postimageSchema = new Schema({
    postImage1:{type: String},
    postImage2:{type: String},
    postImage3:{type: String},
    postImage4:{type: String},
    postImage5:{type: String},
    postImage6:{type: String},
});

const PostImage = mongoose.model("PostImage", postimageSchema);

module.exports = PostImage;
