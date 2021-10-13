import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

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
  const getDay = (date, freq) => {
    var day = new Date(date).getDate();
    var month = new Date(date).getMonth();
    var yesterday = day + month * 30;
    var todayDate = new Date().getDate();
    var todayMonth = new Date().getMonth();
    var today = todayDate + todayMonth * 30;
    var due = yesterday + freq * 4
    return due - today > 0 ? due - today : 0;
  }
  let date = getDay('10/13/2021', 1);
  console.log(date)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Last time solved</th>
            <th>Due in</th>
            <th>Frequency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((p) => {
            return (
              <tr key={p.title}>
                <td>{p.number}</td>
                <td><a href={p.url} target="_blank">{p.title}</a></td>
                <td><span className={difficulty[p.difficulty]}>{difficulty[p.difficulty]}</span></td>
                <td>{p.lastTimeSolved}</td>
                <td>{getDay(p.lastTimeSolved, p.freq || 1)} days</td>
                <td>{p.freq || 0}</td>
                <td><span className="action" onClick={()=> markAsSolved(p.number)}>Mark as solved</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProblemList;