import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProblemList = ({ list, updateList }) => {
  const difficulty = {1: 'Easy', 2: 'Medium', 3: 'Hard'};
  function markAsSolved(id) {
    const date = new Date().toLocaleDateString()
    axios.put(`api/problems/${id}`, {date: date})
    .then((res) => {
      console.log(res)
      updateList(res);
    }).catch (err => {
      console.log(err)
    })
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Last time solved</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((p) => {
            return (
              <tr key={p.title}>
                <td>{p.number}</td>
                <td><a href={p.url} target="_blank">{p.title}</a></td>
                <td>{difficulty[p.difficulty]}</td>
                <td>{ p.lastTimeSolved}</td>
                <td><span onClick={()=> markAsSolved(p.number)}>Make as solved</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProblemList;