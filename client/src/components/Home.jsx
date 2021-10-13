import React, { useState, useEffect } from 'react';
import NewProblem from './NewProblem.jsx';
import ProblemList from './ProblemList.jsx';
import axios from 'axios';

const Home = () => {
  const [list, setList] = useState([]);
  const [isExist, setIsExist] = useState(false);
  useEffect(() => {
    axios.get('/api/problems')
    .then(({data}) => {
      setList(data)
    })
  }, [setList])
  const updateList = (list) => {
    if (typeof list.data !== 'string') {
      setList(list.data)
    } else {
      setIsExist(true);
      setTimeout(() => {
        setIsExist(false);
      }, 2000)
    }
  }
  return (
    <div>
      <h1>Letscode</h1>
      <NewProblem updateList={updateList} isExist={isExist}/>
      <ProblemList list={list} updateList={updateList}/>
    </div>
  )
}

export default Home;
