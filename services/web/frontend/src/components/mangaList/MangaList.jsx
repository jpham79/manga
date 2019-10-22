import React from 'react'
import { Link } from "react-router-dom";
import MangaBlock from '../mangaBlock/MangaBlock';
import './mangaList.scss';

let MangaList = (props) => {
    const { mangas, selectManga } = props;

    return (
        <div className='scrolling-list'>
            {mangas.map((manga) => 
                <Link key={manga._id} to={`/manga/${manga.name.split(' ').join('_')}`}>
                        <div onClick={() => selectManga(manga)}>
                            <MangaBlock key={manga.name} className='card' manga={manga}/>
                        </div>
                </Link>)}
        </div>
    )
}

export default MangaList;