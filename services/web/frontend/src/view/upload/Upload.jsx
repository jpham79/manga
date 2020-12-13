import React from 'react';
import { connect } from 'react-redux';

import { getChapterNum } from '../../actions/chapterActions';
import { getMangaName }  from '../../actions/mangaActions';

import PageManager from './components/PageManager.jsx';
import MangaManager from './components/MangaManager.jsx';

const mapStateToProps = state => ({
    selectedChapter: state.chapter.selectedChapter,
    manga: state.manga.selectedManga,
    useDualPage: state.requests.dualPage
});

const mapDispatchToProps = {
    getChapterNum: (mangaName, chapterNum) => getChapterNum(mangaName, chapterNum),
    getMangaName: (mangaName) => getMangaName(mangaName)
}

const Upload = (props) => {
    const [ , , mangaName] = window.location.pathname.split('/'); // Destructure url array, and only keep 3rd element

    return mangaName == 'new-manga' ? <MangaManager/> : <PageManager mangaName={mangaName}/>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
