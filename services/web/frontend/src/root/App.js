import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import store from '../store/store';
import { request, reqSuccess, reqFail } from '../store/actions'
import axios from 'axios'
import {reqData} from '../store/actions'
import './App.css';

// import  getNavMenus  from '../view/Navigation/Navagation.jsx.js';
import Landing from '../view/landing/Landing.jsx';

import Navigation from '../view/Navigation/Navigation.jsx';


class App extends Component {

  generateComponent(wrapper) {
    let Component = wrapper();

    return <Component/>;
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Provider store={store}>
            <Navigation />
            <Switch>
              <Landing />
            </Switch>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;



export const ROUTES = {
  landing: '/',
  favorites: '/favorites',
  profile: '/profile',
  accountCreation: '/new-account',
  settings: '/settings',
  offlineLibrary: '/offline-library'
};


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

