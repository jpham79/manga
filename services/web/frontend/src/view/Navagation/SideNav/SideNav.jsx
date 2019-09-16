import 'semantic-ui-css/semantic.min.css';
import './side-nav.scss';

import React from 'react';
import { Header, Icon, Menu, Sidebar } from 'semantic-ui-react';

import wrapper from '../../landing/Landing.jsx';

class Navagation extends React.Component {

    menuEntries = [
        {type: 'header', name: 'Navigation', key: 'navHeader'},
        {type: 'item', name: 'Series', key: 'seriesLink', icon: 'book'},
        {type: 'item', name: 'Favorites', key: 'favoriteLink', icon: 'star'},
        {type: 'item', name: 'Offline Library', key: 'offlineLink', icon: 'folder open'},
        {type: 'item', name: 'Settings', key: 'settingsLink', icon: 'cogs'},
        {type: 'header', name: 'Sources', key: 'sourceHeader'},
        {type: 'item', name: 'Mangarock', key: 'sourceLink1', icon: 'sitemap'}
    ];

    render() {
        const { isSidebarVisible, hideSidebar } = this.props;
        
        // return as array to get the Pusher on the parent to work properly
        return <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={hideSidebar}
                    vertical
                    visible={isSidebarVisible}
                    width='wide'>
                    <Menu.Item onClick={hideSidebar}>Hide Navagation</Menu.Item>
                    {
                        this.menuEntries.map((entry) => {
                            if (entry.type === 'header') 
                             return <Header as="h2"color='blue' key ={entry.key}>{entry.name}</Header>;
                            else 
                                return (
                                    <Menu.Item
                                        link
                                        key={entry.key}>
                                        <Icon name={entry.icon}/>
                                        <span className="menu-label">{entry.name}</span>
                                    </Menu.Item>
                                );
                        })
                    }
                </Sidebar>;
    }
}

export default wrapper(Navagation);
