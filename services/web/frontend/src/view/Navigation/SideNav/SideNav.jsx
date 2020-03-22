import './side-nav.scss';

import React from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import { ROUTES } from '../../../root/App.js';

export class SideNav extends React.Component {

    menuEntries = [
        {type: 'header', name: 'Navigation', key: 'navHeader'},
        {type: 'item', name: 'Series', key: 'seriesLink', icon: 'book'},
        {type: 'item', name: 'Favorites', key: ROUTES.favorites, icon: 'star'},
        {type: 'item', name: 'Offline Library', key: ROUTES.offlineLibrary, icon: 'folder open'},
        {type: 'item', name: 'Settings', key: ROUTES.settings, icon: 'cogs'},
        {type: 'header', name: 'Sources', key: 'sourceHeader'},
        {type: 'item', name: 'Mangarock', key: 'sourceLink1', icon: 'sitemap'}
    ];

    componentDidMount() {
        let sideNav = document.querySelector(".sidenav");
        M.Sidenav.init(sideNav, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return <ul id="slide-out" className="sidenav">
                    <li>
                        <div class="sidenav-close">Hide Navagation</div>
                    </li>
                    {
                        this.menuEntries.map((entry) => {
                            if (entry.type === 'header') 
                               return   <li>
                                            <div className="subheader" key ={entry.key}>{entry.name}</div>
                                        </li>;
                            else 
                                return  <li>
                                            <Link to={entry.key}><span>{entry.name}</span></Link>
                                        </li>;
                        })
                    }
                </ul>;
    }
}
