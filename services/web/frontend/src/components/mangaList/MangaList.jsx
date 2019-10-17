import React from 'react'
import { Grid, Segment, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import '../../view/landing/landing.scss';

let MangaList = props => {

    const { mangas, selectManga } = props;


    return (
        <Grid centered stackable columns={3} className='manga-grid'>
            {mangas.map((manga) =>
                <Link to={`manga/${manga.name.split(' ').join('_')}`}>
                    <Segment className='manga-segment' onClick={() => selectManga(manga)}>
                        <Label attached='bottom'>{manga.name}</Label>
                        <img src={manga.image} height='200px' width='150px' />
                    </Segment>
                </Link>
            )
            }
        </Grid>
    )



    //     if (mangas) {
    //         if (mangas.data) {
    //             const data = mangas.data;
    //             return (
    //                 <Grid centered stackable>
    //                     {data.map((manga) => {
    //                         return (
    //                             <div >
    //                                 <Segment className='manga-segment'>
    //                                     <Label attached='bottom'>{manga.name}</Label>
    //                                     <img src={manga.image} height='200px' width='150px' />
    //                                 </Segment>
    //                             </div>
    //                         )
    //                     })
    //                     }
    //                 </Grid>
    //             )
    //         }
    //         return <div>loading</div>

    //     } else {
    //         props.list()
    //         return (<div>loading</div>)
    //     }
    // }
}

export default MangaList;