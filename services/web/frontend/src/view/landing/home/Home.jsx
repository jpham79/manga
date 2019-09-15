import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import wrapper from '../Landing.jsx';

import { Header, Segment } from 'semantic-ui-react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        
    }

    render() {
        return (
            <Segment basic>
                <Header as='h3' color='blue'>Application Content</Header>
            </Segment>
        )
    }
}

export default wrapper(Home);