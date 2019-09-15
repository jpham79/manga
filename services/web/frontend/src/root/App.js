import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from '../store/store';
import { request, reqSuccess, reqFail } from '../store/actions'
import axios from 'axios'
import {reqData} from '../store/actions'
import './App.css';

import  SideNav  from '../view/Navagation/SideNav/SideNav.jsx';
import  TopMenu  from '../view/Navagation/TopMenu/TopMenu.jsx';
import Home from '../view/landing/home/Home.jsx';


class App extends Component {

  generateRoutes() {
    let routes = [];

    for (let key in ROUTES) {
      let Component = ROUTES[key].component;
      routes.push(<Route key={ROUTES[key].path} exact={ROUTES[key].useExactPath} path={ROUTES[key].path} render={(props) => <Component {...props}/>} />);
    }

    return routes;
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Provider store={store}>
            <TopMenu/>
            <SideNav/>
            <Switch>
              { this.generateRoutes() }
            </Switch>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;

function createRoute(path, component, useExactPath = false) {
  return {
    path, 
    useExactPath,
    component
  }
}

export const ROUTES = {
  landing: createRoute('/', Home, true),
  favorites: createRoute('/favorites', Home),
  profile: createRoute('/profile', Home),
  accountCreation: createRoute('/new-account', Home),
  settings: createRoute('/settings', Home) ,
  offlineLibrary: createRoute('/offline-library', Home)
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

