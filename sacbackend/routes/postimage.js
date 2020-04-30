const router = require('express').Router();
let Postimage = require('../models/postimage.model');



//api/posts/getAll	GET
router.get('/', function(req, res) {
    Postimage.find()
        .then(posts => {
            res.json(posts);
            console.log(posts);
        })
        .catch(err => res.status(400).json('Eroor:' + err));
});

//api/postImage/getPostImage		Get
router.get('/:postImageId', (req,res) => {
    Postimage.findById(req.params.postImageId,(err, postImage)=> {
        if (err) return handleError(err);
        return res.status(200).send(postImage);
    });
});

//api/postImage/create		Post		Comment
router.post('/create', (req,res) => {
    const newPostImage = new Postimage(req.body);
    newPostImage.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newPostImage);
    });
});

//api/postImage/deleteAll		Delete		Comment:id
router.delete('/delete/:postImageId', (req,res) => {
    Postimage.findByIdAndRemove(req.params.postImageId,
        (err)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).send('Images removed!');
        })
});

//api/comment/update		Put		Post:id
router.put('/update/:postImageId', (req,res) => {
    Comment.findByIdAndUpdate(req.params.postImageId, req.body,{new: true},
        (err, postImage)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).send(postImage);
        })
});

module.exports = router;