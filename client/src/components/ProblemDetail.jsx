import React, { useState } from 'react';
import axios from 'axios';

const ProblemDetail = () => {
  const handleClick = (e) => {
    e.preventDefault()

  }
  return (
    <div>
      <button onClick={handleClick}>Add to your list</button>
    </div>
  )
}

export default ProblemDetail;