import React from 'react';

import './mangaOverview.scss';
import ChapterList from '../../components/chapterList/ChapterList.jsx';
import { Col, Row, Card, CardTitle, Button } from 'react-materialize';
import { Link } from "react-router-dom";

const MangaInfo = props => {
    let { manga, mangaKey, getChapterId } = props;
    let { name, summary, image, author, ongoing, genres, source } = manga;
    
    return (
        <div className="overview">
            { manga ? 
                <Row>
                    <Col s={5} className="info">
                            <Card
                                className="blue-grey darken-3"
                                header={<CardTitle image={image}></CardTitle>}>
                                <h4>{name}</h4>
                                <p>
                                    {author}
                                </p>
                                <Link to={`/upload/${mangaKey}`} >
                                    <Button variant="contained">Upload New Chapter</Button>
                                </Link>
                                <p className='summary'> 
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
    );
}

export default MangaInfo;