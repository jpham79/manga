import './side-nav.scss';

import React from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import { ROUTES } from '../../../root/App.js';

export class SideNav extends React.Component {

    menuEntries = [
        {type: 'item', name: 'Series', key: 'seriesLink', icon: 'book'},
        {type: 'item', name: 'Favorites', key: ROUTES.favorites, icon: 'star'},
        {type: 'item', name: 'Settings', key: ROUTES.settings, icon: 'cogs'},
        {type: 'item', name: 'Upload New Manga', key: '/upload/new-manga', icon: 'sitemap'}
    ];

    componentDidMount() {
        let sideNav = document.querySelector(".sidenav");
        M.Sidenav.init(sideNav, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return <ul id="slide-out" className="sidenav" key="sidenav">
                    <li key='hide-nav'>
                        <div className="sidenav-close">Hide Navagation</div>
                    </li>
                    {
                        this.menuEntries.map((entry) => {
                            if (entry.type === 'header') 
                               return   <li key={entry.key}>
                                            <div className="subheader">{entry.name}</div>
                                        </li>;
                            else 
                                return  <li key={entry.key}>
                                            <Link to={entry.key}>{entry.name}</Link>
                                        </li>;
                        })
                    }
                </ul>;
    }
}
