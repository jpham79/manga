import React from 'react';

// if (!manga) {
//     const mangaName = window.location.href.split('/').pop().replace('_', ' ');
//     findMangaName(mangaName);
// }

const PageList = props => {
    const { pages }  = props;
    return (
        pages.map(page => 
            <div key={page.num}>
                <img src={page.link} />
            </div>
        )
    )
}

export default PageList;