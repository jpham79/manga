import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from '../store/store';
import './App.scss';

import Landing from '../view/landing/Landing.jsx';

import Navigation from '../view/Navigation/Navigation.jsx';
import MangaOverview from '../view/mangaOverview/MangaOverview.jsx';
import Reader from '../view/reader/Reader.jsx';
import Settings from '../view/settings/Settings.jsx';
import Browse from '../view/browse/Browse.jsx';
import Upload from '../view/upload/Upload.jsx';


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
  browse: '/browse',
  upload: '/upload/:manganame'
};

const routeList = [
  <Route key='home' exact={true} path={ROUTES.landing} component={Landing} />,
  <Route key='manga' exact={true} path={ROUTES.manganame} component={MangaOverview} />,
  <Route key='chapter' exact={true} path={ROUTES.chapterId} component={Reader} />,
  <Route key='settings' exact={true} path={ROUTES.settings} component={Settings} />,
  <Route key='browse' exact={true} path={ROUTES.browse} component={Browse} />,
  <Route key='upload' exact={true} path={ROUTES.upload} component={Upload} />
];

