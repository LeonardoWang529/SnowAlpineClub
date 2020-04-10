const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req,res) =>{
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Eroor:' + err));
});


router.route('/add').post((req, res)=>{
    const authorId = Number(req.body.authorId);
    const price = Number(req.body.price);
    const postTitle = req.body.postTitle;
    const postTag = req.body.postTag;
    const postCategories = req.body.postCategories;
    const postContent = req.body.postContent;
    const postImageId = Number(req.body.postImageId);
    const saleBuyFlag = req.body.saleBuyFlag;

    const postTime = new Date();

    const newPost = new Post({
        authorId, price, postTitle, postTag, postCategories, postContent, postImageId, postTime, saleBuyFlag
    });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error' + err));

});



module.exports = router;