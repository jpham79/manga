import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Segment, Label } from 'semantic-ui-react';
import '../landing.scss';

const Category = (props) => {
    let { mangas } = props;
        
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

export default Category;