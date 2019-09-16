import 'semantic-ui-css/semantic.min.css';
import './top-menu.scss';

import React from 'react';
import { Link } from "react-router-dom"
import { Menu, Popup, Form, Input, Button } from 'semantic-ui-react';

import { ROUTES } from '../../../root/App.js'
import wrapper from '../../landing/Landing.jsx';

class TopMenu extends React.Component {

    handleItemClick(e, { name }) { 
        //send redirect
    }

    render() {
        const { showSidebar } = this.props;

        // return as array to get the Pusher on the parent to work properly
        return <Menu inverted className='top-menu'>
                    <Menu.Item onClick={showSidebar}>Show Navagation</Menu.Item>
                    <Menu.Item position='right'><Input icon='search' placeholder='Search' iconPosition='left'/></Menu.Item>
                    <Popup 
                        hoverable
                        position ='bottom right'
                        on='click'
                        className='top-menu filter'
                        trigger={ 
                            <Menu.Item>Filter</Menu.Item>
                        }
                        >
                            {/* popup is rendered outside of component */}
                            <Popup.Content className='body'>
                                <Form>
                                    <Form.Field>
                                        <label>Tags</label>
                                        <Form.Checkbox label='Isekai' />
                                        <Form.Checkbox label='Action' />
                                        <Form.Checkbox label='Comedy' />
                                        <Form.Checkbox label='Slice of Life' />
                                        <Form.Checkbox label='NTR' />
                                        <Form.Checkbox label='Mystery' />
                                        <Form.Checkbox label='Fantasy' />
                                    </Form.Field>
                                </Form>
                            </Popup.Content>
                    </Popup>
                    <Menu.Item link>
                        <Link to={ROUTES.landing.path}>Home</Link>
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
                                    <br/>
                                    <Link to={ROUTES.accountCreation.path}>New User?</Link>
                                </Form>
                            </Popup.Content>
                    </Popup>
                </Menu>;
    }
}

export default wrapper(TopMenu);
