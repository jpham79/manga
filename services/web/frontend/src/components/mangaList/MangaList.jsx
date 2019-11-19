import React from 'react'
import { Grid, Segment, Label } from 'semantic-ui-react';
import { Card, Col, Row } from 'react-materialize/lib/';
import { Link } from "react-router-dom";
import '../../view/landing/landing.scss';

let MangaList = props => {

    const { mangas, selectManga } = props;


    return (
        <Row>
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



    //     if (mangas) {
    //         if (mangas.data) {
    //             const data = mangas.data;
    //             return (
    //                 <Grid centered stackable>
    //                     {data.map((manga) => {
    //                         return (
    //                             <div >
    //                                 <Segment className='manga-segment'>
    //                                     <Label attached='bottom'>{manga.name}</Label>
    //                                     <img src={manga.image} height='200px' width='150px' />
    //                                 </Segment>
    //                             </div>
    //                         )
    //                     })
    //                     }
    //                 </Grid>
    //             )
    //         }
    //         return <div>loading</div>

    //     } else {
    //         props.list()
    //         return (<div>loading</div>)
    //     }
    // }
}

export default MangaList;