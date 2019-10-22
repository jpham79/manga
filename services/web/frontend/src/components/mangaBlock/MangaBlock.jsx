import React from 'react'

import './mangaBlock.scss'

const MangaBlock = (props) => {
    const { manga } = props;
    console.log(manga);
    
    return (
            <img src={manga.image} className='manga-tile' height='200px' width='150px' />
    )
}


export default MangaBlock;