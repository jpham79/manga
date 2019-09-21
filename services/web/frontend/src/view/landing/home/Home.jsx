import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Image } from 'semantic-ui-react';

export class Home extends React.Component {

    render() {
        return (
            <Grid centered stackable columns={3}>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}