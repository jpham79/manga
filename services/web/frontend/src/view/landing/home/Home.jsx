import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Image, Segment, Label } from 'semantic-ui-react';
import '../landing.scss';

export class Home extends React.Component {
    
    render() {
        let { mangas } = this.props;
        
        return (
                <Grid centered stackable columns={3} className='manga-grid'>
                    { mangas.map((manga) => 
                            <Segment className='manga-segment'>
                                <Label attached='bottom'>{manga.name}</Label>
                                <img src={manga.image} height='200px' width='150px' />
                            </Segment>
                        ) 
                    }
                </Grid>
        )
    }
}