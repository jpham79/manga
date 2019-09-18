import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Header, Segment } from 'semantic-ui-react';

export class Home extends React.Component {

    render() {
        return (
            <Segment basic>
                <Header as='h3' color='blue'>Application Content</Header>
            </Segment>
        )
    }
}