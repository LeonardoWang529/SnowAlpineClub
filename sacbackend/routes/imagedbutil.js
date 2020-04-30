const express = require("express");
const router = express.Router();
let PostImage = require('../models/postimage.model');

/*
Multer is a NodeJS middleware which facilitates file uploads.
GridFsStorage is GridFS storage engine for Multer to store uploaded files directly to MongoDB.
Crypto and Path will be used to create unique name for the file uploaded.
*/
const crypto = require("crypto");
const path = require("path");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const mongoose = require("mongoose");

//Mongo setup
const uri = process.env.ATLAS_URI;
//Init gfs
let gfs;

const conn = mongoose.connection;

conn.once("open", () => {
    // init stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads"
    });
});

// Storage
const storage = new GridFsStorage({
    url: uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString("hex") + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage
});

//upload single file should be called from user create.
router.post("/upload", upload.single("image"), (req,res) => {
    //return res.file.filename;
    const newPostImage = new PostImage({PostImage1:req.file.filename});
    newPostImage.save(err => {
        if (err) {return res.status(500).send(err)};
        return res.status(200).send(newPostImage);
    });

});

//upload multi files
router.post("/uploads/:postId", upload.array("postphotos",5), (req, res) => {
    //create postImage object
    const newPostImage = new PostImage(req.params.postId,
        res.file.filename,res.file.filename,res.file.filename,res.file.filename,res.file.filename);
    newPostImage.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newPostImage);
    });
    //
});

router.get("/image/:filename", (req, res) => {
    // console.log('id', req.params.id)
    const file = gfs.find({
            filename: req.params.filename
        }).toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: "no files exist"
                });
            }
            gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        });
});



// files/del/:id
// Delete chunks from the db
router.post("/files/del/:id", (req, res) => {
    gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) return res.status(404).json({ err: err.message });
        res.redirect("/");
    });
});

module.exports = router;