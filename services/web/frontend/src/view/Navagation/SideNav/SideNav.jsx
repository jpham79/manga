import 'semantic-ui-css/semantic.min.css';
import './side-nav.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Sidebar } from 'semantic-ui-react';

import { toggleSidenav } from '../../../store/actions.js';

class Navagation extends React.Component {

    menuEntries = [
        {type: 'header', name: 'Navigation', key: 'navHeader'},
        {type: 'item', name: 'Series', key: 'seriesLink', icon: 'home'},
        {type: 'item', name: 'Favorites', key: 'favoriteLink', icon: 'home'},
        {type: 'item', name: 'Offline Library', key: 'offlineLink', icon: 'home'},
        {type: 'item', name: 'Settings', key: 'settingsLink', icon: 'home'},
        {type: 'header', name: 'Sources', key: 'sourceHeader', icon: 'home'},
        {type: 'item', name: 'Mangarock', key: 'sourceLink1', icon: 'home'}
    ];

    render() {
        const { visible, hideSidebar } = this.props;
        
        // return as array to get the Pusher on the parent to work properly
        return <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={hideSidebar}
                    vertical
                    visible={visible}
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

const mapStateToProps = (state) => ({
    visible: state.requests.isSidenavVisible
});
  
const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(toggleSidenav(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navagation);
