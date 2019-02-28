import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Signup from "../ui/signup/Signup.js";
import Test from "../ui/test/Test.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signup}/>
          <Route path="/test" component={Test}/>
        </Switch>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <Signup/>
      //   </header>
      // </div>
    );
  }
}

export default App;
