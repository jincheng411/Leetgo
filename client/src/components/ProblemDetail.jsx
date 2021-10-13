import React, { useState } from 'react';
import axios from 'axios';

const ProblemDetail = ({ problem, updateList, isExist }) => {
  const handleClick = (e) => {
    e.preventDefault()
    axios.post('/api/problems', problem)
      .then(res => {
        updateList(res)
      }).catch (err => {
        console.log(err)
      })
  }
  const difficulty = {1: 'Easy', 2: 'Medium', 3: 'Hard'}
  return (
    <div className="problem-detail">
      {problem &&
        <div>
          <div><p><span className="problem-detail-label">Problem ID: </span>{problem.question_id}</p> </div>
          <div><p><span className="problem-detail-label">Title: </span>{problem.question_title}</p> </div>
          <div><p><span className="problem-detail-label">Difficulty: </span><span className={difficulty[problem.difficulty]}>{difficulty[problem.difficulty]}</span></p> </div>
          <div><p><span className="problem-detail-label">URL: </span>{problem.url}</p> </div>
          <button onClick={handleClick}>Add to your list</button>
        </div>
      }
      {isExist &&
      <span className="warning">This problem already in the list</span>}
    </div>
  )
}

export default ProblemDetail;