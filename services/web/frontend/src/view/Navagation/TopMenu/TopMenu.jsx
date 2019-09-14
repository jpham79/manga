import 'semantic-ui-css/semantic.min.css';
import './top-menu.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { toggleSidenav } from '../../../store/actions.js';

class TopMenu extends React.Component {

    handleItemClick(e, { name }) { 
        //send redirect
    }

    render() {
        const { showSidebar } = this.props;
        
        // return as array to get the Pusher on the parent to work properly
        return <Menu inverted>
                    <Menu.Item onClick={showSidebar}>Show Navagation</Menu.Item>
                    <Menu.Item position='right'>Search</Menu.Item>
                    <Menu.Item>Filter</Menu.Item>
                    <Menu.Item>Download</Menu.Item>
                    <Menu.Item>Favorite</Menu.Item>
                    <Menu.Item>Login</Menu.Item>
                </Menu>;
    }
}

const mapStateToProps = (state) => ({
    visible: state.requests.isSidenavVisible
});
  
const mapDispatchToProps = (dispatch) => ({
    showSidebar: () => dispatch(toggleSidenav(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
