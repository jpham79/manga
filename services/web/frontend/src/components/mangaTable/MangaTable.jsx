import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

import './manga-table.scss';

/**
 * Shown a vertical list of of all mangas in the DB,
 * or the manga that matches the search terms that the
 * user has written
 */
const MangaTable = props => {
    const { mangas, selectManga, searchInput } = props;
    // This will be used when the user wants to find mangas that starts with A-Z
    const [firstLetter, setFirstLetter] = useState('');
    
    return (
        <div className="manga-table">
            {
                mangas.filter((manga) => manga.name.includes(searchInput))
                        .map((manga) =>
                            <Link key={manga._id} to={`manga/${manga.name.split(' ').join('_')}`} className="manga-card">
                                <div className={'card-container small blue-grey darken-3 hoverable'} onClick={() => selectManga(manga)}>
                                    <div className="card-image">
                                        <img className={'responsive-img'} src={manga.image} />
                                    </div>
                                    <div className="white-text content">
                                        {manga.name}
                                    </div>
                                </div>
                            </Link>
                        )
            }
        </div>
    )
}

export default MangaTable;