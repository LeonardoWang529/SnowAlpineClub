const router = require('express').Router();
let Comment = require('../models/comment.model');

//api/comment/getComments		Get
router.get('/:postId', (req,res) => {

    Comment.find({postId: req.params.postId},(err,comments)=> {
        if (err) return res.status(500).send(err);
        return res.status(200).send(comments);
    });
});

//api/comment/create		Post		Comment
router.post('/create', (req,res) => {
    console.log(req.body);
    const newComment = new Comment(req.body);
    newComment.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newComment);
    });
});


//api/comment/delete		Delete		Comment:id
router.delete('/delete/:commentId', (req,res) => {
    Comment.findByIdAndRemove(req.params.commentId,
        (err)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).send('Comment removed!');
        })
});

//api/comment/update		Put		Post:id
router.put('/update/:commentId', (req,res) => {
    Comment.findByIdAndUpdate(req.params.commentId, req.body,{new: true},
        (err, comment)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).send(comment);
        })
});

module.exports = router;