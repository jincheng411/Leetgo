import React from 'react';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
class App extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    )
  }
}

export default App;
