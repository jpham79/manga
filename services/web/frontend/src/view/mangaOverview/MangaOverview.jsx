import React from 'react';
import { connect } from 'react-redux';
import { getMangaName }  from '../../actions/mangaActions';
import { getChapterId } from '../../actions/chapterActions';
import MangaInfo from './MangaInfo.jsx';


const mapStateToProps = (state) => ({
    manga: state.manga.selectedManga
});

const mapDispatchToProps = {
    getMangaName: mangaName => getMangaName(mangaName),
    getChapterId: chapterId => getChapterId(chapterId),
}

const MangaOverview = (props) => {
    let { manga, getMangaName, getChapterId, searchInput } = props;

    if (!manga) {
        const mangaName = window.location.pathname.split('/').pop().replace(/_/g, ' ');
        getMangaName(mangaName);
    }
    
    return (
        <MangaInfo manga={manga} searchInput={searchInput} getMangaName={getMangaName} getChapterId={getChapterId}></MangaInfo>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);