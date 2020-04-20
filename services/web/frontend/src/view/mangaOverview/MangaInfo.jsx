import React from 'react';

import './mangaOverview.scss';
import ChapterList from '../../components/chapterList/ChapterList.jsx';
import {Col, Row } from 'react-materialize/lib/';

const MangaInfo = props => {
    let { manga, getChapterId } = props;
    let { name, summary, image, author, ongoing, genres, source } = manga;

    return (
        <div>
            <Row>
                <Row>
                    <Col s={12}>
                        <div>
                            <img src={image} className={'manga-banner'} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col s={8}>
                        <div>
                            <h1>
                                {name}
                            </h1>
                            <h2>
                                {author}
                            </h2>
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
            </Row>



        </div>
    )
}

export default MangaInfo;