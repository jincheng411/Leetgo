import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSumbmit = (e) => {
    e.preventDefault();
    axios.post('/user/login', { username, password })
      .then((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSumbmit}>
        <label>
          User Name:
          <input name="username" value={username} onChange={e => setUsername(e.target.value)} />
          <label>
            Password:
            <input name="passord" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button>Login</button>
        </label>
      </form>
    </div>
  )
};

export default Login;