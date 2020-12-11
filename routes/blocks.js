const express = require('express');
const router = express.Router();
const Block = require('../models/Block');



// get all blocks 
router.get('/', (req, res, next) => {
  Block.find()
    .then(blocks => {
      res.status(200).json(blocks);
    })
    .catch(err => {
      res.json(err);
    })

});

// create a block
router.post('/', (req, res) => {
  const { title, text } = req.body;
  const owner = req.user._id;
  const tasks = [];
  // const owner = req.user._id;
  Block.create({
    title,
    text,
    owner,
    ideas,
  })
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.json(err);
    })
})

// access one block's details
router.get('/:id', (req, res) => {
  Block.findById(req.params.id)
    .then(block => {
      if (!block) {
        res.status(404).json(block);
      } else {
        res.status(200).json(block);
      }
    })
    .catch(err => {
      res.json(err);
    })
})

// get all specific user blocks
router.get('/blocks/:userid/', (req, res) => {
  Block.find({owner: req.params.id})
    .then(block => {
      if (!block) {
        res.status(404).json(block);
      } else {
        res.status(200).json(block);
      }
    })
    .catch(err => {
      res.json(err);
    })
})

// delete block
router.post('blocks/delete/:id', (req, res, next) => {
  Block.findByIdAndDelete(req.params.id)
    .then(block => {
      res.status(200).json({ message: 'Block deleted' })
    })
    .catch(err => {
      res.json(err);
    })
});






module.exports = router;