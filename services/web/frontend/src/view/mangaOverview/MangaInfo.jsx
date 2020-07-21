import React from 'react';

import './mangaOverview.scss';
import ChapterList from '../../components/chapterList/ChapterList.jsx';
import { Col, Row } from 'react-materialize';

const MangaInfo = props => {
    let { manga, getChapterId } = props;
    let { name, summary, image, author, ongoing, genres, source } = manga;

    return (
        <div className="overview">
            <Row>
                <Col s={8}>
                    <div className={'manga-banner'}>
                        {/* <img src={image} className={'manga-banner'} /> */}
                        <img className={'manga-image'} />
                    </div>
                    <div>
                        <h1>
                            {name}
                        </h1>
                        <h4>
                            {author}
                        </h4>
                    </div>
                    <div>
                        <p>
                            {summary}
                        </p>
                    </div>
                </Col>
                <Col s={4}>
                    {source ? source.map(sourceObj => {
                        return (
                            <ChapterList key={sourceObj.name} name={name.split(' ').join('_')} chapters={sourceObj.chapters} getChapterId={getChapterId}></ChapterList>
                        )
                    }) : <div>Loading</div>}
                </Col>
            </Row>
        </div>
    )
}

export default MangaInfo;