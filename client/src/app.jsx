import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import './App.css'
class App extends React.Component {
  render() {
    return (

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} /> */}
          </Switch>
        </div>

    )
  }
}

export default App;
