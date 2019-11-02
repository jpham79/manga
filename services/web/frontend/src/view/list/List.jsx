import React from 'react'
import { connect } from 'react-redux';

import { listTest } from '../landing/home/homeActions.js';
import { selectManga } from '../../actions/mangaActions';
import MangaGrid from '../../components/mangaGrid/MangaGrid.jsx';

const mapStateToProps = (state) => ({
    mangas: state.requests.mangas,
    mangaList: state.requests.ListTest ? state.requests.ListTest : null,
    selectedTags: state.requests.selectedTags
});
  
const mapDispatchToProps = {
    selectManga: manga => selectManga(manga),
    list: listTest
}

let List = (props) => {

    const { mangaList, selectManga, list } = props;
    let mangas = [];

    if (!mangaList) list();
    if (mangaList && mangaList.data) mangas = mangaList.data;
    
    return <MangaGrid mangas={mangas} selectManga={selectManga} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(List);