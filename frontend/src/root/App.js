import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import store from '../store/store'
import { Hello } from '../view/Hello.jsx'
import { request } from '../store/actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Hello} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

store.dispatch(request('GET', 'Yeet', {yote: 'skeet'}))
