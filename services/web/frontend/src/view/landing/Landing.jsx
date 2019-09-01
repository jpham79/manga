import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Header, Segment, Sidebar } from 'semantic-ui-react';
import { SideNav } from './components/sidenav/SideNav.jsx';

export class Landing extends React.Component {

    render() {
        return (
            <Sidebar.Pushable as={Segment}>
                <SideNav/>
        
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}