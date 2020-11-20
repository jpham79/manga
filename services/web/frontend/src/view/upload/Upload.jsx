import React from 'react';
import { connect } from 'react-redux';

import { getChapterNum } from '../../actions/chapterActions';
import { getMangaName }  from '../../actions/mangaActions';

import PageManager from './components/PageManager.jsx';

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
    return <PageManager/>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
