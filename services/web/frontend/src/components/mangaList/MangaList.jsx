import React from 'react';
import { Link } from "react-router-dom";
import './manga-list.scss';

let MangaList = props => {
    const { mangas, selectManga } = props;

    return (
        <div className="manga-list">
            {mangas.map((manga) =>
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
            )}
        </div>
    )
}

export default MangaList;