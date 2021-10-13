import React, { useState } from 'react';
import axios from 'axios';
import ProblemDetail from './ProblemDetail.jsx'

const NewProblem = ({ updateList, isExist }) => {
  const [number, setNumber] = useState('');
  const [problem, setProblem] = useState(null);
  const handleClick = (e) => {
    e.preventDefault()
    axios.get(`/api/problems/getProblem/${number}`)
      .then(({ data }) => {
        console.log(data)
        setProblem(data);
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="add-problem">
      <form>
        <label>
          Add A Problem:
          <div className="add-problem-input">
            <input name="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="Problem #" />
            <i className="fas fa-search" onClick={handleClick}></i>
          </div>
        </label>


      </form>
      <ProblemDetail problem={problem} updateList={updateList} isExist={isExist} />
    </div>
  )
}

export default NewProblem;
