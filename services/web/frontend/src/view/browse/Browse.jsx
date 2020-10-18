import React from 'react';
import { connect } from 'react-redux';

import { listTest } from '../../store/homeActions.js';
import { selectManga } from '../../actions/mangaActions';

import MangaTable from '../../components/mangaTable/MangaTable.jsx';

const mapStateToProps = (state) => ({
    mangas: state.requests.mangas,
    mangaList: state.requests.ListTest ? state.requests.ListTest : null,
    selectedTags: state.requests.selectedTags,
    searchInput: state.requests.searchInput
});
  
const mapDispatchToProps = {
    selectManga: manga => selectManga(manga),
    list: listTest
}

const Browse = (props) => {
    let { selectedTags, list, mangaList, selectManga, searchInput } = props;
    let mangas = [];
    
    if (!mangaList) list();
    
    if (mangaList && mangaList.data) mangas = mangaList.data;
    
    return <MangaTable mangas={mangas} selectManga={selectManga} searchInput={searchInput}/>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);