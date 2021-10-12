import React, { useState } from 'react';
import axios from 'axios';
import ProblemDetail from './ProblemDetail.jsx'

const NewProblem = () => {
  const [number, setNumber] = useState('');
  const handleClick = (e) => {
    e.preventDefault()
    axios.get(`/api/problem/getProblem/${number}`)
    .then(({data}) => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <form>
        <label>
          Problem Number:
          <input name="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        </label>
        <button onClick={handleClick}>Look up</button>
      </form>
      <ProblemDetail />
    </div>
  )
}

export default NewProblem;
