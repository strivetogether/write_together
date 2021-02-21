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
  .populate('parentBlock')
    .then(idea => {
      // trying out whether you can give something a value instead of null
      // if (idea.parentBlock === null) {
      //   idea.parentBlock = 'noBlockFound'
      //   idea.parentBlock.title = '&nbsp;'
      // }
      // end of trying
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

// // get all specific user ideas >> before I populated the owner
// router.get('/userideas/:userid', (req, res) => {

//   Idea.find({owner: req.params.userid})
//     .then(idea => {
//       if (!idea ) {
//         res.status(404).json(idea);
//       } else {
//         res.status(200).json(idea);
//       }
//     })
//     .catch(err => {
//       res.json(err);
//     })
// })


// access one idea's details
router.get('/details/:ideaid', (req, res) => {
  Idea.findById(req.params.ideaid).populate('owner')
    .then(idea => {
      if (!idea) {
        res.status(404).json(ideas);
      } else {
        res.status(200).json(idea);
      }
    })
    .catch(err => {
      res.json(err);
    })
})

// toggle one idea's selected-status
router.put('/select', (req, res) => {
  console.log("this is the req.body console log from the api /select", req.body)
  Idea.findByIdAndUpdate(req.body._id, { selected: !req.body.selected}).then(idea => {
    console.log("/select", idea)
    res.status(201).json(idea)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })
})




// //delete an idea
// router.delete('/delete/:ideaid', (req, res, next) => {
//   Idea.findByIdAndDelete(req.params.ideaid)
//     .then(idea => {
//       res.status(200).json({ message: 'idea deleted' })
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });


//delete one idea 

router.delete('/delete/:ideaid', (req, res, next) => {
  Idea.findByIdAndDelete(req.params.ideaid)
    .then(idea => {
      res.status(200).json({ message: 'idea deleted' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;