const express = require('express');
const router = express.Router();
const Block = require('../models/Block');
const User = require('../models/User');
const Idea = require('../models/Idea');



// get all ideas
router.get('/allideas', (req, res, next) => {
  Idea.find()
    .then(ideas => {
      res.status(200).json(ideas);
    })
    .catch(err => {
      res.json(err);
    })

});

// get all specific user ideas
router.get('/userideas/:userid', (req, res) => {

  Idea.find({owner: req.params.userid})
    .then(idea => {
      if (!idea ) {
        res.status(404).json(idea);
      } else {
        res.status(200).json(idea);
      }
    })
    .catch(err => {
      res.json(err);
    })
})




module.exports = router;