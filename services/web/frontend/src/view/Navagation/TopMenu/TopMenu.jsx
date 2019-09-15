import 'semantic-ui-css/semantic.min.css';
import './top-menu.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Menu, Popup, Form, Input, Button } from 'semantic-ui-react';

import { ROUTES } from '../../../root/App.js'
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
                    <Menu.Item link>
                        Filter
                    </Menu.Item>
                    <Menu.Item link>
                        Download
                    </Menu.Item>
                    <Menu.Item link>
                        <Link to={ROUTES.favorites.path}>Favorites</Link>
                    </Menu.Item>
                    <Popup 
                        hoverable
                        position ='bottom right'
                        on='click'
                        trigger={ 
                            <Menu.Item>Login</Menu.Item>
                        }
                        >
                            <Popup.Content>
                                <Form>
                                    <Form.Field>
                                        <Input placeholder='Username' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input placeholder='Password' />
                                    </Form.Field>
                                    <Button type='submit'>Login</Button>
                                </Form>
                            </Popup.Content>
                    </Popup>
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
