import React, { useState } from 'react';
import axios from 'axios';
import ProblemDetail from './ProblemDetail.jsx'

const NewProblem = ({updateList, isExist}) => {
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
    <div>
      <div>Add a problem</div>
      <form>
        <label>
          Problem Number:
          <input name="number" value={number} onChange={e => setNumber(e.target.value)}/>
        </label>
        <button onClick={handleClick}>Look up</button>
      </form>
      <ProblemDetail problem={problem} updateList={updateList} isExist={isExist}/>
    </div>
  )
}

export default NewProblem;
