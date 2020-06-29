import React from 'react';
import { Card } from 'react-materialize';
import { Link } from "react-router-dom";
import './manga-list.scss';

let MangaList = props => {
    const { mangas, selectManga } = props;

    return (
        <div className="manga-list">
            {mangas.map((manga) =>
                <Link key={manga._id} to={`manga/${manga.name.split(' ').join('_')}`} className="manga-card">
                    <Card className={'card small blue-grey darken-3 hoverable'}
                        header={
                            <div className="card-image">
                                {/* <img className={'responsive-img'} src={'manga.image'} /> can't access image (403), disabled for now*/}
                            </div>
                        }
                        onClick={() => selectManga(manga)}>
                        <div className="white-text content">
                            {manga.name}
                        </div>
                    </Card>
                </Link>
            )}
        </div>
    )
}

export default MangaList;