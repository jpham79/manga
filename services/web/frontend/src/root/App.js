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
import Settings from '../view/settings/Settings.jsx';


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
  <Route key='settings' exact={true} path={ROUTES.settings} component={Settings} />
];

