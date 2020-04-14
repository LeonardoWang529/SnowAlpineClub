const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId:{type: Number, reuniqued:true},
    authoridId:{type: Number, reuniqued:true},
    commentTime:{type: Date, reuniqued:true},
    commentContent:{type: String, reuniqued:true},
},{
    timestamp: true,
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;