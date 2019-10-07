import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from '../store/store';
import { request, reqSuccess, reqFail } from '../store/actions'
import axios from 'axios'
import {reqData} from '../store/actions'
import './App.scss';

// import  getNavMenus  from '../view/Navigation/Navagation.jsx.js';
import Landing from '../view/landing/Landing.jsx';

import Navigation from '../view/Navigation/Navigation.jsx';
import MangaOverview from '../view/mangaOverview/MangaOverview';


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
              <div className="enableScroll">
                <Switch>
                  {routeList}
                </Switch>
              </div>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;



export const ROUTES = {
  landing: '/',
  manganame: '/manga/:manganame',
  favorites: '/favorites',
  profile: '/profile',
  accountCreation: '/new-account',
  settings: '/settings',
  offlineLibrary: '/offline-library'
};

const routeList = [
  <Route key='home' exact={true} path={ROUTES.landing} component={Landing} />,
  <Route exact={true} path={ROUTES.manganame} component={MangaOverview} />
];

/**
 * EXAMPLE GET REQUEST WITH AXIOS AND REDUX
 * You can only use listTest if your backend is running
 */

const listTest = () => {
  return dispatch => {
    dispatch(request('GET', 'ListTest'))
    return axios.get('http://localhost:5000/api/manga', {
      params: {
        genres: ['adult', 'shounen']
      }
    })
    .then(response => {
      dispatch(reqSuccess('ListTest', response))
      dispatch(reqData('ListTest', response))
    })
    .catch(response => dispatch(reqFail('ListTest', response)))
  }
}
// store.dispatch(listTest())

// const httpTest = () => {
//   return dispatch => {
//     dispatch(request('GET', 'GetTest'))
//     return axios.get('https://httpbin.org/get')
//     .then(response => {
//       dispatch(reqSuccess('GetTest', response))
//       dispatch(reqData('GetTest', response))
//     })
//     .catch(response => dispatch(reqFail('GetTest', response)))
//   }
// }
// store.dispatch(httpTest())


