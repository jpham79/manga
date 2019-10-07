import React from 'react'
import { Grid, Image, Segment, Label } from 'semantic-ui-react';


let columnMapper = (list, index, itemPerRow) => {
    let columns = [];
   
    for (let x = index; x < index + itemPerRow && x < list.length; x++) {
        columns.push(
            <Grid.Column width={2}>
                    <Label attached='bottom'>{list[x].name}</Label>
                    <Image size='large' src={list[x].image} />
            </Grid.Column>
        );
    }

    return columns;
}

let MangaList = (props) => {

    const mangas = props.mangaList;

    if (mangas) {
        if (mangas.data) {
            const data = mangas.data;
            const mangaPerRow = 8;      
            
            return (
                <Grid centered stackable>
                    {data.map((manga, index) => {
                        if (index % mangaPerRow === 0) {
                            return (
                                <Grid.Row>
                                    { columnMapper(data, index, mangaPerRow) }
                                </Grid.Row>
                            )
                        }
                    })}
                </Grid>
            )
        }
        return <div>loading</div>

    } else {
        props.list()
        return (<div>loading</div>)
    }
}


export default MangaList