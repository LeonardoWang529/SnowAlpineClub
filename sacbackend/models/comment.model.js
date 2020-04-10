const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentId:{type: Number, reuniqued:true, unique:true},
    postId:{type: Number, reuniqued:true, unique:true},
    authoridId:{type: Number, reuniqued:true, unique:true},
    commentTime:{type: Date, reuniqued:true, unique:true},
    commentContent:{type: String, reuniqued:true, unique:true},
},{
    timestamp: true,
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;