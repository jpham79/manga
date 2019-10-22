import React from 'react'
import { Grid, Segment, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import '../../../view/landing/landing.scss';
import MangaBlock from '../mangaBlock/MangaBlock';
import './mangaList.scss';

let MangaList = props => {

    const { mangas, selectManga } = props;


    return <div className='scrolling-list'>
        {mangas.map((manga) => <MangaBlock key={manga.name} className='card' manga={manga}/>)}
    </div>

    // return (
    //     <Grid centered stackable columns={3} className='manga-grid'>
    //         {mangas.map((manga) =>
    //             <Link key={manga._id} to={`manga/${manga.name.split(' ').join('_')}`}>
    //                 <Segment  className='manga-segment' onClick={() => selectManga(manga)}>
    //                     <Label attached='bottom'>{manga.name}</Label>
    //                     <img src={manga.image} height='200px' width='150px' />
    //                 </Segment>
    //             </Link>
    //         )
    //         }
    //     </Grid>
    // )
}

export default MangaList;