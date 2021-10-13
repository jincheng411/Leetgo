const express = require('express');
const router = express.Router();
const axios = require('axios');

const User = require('../models/user.js');
const Problem = require('../models/problem.js');
const leetcode = 'https://leetcode.com/api/problems/all'
router.get('/getProblem/:id', function (req, res) {
  const { id } = req.params;
  axios.get(leetcode)
    .then(({ data }) => {
      const problem = data.stat_status_pairs.filter((p) => {
        return (p.stat.question_id === Number(id))
      })
      const result = {
        question_id: problem[0].stat.question_id,
        question_title: problem[0].stat.question__title,
        difficulty: problem[0].difficulty.level,
        url: `https://leetcode.com/problems/${problem[0].stat.question__title_slug}`
      }
      res.json(result)
    }).catch(err => {
      console.log(err);
    })
});
router.post('/', async function (req, res) {
  const obj = {
    title: req.body.question_title,
    number: req.body.question_id,
    url: req.body.url,
    difficulty: req.body.difficulty
  };
  const user = await User.findOne()
  console.log(obj.number)
  const problem = await User.find({ "problems.number": obj.number })
  if (problem.length > 0) {
    res.send('problem already in the list');
  } else {
    User.findByIdAndUpdate(user.id,
      { $push: { problems: obj } })
      .then((data) => {
        User.findOne()
          .then(user => {
            res.json(user.problems)
          })
      }).catch(err => {
        console.log(err)
      })
  }
})
router.get('/', async function (req, res) {
  const user = await User.findOne();
  res.json(user.problems)
});

router.put('/:id', async (req, res) => {
  const user = await User.findOne();
  const { id } = req.params;
  const date = req.body.date
  User.updateOne({ 'id': user.id, 'problems.number': Number(id) }, {
    '$set': {
      'problems.$.lastTimeSolved': date
    }
  }).then(async (data) => {
    const user = await User.findOne();
    res.json(user.problems)
  }).catch(err => {
    console.log(err)
  })
  // User.findByIdAndUpdate(user.id)
})

module.exports = router;