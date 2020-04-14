const router = require('express').Router();
let Post = require('../models/post.model');


// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});*/


//api/posts/getAll	GET
router.get('/', function(req, res) {
    Post.find()
        .then(posts => {
            res.json(posts);
            console.log(posts);
        })
        .catch(err => res.status(400).json('Eroor:' + err));
});


//api/posts/findbyUserId		Get		Post:userId
router.get('/findbyuser/:userId', function(req, res) {
    Post.find({ authorId: req.params.userId}, (err, posts) => {
        if (err) return handleError(err);
        console.log(posts);
        return res.status(200).send(posts);
    })
});



//api/posts/findbyTag		Get		Post:tag
router.get('/findbytag/:tag', function(req, res) {
    Post.find({ postTag: req.params.tag}, (err, posts) => {
        if (err) return handleError(err);
        console.log(posts);
        return res.status(200).send(posts);
    })
});

//api/posts/findbyCategory		Get		Post:Category
router.get('/findbycategory/:category', function(req, res) {
    Post.find({ postCategories: req.params.category}, (err, posts) => {
        if (err) return handleError(err);
        console.log(posts);
        return res.status(200).send(posts);
    })
});


//api/posts/create	POST
router.post('/add', (req, res) => {

/*    Post.create(newPost,(err) => {
        if (err) return handleError(err);
        console.log(posts);
        return res.status(200).send(posts);
    });*/

/*    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error' + err));*/

    const newPost = new Post(req.body);

    newPost.save( (err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newPost);
    });
});

//api/posts/delete	Delete		Post:Id
router.delete('/delete/:postId' , (req, res)=>{
    Post.findByIdAndRemove(req.params.postId,
        (err)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).send('Post removed!');
    })

});

//api/posts/update		Update		Post
router.put('/update/:postId' , (req, res)=>{
    Post.findByIdAndUpdate(req.params.postId,req.body,{new: true},
        (err, post) => {
        if (err) return res.status(500).send(err);
        return res.send(post);
    });
});



//api/posts/updateImage		Update	Post:postImagesId





module.exports = router;