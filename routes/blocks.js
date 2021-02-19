const express = require('express');
const router = express.Router();
const Block = require('../models/Block');
const User = require('../models/User');
const Idea = require('../models/Idea');

// get all blocks
router.get('/', (req, res, next) => {
    Block.find()
        .populate({
            path: 'ideas',
            populate: { path: 'owner' }
        })
        .then((blocks) => {
            res.status(200).json(blocks);
        })
        .catch((err) => {
            res.json(err);
        });
});

// create a block
router.post('/', (req, res) => {
    const { title, text, question } = req.body;
    const owner = req.user._id;
    const ideas = [];
    // const owner = req.user._id;
    Block.create({
        title,
        text,
        question,
        owner,
        ideas
    })
        .then((block) => {
            console.log('CONSOLE LOG:', req.user.blocks, block._id);
            User.findByIdAndUpdate(
                owner,
                { $push: { blocks: block._id } },
                { new: true }
            ).then((user) => {
                res.status(201).json({ user, block });
            });
        })
        .catch((err) => {
            console.log('ERROR', err);
            res.json(err);
        });
});

// access one block's details
router.get('/details/:blockid', (req, res) => {
    Block.findById(req.params.blockid)
        .populate({
            path: 'ideas',
            populate: { path: 'owner' }
        })
        .then((block) => {
            if (!block) {
                res.status(404).json(block);
            } else {
                res.status(200).json(block);
            }
        })
        .catch((err) => {
            console.log('Error from API: details/block :id', err);
            res.json(err);
        });
});

// get all specific user blocks
router.get('/userblocks/:userid', (req, res) => {
    Block.find({ owner: req.params.userid })
        .then((block) => {
            if (!block) {
                res.status(404).json(block);
            } else {
                res.status(200).json(block);
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

//update block
router.put('/:blockid/editblock', (req, res, next) => {
    const { title, text, question } = req.body;
    Block.findByIdAndUpdate(
        req.params.blockid,
        { title, text, question },
        // this ensures that we are getting the updated document as a return
        { new: true }
    )
        .then((block) => {
            console.log(block);
            res.status(200).json(block);
        })
        .catch((err) => {
            res.json(err);
        });
});

// delete block
router.delete('/delete/:id', (req, res, next) => {
    Block.findByIdAndDelete(req.params.id)
        .then((block) => {
            res.status(200).json({ message: 'Block deleted' });
        })
        .catch((err) => {
            res.json(err);
        });
});

//find user's username through their ID
router.get('/dashboard/:userid', (req, res) => {
    User.findById(req.params.userid)
        .then((username) => {
            res.status(200).json(username);
        })
        .catch((err) => {
            res.json(err);
        });
});

///////

// create an idea and attach it to a specific block
router.post('/details/:blockid/addidea', (req, res) => {
    const { text } = req.body;
    const owner = req.user._id;
    const parentBlock = req.params.blockid;
    const comments = [];
    const selected = false;
    Idea.create({
        text,
        owner,
        parentBlock,
        comments,
        selected
    })
        .then((idea) => {
            Block.findByIdAndUpdate(
                parentBlock,
                { $push: { ideas: idea._id } },
                { new: true }
            ) // add idea to block
                .then((block) => {
                    User.findByIdAndUpdate(
                        block.owner,
                        { $push: { ideas: idea._id } },
                        { new: true }
                    ) // add idea's id to owner
                        .then((user) => {
                            res.status(201).json({ idea });
                        });
                });
        })
        .catch((err) => {
            console.log('ERROR', err);
            res.json(err);
        });
});

module.exports = router;
