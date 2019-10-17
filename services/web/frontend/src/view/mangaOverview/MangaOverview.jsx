import React from 'react';
import { connect } from 'react-redux';
import { findMangaName }  from '../../actions/mangaActions';
import MangaInfo from './MangaInfo.jsx';


const mapStateToProps = state => ({
    manga: state.manga.selectedManga
});

const mapDispatchToProps = {
    findMangaName: mangaName => findMangaName(mangaName),
}

const MangaOverview = props => {
    let { manga, findMangaName } = props;
    if (!manga) {
        const mangaName = window.location.href.split('/').pop().replace('_', ' ');
        findMangaName(mangaName);
    }
    return (
        <div>
            <div>
                <MangaInfo manga={manga} findMangaName={findMangaName} ></MangaInfo>
            </div>
        </div>
    )
}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);
// export default MangaOverview;