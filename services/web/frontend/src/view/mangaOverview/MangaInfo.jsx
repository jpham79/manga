import React from 'react';
import './mangaOverview.scss';
import { Container, Grid, Image, Header } from 'semantic-ui-react'
import ChapterList from './ChapterList.jsx';
const MangaInfo = props => {
    let { manga } = props;
    let { name, summary, image, author, ongoing, genres, source } = manga;

    return (
        <div>
            <Grid>
                <Grid.Column width={16}>
                    <div>
                        <img src={image} className={'manga-banner'} />
                    </div>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Container>
                        <h1>
                            {name}
                        </h1>
                        <h2>
                            {author}
                        </h2>
                    </Container>
                    <Container>
                        <p>
                            {summary}
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column width={4}>
                    {source ? source.map(sourceObj => {
                        return (
                            <ChapterList chapters={sourceObj.chapters}></ChapterList>
                        )
                    }) : <div>Loading</div>}
                </Grid.Column>
            </Grid>



        </div>
    )
}

export default MangaInfo;