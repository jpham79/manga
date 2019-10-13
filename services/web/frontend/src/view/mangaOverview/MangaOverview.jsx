import React from 'react';

import { connect } from 'react-redux';
import MangaInfo from './MangaInfo/MangaInfo.jsx';
import ChapterList from './ChapterList/ChapterList.jsx';


const mapStateToProps = (state) => ({
    manga: state.manga.selectedManga
});

const mapDispatchToProps = {

}

const MangaOverview = props => {
    const { manga } = props;
    const chapters = manga.chapters;
    return (
        <div>
            <div>
                {manga.name}
            </div>
            <div>
                {manga.chapters && manga.chapters.length > 0 ? <ChapterList chapters={chapters} /> : 'loading'}
                
            </div>
        </div>
    )
}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);
// export default MangaOverview;