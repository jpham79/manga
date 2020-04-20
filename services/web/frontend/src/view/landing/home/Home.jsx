import React from 'react';

import { Card, Col, Row } from 'react-materialize';
import { Link } from "react-router-dom";
import '../landing.scss';

export class Home extends React.Component {
    
    render() {
        const { mangas, selectManga } = this.props;

        return (
            <Row className='manga-grid'>
                {mangas.map((manga) =>
                    <Col className="" s={12} m={4} l={3} xl={1}>
                        <Link key={manga._id} to={`manga/${manga.name.split(' ').join('_')}`}>
                            <Card className={'card small blue-grey darken-3 z-depth-2 hoverable'}
                                header={
                                    <div className="card-image">
                                        <img className={'responsive-img'} src={manga.image} />
                                    </div>
                                }
                                onClick={() => selectManga(manga)}>
                                <div className="white-text">
                                    {manga.name}
                                </div>
                            </Card>
                        </Link>
                    </Col>
                )}
            </Row>
        )
    }
}