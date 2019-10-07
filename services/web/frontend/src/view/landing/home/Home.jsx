import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Image, Segment, Label } from 'semantic-ui-react';
import './home.scss';

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.filterMangas = this.filterMangas.bind(this);
    }

    filterMangas(selectedTags) {

    }

    render() {
        let { mangas, selectedTags } = this.props;
        console.log(selectedTags);

        let columnMapper = (index) => {
            let columns = [];
            for (let x = index; x < index + 3 && x < mangas.length; x++) {
                columns.push(
                    <Grid.Column width={3}>
                        <Segment className='manga-segment'>
                            <Label attached='bottom'>{mangas[x].name}</Label>
                            <Image size='large' src={mangas[x].image} />
                        </Segment>
                    </Grid.Column>
                );
            }

            return columns;
        }
        
        return (
                <Grid centered stackable columns={3} className='home'>
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