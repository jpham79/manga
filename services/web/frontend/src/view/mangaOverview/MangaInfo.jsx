import React from 'react';

import './mangaOverview.scss';
import ChapterList from '../../components/chapterList/ChapterList.jsx';
import { Col, Row, Card, CardTitle } from 'react-materialize';

const MangaInfo = props => {
    let { manga, getChapterId } = props;
    let { name, summary, image, author, ongoing, genres, source } = manga;
    
    return (
        <div className="overview">
            { manga ? 
                <Row>
                    <Col s={5} className="info">
                        
                            <Card
                                className="blue-grey darken-3"
                                header={<CardTitle image={image}></CardTitle>}
                                title={<h4>{name}</h4>}>
                                <p>
                                    {author}
                                </p>
                                <p> 
                                    {summary}
                                </p>
                            </Card> 
                    </Col>
                    <Col s={4}>
                        {source.map(sourceObj => {
                            return (
                                <ChapterList key={sourceObj.name} name={name.split(' ').join('_')} chapters={sourceObj.chapters} getChapterId={getChapterId}></ChapterList>
                            )
                        })}
                    </Col>
                </Row>: 
                <div>Loading</div>
            }
        </div>
    )
}

export default MangaInfo;