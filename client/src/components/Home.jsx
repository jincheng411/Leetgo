import React, { useState, useEffect } from 'react';
import NewProblem from './NewProblem.jsx';
import ProblemList from './ProblemList.jsx';
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h1>Letscode</h1>
      <NewProblem />
      <ProblemList />
    </div>
  )
}

export default Home;
