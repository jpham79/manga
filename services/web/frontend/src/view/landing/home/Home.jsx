import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Image } from 'semantic-ui-react';

export class Home extends React.Component {

    render() {
        let { mangas } = this.props;

        let columnMapper = (index) => {
            let columns = [];
            for (let x = index; x < index + 3 && index < mangas.length; x++) {
                columns.push(
                    <Grid.Column width={3}>
                        <Image size='large' src={mangas[x].image} />
                    </Grid.Column>
                );
            }

            return columns;
        }
        
        return (
            <Grid centered stackable columns={3}>
                { mangas.map((manga, index) => {
                    if (index % 3 === 0) {
                        return (
                            <Grid.Row>
                                { columnMapper(index) }
                            </Grid.Row>
                        )
                    }
                    else {
                        return '';
                    }
                }) }
            </Grid>
        )
    }
}