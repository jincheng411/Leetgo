import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSumbmit = (e) => {
    e.preventDefault();
    axios.post('/user/signup', { username, email, password })
      .then((res) => {
          console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSumbmit}>
        <label>
          User Name:
          <input name="username" value={username} onChange={e => setUsername(e.target.value)} />
          <label>
            Email:
            <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input name="passord" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button>Sign Up</button>
        </label>
      </form>
    </div>
  )
};

export default Signup;