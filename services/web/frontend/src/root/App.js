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
import MangaOverview from '../view/mangaOverview/MangaOverview.jsx';
import Reader from '../view/reader/Reader.jsx';


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
  chapterId: '/manga/:manganame/chapter/:chapternum',
  favorites: '/favorites',
  profile: '/profile',
  accountCreation: '/new-account',
  settings: '/settings',
  offlineLibrary: '/offline-library'
};

const routeList = [
  <Route key='home' exact={true} path={ROUTES.landing} component={Landing} />,
  <Route key='manga' exact={true} path={ROUTES.manganame} component={MangaOverview} />,
  <Route key='chapter' exact={true} path={ROUTES.chapterId} component={Reader} />,
];

/**
 * EXAMPLE GET REQUEST WITH AXIOS AND REDUX
 * You can only use listTest if your backend is running
 */

const listTest = () => {
  return dispatch => {
    dispatch(request('GET', 'ListTest'))
    return axios.get('/api/manga', {
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
const fetchChapter = chapterId => {
  let params = {
      chapterId
  }
  console.log('yeet');
  
  return dispatch => {
      dispatch(request('GET', 'MangaChapter', params ))
      return axios.get(`/api/manga/chapter/${chapterId}`)
          .then(response => {
              dispatch(reqSuccess('MangaChapter', response))
              dispatch(reqData('MangaChapter', response))
              // dispatch(selectChapter(response))
          })
          .catch(response => dispatch(reqFail('MangaChapter', response)))
  }
}
// store.dispatch(fetchChapter('5da42b12d7b142cfc693584a'));
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


