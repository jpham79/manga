import React from 'react';
import { connect } from 'react-redux';
import PageList from '../../components/pageList/PageList.jsx';
import { getChapterNum } from '../../actions/chapterActions';
import { getMangaName }  from '../../actions/mangaActions';

const mapStateToProps = state => ({
    selectedChapter: state.chapter.selectedChapter,
    manga: state.manga.selectedManga,
    useDualPage: state.requests.dualPage
});

const mapDispatchToProps = {
    getChapterNum: (mangaName, chapterNum) => getChapterNum(mangaName, chapterNum),
    getMangaName: (mangaName) => getMangaName(mangaName)
}

const Reader = props => {
    const { selectedChapter, getChapterNum, getMangaName, manga, useDualPage } = props;
    const { source } = manga;
    let [ , , mangaName, ,chapterNum] = window.location.pathname.split('/'); // Destructure url array, ignoring 1st, 2nd, and 4th elements
    
    const getChapter = (chapterNumber) => getChapterNum(mangaName, chapterNumber);

    if (!selectedChapter) { // if selectedChapter is missing, then manga would be missing as well  
        getMangaName(mangaName.replace(/_/g, ' '));
        getChapter(chapterNum);
    }

    if (selectedChapter && source) { // wait for both api calls to finish
        return (
            <div>
                <PageList source={source} chapterInfo={selectedChapter} getChapter={getChapter} chapterNumber={chapterNum} useDualPage={useDualPage}/>
            </div>
        )
    }  else  {
        return <div> Loading... </div>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
