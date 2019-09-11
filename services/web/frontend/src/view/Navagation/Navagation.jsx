import 'semantic-ui-css/semantic.min.css';
import './navagation.scss';

import React from 'react';
import { Header, Icon,  Menu, Sidebar } from 'semantic-ui-react';

export class Navagation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeItem: 'Navigation', visible: false  };

        this.showSidebar = this.showSidebar.bind(this);
        this.hideSidebar = this.hideSidebar.bind(this);
    }

    menuEntries = [
        {type: 'header', name: 'Navigation'},
        {type: 'item', name: 'Series', icon: 'home'},
        {type: 'item', name: 'Favorites', icon: 'home'},
        {type: 'item', name: 'Offline Library', icon: 'home'},
        {type: 'item', name: 'Settings', icon: 'home'},
        {type: 'header', name: 'Sources', icon: 'home'},
        {type: 'item', name: 'Mangarock', icon: 'home'}
    ];

    showSidebar() {
        this.setState({visible: true});
    }
    
    hideSidebar() {
        this.setState({visible: false});
    }

    handleItemClick(e, { name }) { 
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem, visible } = this.state;
        
        // return as array to get the Pusher on the parent to work properly
        return [
                <Menu inverted>
                    <Menu.Item onClick={this.showSidebar}>Show Navagation</Menu.Item>
                </Menu>,
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='wide'>
                    <Menu.Item onClick={this.hideSidebar}>Hide Navagation</Menu.Item>
                    {
                        this.menuEntries.map((entry) => {
                            if (entry.type === 'header') 
                             return <Header as="h2"color='blue'>{entry.name}</Header>;
                            else 
                                return (
                                    <Menu.Item
                                        active={activeItem === entry.name}
                                        onClick={this.handleItemClick}>
                                        <Icon name={entry.icon}/>
                                        <span className="menu-label">{entry.name}</span>
                                    </Menu.Item>
                                );
                        })
                    }
                </Sidebar>];
    }
}

