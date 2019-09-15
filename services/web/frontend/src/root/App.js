import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import store from '../store/store'
import { Landing } from '../view/landing/Landing.jsx'
import { request, reqSuccess, reqFail } from '../store/actions'
import axios from 'axios'
import {reqData} from '../store/actions'
import './App.css';

import { Sidebar } from 'semantic-ui-react';
import  SideNav  from '../view/Navagation/SideNav/SideNav.jsx';
import  TopMenu  from '../view/Navagation/TopMenu/TopMenu.jsx';


class App extends Component {

  generateRoutes() {
    let routes = [];

    for (let key in ROUTES) {
      routes.push(<Route key={ROUTES[key].path} exact={ROUTES[key].useExactPath} path={ROUTES[key].path} component={ROUTES[key].component} />);
    }

    return routes;
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Provider store={store}>
            <Sidebar.Pushable>
              <TopMenu/>
              <SideNav/>
                <Switch>
                  <Sidebar.Pusher>
                      {
                        this.generateRoutes()
                      }
                  </Sidebar.Pusher>
                </Switch>
            </Sidebar.Pushable>
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
  landing: createRoute('/', Landing, true),
  favorites: createRoute('/favorites', Landing),
  profile: createRoute('/profile', Landing),
  accountCreation: createRoute('/new-account', Landing),
  settings: createRoute('/settings', Landing) ,
  offlineLibrary: createRoute('/offline-library', Landing)
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

