import React from 'react'
import { Grid, Segment, Label } from 'semantic-ui-react';

import '../../../view/landing/landing.scss';

let MangaList = (props) => {

    const mangas = props.mangaList;

    if (mangas) {
        if (mangas.data) {
            const data = mangas.data;
            return (
                <Grid centered stackable>
                    {data.map((manga) => {
                        return (
                                <Segment className='manga-segment'>
                                    <Label attached='bottom'>{manga.name}</Label>
                                    <img src={manga.image} height='200px' width='150px' />
                                </Segment>
                            )
                        })
                    }
                </Grid>
            )
        }
        return <div>loading</div>

    } else {
        props.list()
        return (<div>loading</div>)
    }
}


export default MangaList