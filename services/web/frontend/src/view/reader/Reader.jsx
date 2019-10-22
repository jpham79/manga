import React from 'react';
import { connect } from 'react-redux';
import PageList from '../../components/pageList/PageList.jsx';
import { getChapterNum } from '../../actions/chapterActions';


const mapStateToProps = state => ({
    selectedChapter: state.chapter.selectedChapter
});

const mapDispatchToProps = {
    getChapterNum: (mangaName, chapterNum) => getChapterNum(mangaName, chapterNum),
}

const Reader = props => {
    const { selectedChapter, getChapterNum } = props;
    if (!selectedChapter) {
        const urlArr = window.location.pathname.split('/');
        let [ , , mangaName, ,chapterNum] = urlArr; // Destructure array, ignoring 1st, 2nd, and 4th elements
        console.log(urlArr);
        
        console.log(chapterNum)
        getChapterNum(mangaName, chapterNum);
    }
    if (selectedChapter) {
        const { pages } = selectedChapter;
        return (
            <div>
                <PageList pages={pages}/>
            </div>
        )
    }  else  {
        return <div> Loading... </div>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
