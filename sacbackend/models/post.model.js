const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    authorId:{type: Number, required: true},
    price:{type: Number, required: true},
    postTitle:{type: String, required: true},
    postTag:{type: String, required: true},
    postCategories:{type: String, required: true},
    postContent:{type: String, required: true},
    postTime:{type: Date},
    postImageId:{type: Number, required: true},
    saleBuyFlag:{type: Boolean, required: true},
},{
    timestamp: true,
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;