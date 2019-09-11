import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import store from '../store/store'
import { Landing } from '../view/landing/Landing.jsx'
import { request, reqSuccess, reqFail } from '../store/actions'
import axios from 'axios'
import {reqData} from '../store/actions'
import './App.css';

import { Sidebar } from 'semantic-ui-react';
import { Navagation } from '../view/Navagation/Navagation.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Sidebar.Pushable>
          <Navagation/>
          <Sidebar.Pusher>
            <Provider store={store}>
              <Router>
                <Switch>
                  <Route path="/" component={Landing} />
                </Switch>
              </Router>
            </Provider>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;

const httpTest = () => {
  return dispatch => {
    dispatch(request('GET', 'GetTest'))
    return axios.get('https://httpbin.org/get')
    .then(response => {
      dispatch(reqSuccess('GetTest', response))
      dispatch(reqData('GetTest', response))
    })
    .catch(response => dispatch(reqFail('GetTest', response)))
  }
}
store.dispatch(httpTest())

