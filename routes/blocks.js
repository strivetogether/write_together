const express = require('express');
const router = express.Router();
const Block = require('../models/Block');

// create a project
router.post('/', (req, res) => {
  const { title, text } = req.body;
  // const owner = req.user._id;
  Block.create({
    title,
    text,
    // owner
  })
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;