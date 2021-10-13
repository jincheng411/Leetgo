import React, { useState } from 'react';
import axios from 'axios';

const ProblemDetail = ({ problem }) => {
  const handleClick = (e) => {
    e.preventDefault()
    axios.post('/api/problems', problem)
      .then(res => {
        console.log(res)
      }).catch (err => {
        console.log(err)
      })
  }
  const difficulty = {1: 'Easy', 2: 'Medium', 3: 'Hard'}
  return (
    <div>
      {problem &&
        <div>
          <div><p><span>Problem ID: </span>{problem.question_id}</p> </div>
          <div><p><span>Title: </span>{problem.question_title}</p> </div>
          <div><p><span>Difficulty: </span>{difficulty[problem.difficulty]}</p> </div>
          <div><p><span>URL: </span>{problem.url}</p> </div>
        </div>

      }
      <button onClick={handleClick}>Add to your list</button>
    </div>
  )
}

export default ProblemDetail;