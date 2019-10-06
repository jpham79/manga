import React from 'react'
import { Grid, Image, Segment, Label } from 'semantic-ui-react';

let rowMapper = (list, size) => {
    let rows = [];
    let columns = [];
    for (let i = 0; i < list.length; i++) {
        if (columns.length < size) {
            columns.push(
                <Grid.Column width={2}>
                        <Label attached='bottom'>{list[i].name}</Label>
                        <Image size='large' src={list[i].image} />
                </Grid.Column>
            );
        } else {
            rows.push([...columns]);
            columns = [];
            columns.push(
                <Grid.Column width={2}>
                        <Label attached='bottom'>{list[i].name}</Label>
                        <Image size='large' src={list[i].image} />
                </Grid.Column>
            );
        }

    }
    rows.push([...columns]);
    columns = [];
    console.log(rows);
    
    return rows;
}

let MangaList = props => {

    const mangas = props.mangaList;

    if (mangas) {
        if (mangas.data) {
            console.log(mangas.data);
            const data = mangas.data;
            let rows = rowMapper(data, 8)
            return (
                <Grid>
                    {rows.map(row => {
                        return (
                            <Grid.Row>
                                {row.map(column => column)}
                            </Grid.Row>
                    )
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