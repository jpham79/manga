import React from 'react';
import { connect } from 'react-redux';
import { findMangaName, getChapter }  from '../../actions/mangaActions';
import MangaInfo from './MangaInfo.jsx';


const mapStateToProps = state => ({
    manga: state.manga.selectedManga
});

const mapDispatchToProps = {
    findMangaName: mangaName => findMangaName(mangaName),
    getChapter: chapterId => getChapter(chapterId),
}

const MangaOverview = props => {
    let { manga, findMangaName, getChapter } = props;
    if (!manga) {
        const mangaName = window.location.href.split('/').pop().replace('_', ' ');
        findMangaName(mangaName);
    }
    return (
        <div>
            <div>
                <MangaInfo manga={manga} findMangaName={findMangaName} getChapter={getChapter} ></MangaInfo>
            </div>
        </div>
    )
}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);
// export default MangaOverview;