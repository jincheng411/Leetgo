import React, { useState, useEffect } from 'react';
import NewProblem from './NewProblem.jsx';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('/user').then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  })
  return (
      <div>
        <h1>Letscode</h1>
        <div>Add a problem</div>
        <NewProblem />
      </div>
  )
}

export default Home;
