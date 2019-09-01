import 'semantic-ui-css/semantic.min.css';
import './side-nav.scss';

import React from 'react';
import {   Button, Header, Icon,  Menu, Sidebar } from 'semantic-ui-react';

export class SideNav extends React.Component {
    state = { activeItem: 'bio', visible: true  };

    menuEntries = [
        {type: 'header', name: 'Navigation'},
        {type: 'item', name: 'Series', icon: 'home'},
        {type: 'item', name: 'Favorites', icon: 'home'},
        {type: 'item', name: 'Offline Library', icon: 'home'},
        {type: 'item', name: 'Settings', icon: 'home'},
        {type: 'header', name: 'Sources', icon: 'home'},
        {type: 'item', name: 'Mangarock', icon: 'home'}
    ];

    handleHideClick = () => this.setState({ visible: false });
    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem, visible } = this.state;

        return (
            <div className="side-nav">
                <Button.Group>
                    <Button disabled={visible} onClick={this.handleShowClick}>
                        Show sidebar
                    </Button>
                    <Button disabled={!visible} onClick={this.handleHideClick}>
                        Hide sidebar
                    </Button>
                </Button.Group>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='wide'>
                    {
                        this.menuEntries.map((entry) => {
                            if (entry.type === 'header') 
                             return <Header as="h2">{entry.name}</Header>;
                            else 
                                return (
                                    <Menu.Item
                                        active={activeItem === entry.name}
                                        onClick={this.handleItemClick}>
                                        <Icon name={entry.icon} className="menu-icon"/>
                                        <span className="menu-label">{entry.name}</span>
                                    </Menu.Item>
                                );
                        })
                    }
                </Sidebar>
            </div>
        )
    }
}

