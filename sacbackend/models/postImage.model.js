const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postImageSchema = new Schema({
    ImageId:{type: Number, required: true, unique: true},
    PostId:{type: Number, required: true},
    PostImage1:{type: String},
    PostImage2:{type: String},
    PostImage3:{type: String},
    PostImage4:{type: String},
    PostImage5:{type: String},
});

const PostImage = mongoose.model("PostImage", postImageSchema);

module.exports = PostImage;
