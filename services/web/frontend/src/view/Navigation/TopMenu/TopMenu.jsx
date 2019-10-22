import 'semantic-ui-css/semantic.min.css';
import './top-menu.scss';

import React from 'react';
import { Link, withRouter   } from "react-router-dom"
import { Menu, Popup, Form, Input, Button } from 'semantic-ui-react';

import { ROUTES } from '../../../root/App.js';

export class TopMenu extends React.Component {
    
    filter = [
        this.createTag(1, 'Isekai'),
        this.createTag(2, 'Action'),
        this.createTag(3, 'Comedy'),
        this.createTag(4, 'Slice of Life'),
        this.createTag(5, 'Wholesome NTR'),
        this.createTag(6, 'Mystery'),
        this.createTag(7, 'Fantasy')
    ];

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
        this.createTag = this.createTag.bind(this);
    }

    createTag(id, name) {
        return {
            name,
            id
        }
    }

    handleItemClick(event, { checked }, id) { 
        const { selectTags } = this.props;
        let selections = this.props.selectedTags.slice();
        let index = -1;

        if (checked && !selections.includes(id)) selections.push(id);
        if (!checked && (index = selections.indexOf(id)) >= 0) selections.splice(index, 1);

        selectTags(selections);
    }

    enterSearch(event, input, history) {
        console.log(input);
        
        history.push("/search/" + input);
    }

    render() {
        const { showSidebar, selectedTags } = this.props;
        const SearchBar = withRouter(({ history }) => (
            <Input icon='search' placeholder='Search' iconPosition='left' onChange={(event, { value }) => this.enterSearch(event, value, history)}/>
        ));
        // return as array to get the Pusher on the parent to work properly
        return <Menu inverted className='top-menu'>
                    <Menu.Item onClick={showSidebar}>Show Navagation</Menu.Item>
                    <Menu.Item position='right'><SearchBar /></Menu.Item>
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
                                        { this.filter.map((tag) =>  (
                                                <Form.Checkbox 
                                                    onChange={(event, target) => this.handleItemClick(event, target, tag.id)} 
                                                    checked={selectedTags.includes(tag.id)}
                                                    key={tag.id} 
                                                    label={tag.name} />))
                                        }
                                    </Form.Field>
                                </Form>
                            </Popup.Content>
                    </Popup>
                    <Menu.Item link>
                        <Link to={ROUTES.landing}>Home</Link>
                    </Menu.Item>
                    <Menu.Item link>
                        Download
                    </Menu.Item>
                    <Menu.Item link>
                        <Link to={ROUTES.favorites}>Favorites</Link>
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
                                    <Link to={ROUTES.accountCreation}>New User?</Link>
                                </Form>
                            </Popup.Content>
                    </Popup>
                </Menu>;
    }
}
