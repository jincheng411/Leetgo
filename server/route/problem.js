const express = require('express');
const router = express.Router();
const axios = require('axios');
const leetcode = 'https://leetcode.com/api/problems/all'

const User = require('../models/user.js');

router.get('/getProblem/:id', function (req, res) {
  const {id} = req.params;
  axios.get(leetcode)
  .then(({data}) => {
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

module.exports = router;